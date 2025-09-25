import { createI18n } from "vue-i18n";

const messages = {
  en: {
    presentation: {
      title_pt1: "Frontend Developer & UX/UI Designer",
      title_pt2: "IT Engineer",
      ctaBtn:'Learn more'
      },
    aboutme:{
      title:"About Me",
      intro:"I'm an IT Engineer with a solid grounding in mathematics and programming. My core interest and skills are concentrated on web development, specifically with strong proficiency in frontend design and user experience (UX/UI). While my primary focus is web development, my solid educational background enables me to quickly adapt to new challenges and master any technology required to achieve my goals.",
      contact:'Contact'
    },
    experience:{
      title:'Experience',
      bmt:{
        title:"BMTools",
        role:"Frontend Developer & UX/UI Designer",
        location:"Puebla, Mexico",
        dates:"July 2025 - Present",
        A1:'Leadership in the product lifecycle, from ideation and prototyping in Figma to functional code implementation, ensuring an intuitive user experience on SaaS platforms.',
        A2:'Development of dynamic and modular interfaces, creating reusable components with the necessary programming logic to interact directly with the database.',
        A3:'Optimization and redesign of digital products, enhancing usability and information architecture to boost performance and key business metrics.',
        A4:'Implementation of version control with Git/GitHub, managing the integration of new features and ensuring efficient collaboration among development teams.',
        A5:'Large-scale platform management, administering key configurations and ensuring accurate content updates and maintenance for complex products.',
      },
      dfsoft:{
        title:"DFSOFT",
        role:"Web Developer Intern",
        location:"Puebla, Mexico (Hybrid)",
        dates:"January 2025 - July 2025",
        A1:'Comprehensive web development, transforming Figma designs into functional websites, ensuring a fluid and responsive user experience on all devices.',
        A2:'Updating existing user interfaces (frontend) to enhance user experience, with a focus on optimizing performance, accessibility, and usability.',
        A3:'Construction of reusable components in Vue.js for internal platforms, optimizing development and maintaining visual and functional consistency.',
        A4:'Leveraging Laravel for web project development, managing routing, manipulating application logic, and enriching user interfaces with dynamic functionalities.',
        A5:'Administration of websites via CMS, ensuring accurate content publishing and maintenance, and managing key configurations.',
      }
    },
    skills:{
      title:'Skills & Interests',
      T1:'Technical Skills',
      T2:'Frameworks & Libraries',
      T3:'Design & Prototyping',
      T4:'Databases',
      T5:"Version Control",
      T6:"Operating Systems",
      T7:"Languages",
      LVL1:"Beginner",
      LVL2:"Intermediate",
      LVL3:"Advanced",
      enLVL:"English (B2)"
    },
    education:{
      title:'Education',
      college:'Benemerita Universidad Autonoma de Puebla',
      career:'Bachelor’s Degree in Information Technology Engineering',
      gpa:'GPA: 3.7',
      date:"January 2021 – July 2025",
    },
    message: {
      hello: "Hello!",
      welcome: "Welcome to our website!",
      aboutUs: "About Us",
      contact: "Contact",
      readMore: "Read more",
    },
    // Puedes tener múltiples objetos anidados para organizar tus traducciones
    buttons: {
      submit: "Submit",
      cancel: "Cancel",
      show_details: "Show Details",
      hide_details: "Hide Details",
    },
  },
  es: {
    presentation: {
      title_pt1: "Desarrollador Frontend & Diseñador UX/UI",
      title_pt2: "Ingeniero en Tecnologías de La Información",
      ctaBtn:'Saber más'
      },
    aboutme:{
      title:"Acerca de Mí",
      intro:"Soy Ingeniero en Tecnologías de la Información, con una sólida base en matemáticas y programación. Mi pasión e intereses se centran en el desarrollo web, donde poseo un fuerte dominio en el frontend y experiencia de usuario (UX/UI). Aunque mi enfoque principal radica en el desarrollo web, mi sólida formación me permite adaptarme rápidamente a nuevos desafíos y aprender cualquier tecnología que sea necesaria para alcanzar mis objetivos.",
      contact:'Datos de Contacto'
    },
    experience:{
      title:'Experiencia Laboral',
      bmt:{
        title:"BMTools",
        role:"Desarrollador Frontend & Diseñador UX/UI",
        location:"Puebla, México",
        dates:"Julio 2025 - Presente",
        A1:'Liderazgo en el ciclo de vida de productos, desde la ideación y el prototipado en Figma hasta la implementación en código funcional, asegurando una experiencia de usuario intuitiva en plataformas SaaS.',
        A2:'Desarrollo de interfaces dinámicas y modulares, creando componentes reutilizables con la lógica de programación necesaria para interactuar directamente con la base de datos.',
        A3:'Optimización y rediseño de productos digitales, mejorando la usabilidad y la arquitectura de la información para aumentar el rendimiento y las métricas clave de negocio.',
        A4:'Implementación de control de versiones con Git/GitHub, gestionando la integración de nuevas funcionalidades y asegurando la colaboración eficiente entre equipos de desarrollo.',
        A5:'Gestión de plataformas a gran escala, administrando configuraciones clave y asegurando la correcta actualización y mantenimiento de contenido para productos complejos.'
      },
      dfsoft:{
        title:"DFSOFT",
        role:"Practicante de Desarrollo Web",
        location:"Puebla, México (Híbrido)",
        dates:"Enero 2025 - Julio 2025",
        A1:'Desarrollo web integral, transformando diseños de Figma a sitios web funcionales, asegurando una experiencia de usuario fluida y responsiva en todos los dispositivos.',
        A2:'Actualización de interfaces de usuario (frontend) existentes para mejorar la experiencia del usuario, enfocándome en la optimización del rendimiento, la accesibilidad y la usabilidad.',
        A3:'Construcción de componentes reutilizables en Vue.js para plataformas internas, optimizando el desarrollo y manteniendo la consistencia visual y funcional.'
        ,A4:'Utilización de Laravel para el desarrollo de proyectos web, gestionando el ruteo, manipulando la lógica de la aplicación y enriqueciendo las interfaces de usuario con funcionalidades dinámicas.'
        ,A5:'Administración de sitios web mediante CMS, asegurando la correcta publicación y mantenimiento de contenido, y gestionando configuraciones clave.'
      }
    },
    skills:{
      title:"Competencias e Intereses",
      T1:'Habilidades Técnicas',
      T2:'Frameworks y Librerías',
      T3:'Diseño y Prototipado',
      T4:'Bases de Datos',
      T5:"Control de Versiones",
      T6:"Sistemas Operativos",
      T7:"Idiomas",
      LVL1:"Básico",
      LVL2:"Intermedio",
      LVL3:"Avanzado",
      enLVL:"Inglés (B2)"
    },
    education:{
      title:'Education',
      college:'Benemerita Universidad Autonoma de Puebla',
      career:'Bachelor’s Degree in Information Technology Engineering',
      gpa:'Promedio: 9.36',
      date:"Enero 2021 – Julio 2025",
    },
    message: {
      hello: "¡Hola!",
      welcome: "¡Bienvenido a nuestro sitio web!",
      aboutUs: "Acerca de Nosotros",
      contact: "Contacto",
      readMore: "Leer más",
    },
    buttons: {
      submit: "Enviar",
      cancel: "Cancelar",
      
      show_details: "Mostrar detalles",
      hide_details: "Ocultar detalles",
    },
  },
};
function getBrowserLanguage() {
  const browserLanguages = navigator.languages || [
    navigator.language || navigator.userLanguage,
  ];

  const supportedLocales = Object.keys(messages); // ['en', 'es', 'fr']

  for (let i = 0; i < browserLanguages.length; i++) {
    const lang = browserLanguages[i].toLowerCase();

    // 1. Intentar coincidencia exacta (ej. 'es-ES')
    if (supportedLocales.includes(lang)) {
      return lang;
    }

    // 2. Intentar coincidencia de idioma base (ej. 'es' para 'es-ES')
    const baseLang = lang.split("-")[0];
    if (supportedLocales.includes(baseLang)) {
      return baseLang;
    }
  }

  return "en"; // Tu idioma predeterminado
}
const i18n = createI18n({
  locale: getBrowserLanguage(),
  fallbackLocale: "en",
  messages,
  legacy: false,
  globalInjection: true,
});

export default i18n;
