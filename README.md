# Portfolio Personal - Gabriela

Portfolio personal moderno y minimalista desarrollado con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño moderno y minimalista** inspirado en las mejores prácticas de UI/UX
- **Totalmente responsive** - Se adapta perfectamente a cualquier dispositivo
- **Soporte multiidioma** (ES/EN) con conmutador en el header
- **Sistema de temas** (light/dark/system) con respeto a `prefers-color-scheme`
- **Navegación con scrollspy** - Navegación suave entre secciones
- **Accesibilidad WCAG AA** - Código semántico y accesible
- **Animaciones sutiles** que respetan `prefers-reduced-motion`
- **SEO optimizado** con meta tags Open Graph y Twitter Cards

## 🛠️ Tecnologías

- **React 18** - Framework de JavaScript
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **Vite** - Build tool y dev server
- **Lucide React** - Iconos modernos
- **shadcn/ui** - Componentes UI reutilizables

## 📱 Secciones

1. **Hero** - Presentación con avatar, estado de disponibilidad y CTAs
2. **Experiencia** - Timeline de experiencia laboral
3. **Proyectos** - Grid de proyectos destacados con tecnologías y enlaces
4. **Sobre mí** - Información personal y profesional
5. **Footer** - Copyright con año dinámico

## 🎨 Funcionalidades

### Sistema de Temas
- Light mode
- Dark mode  
- System preference (automático)
- Persistencia en localStorage

### Internacionalización
- Soporte para Español e Inglés
- Conmutador de idioma en el header
- Persistencia de preferencia

### Navegación
- Header fijo con enlaces a secciones
- Scrollspy activo que resalta la sección actual
- Scroll suave con offset correcto
- Responsive hamburger menu (si se implementa)

## 🚀 Instalación y desarrollo

```bash
# Clonar el repositorio
git clone [URL_DEL_REPO]

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📂 Estructura del proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── Header.tsx      # Navegación principal
│   ├── HeroSection.tsx # Sección hero
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── AboutSection.tsx
│   └── Footer.tsx
├── contexts/           # Context providers
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── hooks/              # Custom hooks
│   └── useScrollspy.ts
├── locales/            # Archivos de traducción
│   ├── es.json
│   └── en.json
├── pages/              # Páginas principales
└── lib/                # Utilidades
```

## 🎯 Personalización

### Contenido
- Edita los archivos JSON en `/src/locales/` para cambiar textos
- Modifica las secciones en sus respectivos componentes
- Actualiza enlaces y datos personales en los componentes

### Diseño
- Personaliza colores en `/src/index.css` (variables CSS)
- Ajusta el diseño en `tailwind.config.ts`
- Modifica componentes UI en `/src/components/ui/`

### Funcionalidades
- Añade nuevas secciones duplicando la estructura existente
- Extiende el sistema de traducciones agregando nuevas claves
- Personaliza animaciones en las clases CSS

## 📧 Contacto

- **Email**: ggpradas.dev@gmail.com
- **LinkedIn**: [ggpradas-dev](https://www.linkedin.com/in/ggpradas-dev/)
- **GitHub**: [ggpradas-dev](https://github.com/ggpradas-dev)

## 📄 Licencia

© 2025 Gabriela. Casi todos los derechos reservados.

---

Desarrollado con ❤️ usando React y Tailwind CSS