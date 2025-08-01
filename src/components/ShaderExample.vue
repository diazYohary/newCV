<template>
  <div class="layered-background-wrapper">
    <div class="static-gradient-layer"></div>

    <canvas ref="shaderCanvas" class="shader-canvas"></canvas>

    <div v-if="!webglSupported" class="webgl-fallback-overlay">
      </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'LayeredWaveBackground',
  setup() {
    const shaderCanvas = ref(null);
    let gl = null;
    let program = null;
    let animationFrameId = null;
    let startTime = performance.now();
    const webglSupported = ref(true); // Controla la visibilidad del fallback

    // --- GLSL Shaders ---
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader para el efecto de ola
    const fragmentShaderSource = `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;

      // Simple noise function for organic movement
      float noise(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;

        float t = time * 0.1; // Control general speed of waves

        // Create multiple wave patterns
        float wave1 = sin(uv.x * 12.0 + t * 1.5) * 0.05; // Horizontal wave
        float wave2 = cos(uv.y * 10.0 + t * 0.8) * 0.04; // Vertical wave
        float wave3 = sin(uv.x * 7.0 + uv.y * 5.0 + t * 2.0) * 0.03; // Diagonal wave

        // Combine waves and add noise
        float finalWave = wave1 + wave2 + wave3;
        finalWave += noise(uv * 7.0 + t * 0.6) * 0.08; // Add stronger noise for more ripple

        // Map the wave value to a smoother range [0, 1] for color interpolation
        finalWave = smoothstep(-0.2, 0.2, finalWave); // Adjust these values to control wave intensity/contrast

        // Define colors for the wavy overlay (semi-transparent)
        // These colors will blend with the static gradient below
        vec3 colorA = vec3(0.0, 0.4, 0.7); // Azul medio
        vec3 colorB = vec3(0.2, 0.6, 1.0); // Azul claro brillante

        vec3 wavyColor = mix(colorA, colorB, finalWave);

        // Output with transparency so the underlying gradient can show through
        gl_FragColor = vec4(wavyColor, 0.6); // 0.6 para una transparencia del 60%
      }
    `;

    // --- WebGL Initialization and Rendering Logic ---

    const compileShader = (source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const initWebGL = () => {
      gl = shaderCanvas.value.getContext('webgl') || shaderCanvas.value.getContext('experimental-webgl');

      if (!gl) {
        console.warn('WebGL not supported. Shader layer will not be visible.');
        webglSupported.value = false;
        return;
      }

      webglSupported.value = true;

      const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
      const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

      program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        gl = null;
        webglSupported.value = false;
        return;
      }

      gl.useProgram(program);

      // Create a full-screen quad (two triangles)
      const positions = new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0
      ]);

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

      const positionAttributeLocation = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      // Get uniform locations
      gl.uniforms = {
        time: gl.getUniformLocation(program, 'time'),
        resolution: gl.getUniformLocation(program, 'resolution'),
      };

      resizeCanvas();
      render();
    };

    const resizeCanvas = () => {
      if (!gl || !shaderCanvas.value) return;

      const canvas = shaderCanvas.value;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);

      gl.uniform2f(gl.uniforms.resolution, canvas.width, canvas.height);
    };

    const render = (currentTime) => {
      if (!gl) return;

      const elapsedTime = (currentTime - startTime) / 1000;

      gl.uniform1f(gl.uniforms.time, elapsedTime);

      // Importante: No borrar el color aquí si queremos que el gradiente de fondo se vea.
      // El shader dibujará encima con transparencia.
      // gl.clearColor(0.0, 0.0, 0.0, 1.0);
      // gl.clear(gl.COLOR_BUFFER_BIT);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    onMounted(() => {
      initWebGL();
      window.addEventListener('resize', resizeCanvas);
    });

    onUnmounted(() => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', resizeCanvas);
      if (gl) {
        gl.deleteProgram(program);
        // Puedes añadir más limpieza de recursos GL aquí si es necesario
      }
    });

    return {
      shaderCanvas,
      webglSupported
    };
  }
};
</script>

<style scoped>
.layered-background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* z-index del wrapper para controlar la capa base del fondo */
  z-index: 1; /* Asegura que todo el fondo esté debajo del contenido principal de la página */
  overflow: hidden;
}

/* Capa de Gradiente Estático */
.static-gradient-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1A2980 0%, #26D0CE 100%); /* Ejemplo de gradiente */
  /* Puedes ajustar los colores y la dirección del gradiente a tu gusto */
  z-index: 2; /* Estará "debajo" de la capa del shader */
}

/* Capa del Shader Wavy */
.shader-canvas {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  /* Importante: El z-index de la capa del shader debe ser mayor que el del gradiente estático */
  z-index: 3; /* Estará "encima" de la capa de gradiente */
}

/* Fallback para cuando WebGL no está soportado */
.webgl-fallback-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Este div solo se activa si webglSupported es false */
  /* No tiene un background aquí porque la capa .static-gradient-layer ya lo provee */
  /* Puedes añadir un color semitransparente o un patrón si quieres un fallback visual diferente */
  background-color: rgba(0, 0, 0, 0); /* Transparente por defecto, el gradiente base ya es el fallback */
  pointer-events: none; /* Asegura que no interfiera con eventos del ratón */
  z-index: 4; /* Asegura que esté por encima del canvas si aparece */
}
</style>