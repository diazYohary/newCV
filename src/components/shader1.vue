<template>
  <div class="layered-background-wrapper">
    <div class="static-gradient-layer"></div>

    <canvas ref="shaderCanvas" class="shader-canvas"></canvas>

    <div v-if="!webglSupported" class="webgl-fallback-overlay"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'AuroraBackground',
  setup() {
    const shaderCanvas = ref(null);
    let gl = null;
    let program = null;
    let animationFrameId = null;
    let startTime = performance.now();
    const webglSupported = ref(true);

    // --- GLSL Shaders ---
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader para el efecto de Aurora Wavy (más parecido a dsXyzf)
    const fragmentShaderSource = `
      precision highp float; // Consider 'mediump' for older mobile devices
      uniform float time;
      uniform vec2 resolution;

      // Re-map a value from [0,1] to another range [min, max]
      float remap(float value, float inMin, float inMax, float outMin, float outMax) {
          return outMin + (value - inMin) * (outMax - outMin) / (inMax - inMin);
      }

      // Simple 2D hash function (pseudo-random) for noise generation
      vec2 hash(vec2 p) {
          p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
          return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
      }

      // Value noise based on hash function
      float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);

          // Quintic interpolation for smoother gradients
          vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

          float a = dot(hash(i + vec2(0.0,0.0)), f - vec2(0.0,0.0));
          float b = dot(hash(i + vec2(1.0,0.0)), f - vec2(1.0,0.0));
          float c = dot(hash(i + vec2(0.0,1.0)), f - vec2(0.0,1.0));
          float d = dot(hash(i + vec2(1.0,1.0)), f - vec2(1.0,1.0));

          return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }

      // Fractal Brownian Motion (FBM) with multiple octaves
      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5; // Initial amplitude
          float frequency = 1.0; // Initial frequency

          for (int i = 0; i < 5; i++) { // Using 5 octaves for more complexity
              value += amplitude * noise(p * frequency);
              amplitude *= 0.5;    // Decrease amplitude for each octave
              frequency *= 2.0;    // Increase frequency for more detail
          }
          return value;
      }

      // Color palette similar to aurora
      vec3 auroraPalette(float t) {
          // Normalize t to [0,1]
          t = fract(t);

          vec3 color1 = vec3(0.0, 0.1, 0.3); // Dark blue/purple base
          vec3 color2 = vec3(0.2, 0.5, 0.8); // Medium blue
          vec3 color3 = vec3(0.5, 0.9, 1.0); // Bright cyan
          vec3 color4 = vec3(0.8, 0.9, 0.2); // Greenish yellow
          vec3 color5 = vec3(1.0, 0.5, 0.0); // Orange
          vec3 color6 = vec3(0.7, 0.1, 0.5); // Magenta/Pink

          if (t < 0.2) return mix(color1, color2, t / 0.2);
          else if (t < 0.4) return mix(color2, color3, (t - 0.2) / 0.2);
          else if (t < 0.6) return mix(color3, color4, (t - 0.4) / 0.2);
          else if (t < 0.8) return mix(color4, color5, (t - 0.6) / 0.2);
          else return mix(color5, color6, (t - 0.8) / 0.2);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        // Adjust UV to center and maintain aspect ratio
        uv -= 0.5;
        uv.x *= resolution.x / resolution.y; // Aspect ratio correction

        float t = time * 0.1; // Slower overall animation speed

        // Add various movements to the noise input coordinates
        vec2 p = uv * 2.0; // Initial scale for noise
        p += vec2(sin(t * 0.3), cos(t * 0.4)) * 0.5; // Large, slow global movement

        // Apply a subtle distortion/flow effect with another noise layer
        vec2 flow_dir = vec2(noise(p + t * 0.5), noise(p * 1.5 - t * 0.3));
        p += flow_dir * 0.3; // Amount of distortion

        // Get the FBM value for the main aurora shape
        float fbmValue = fbm(p + vec2(t * 0.2, t * 0.1));

        // Create a more defined aurora-like shape
        // By adding a periodic wave and enhancing contrast
        float auroraShape = fbmValue + sin(uv.y * 15.0 + t * 0.8) * 0.2; // Add vertical wave
        auroraShape = smoothstep(-0.3, 0.7, auroraShape); // Sharpen contrast

        // Map the aurora shape value to a color from the palette
        vec3 finalColor = auroraPalette(auroraShape + t * 0.05); // Slight color shift over time

        // Add a glow/bloom effect to the brighter parts
        float glowAmount = pow(auroraShape, 3.0) * 1.5; // Adjust power for glow intensity
        finalColor += glowAmount * vec3(0.1, 0.5, 1.0); // Add a bright blue/cyan glow

        // Output with transparency to blend with the static gradient background
        gl_FragColor = vec4(finalColor, smoothstep(0.0, 1.0, auroraShape + 0.1)); // Dynamic opacity based on aurora intensity
      }
    `;

    // --- WebGL Initialization and Rendering Logic (Mismo que antes) ---
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
      const fragmentShader = compileShader(fragmentShaderSource, gl.VERTEX_SHADER); // FIX: Should be gl.FRAGMENT_SHADER
      if (!vertexShader || !fragmentShader) { // Check if compilation failed for either
        webglSupported.value = false;
        return;
      }
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
      const positions = new Float32Array([
        -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
        -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
      ]);
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
      const positionAttributeLocation = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
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
  z-index: -2;
  overflow: hidden;
}

.static-gradient-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Colores base oscuros, similares al espacio o noche polar */
  background: linear-gradient(135deg, #050510 0%, #150A25 100%);
  z-index: -1;
}

.shader-canvas {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.webgl-fallback-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}
</style>