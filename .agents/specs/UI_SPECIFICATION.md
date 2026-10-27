# Especificación Técnica de UI (Fase 2 - Compuerta Manual)
**Proyecto:** Modernización Portafolio Dinámico Monocromático (B&W)
**Autor:** Angel Broce
**Fecha:** 2026-10-27

---

## 1. Contratos de Datos y Variables a Mostrar

### 1.1. Perfil del Desarrollador (`DeveloperProfile`)
| Variable a Mostrar | Tipo de Dato | Ubicación en Interfaz | Elemento Visual UI |
| :--- | :--- | :--- | :--- |
| `name` | String ("Angel Broce") | Header / Hero Bento Card | Tipografía Display en Alto Contraste (Blanco #FFFFFF) |
| `role` | String ("Desarrollador Full Stack") | Subtítulo Hero | Tag monocromático / Texto Plata (#A1A1AA) |
| `availabilityStatus` | Enum ("Disponible para proyectos") | Badge de Estado | Live Pulse Ring animado (burbuja blanca/esmeralda tenue) |
| `location` | String ("La Chorrera, Panamá") | Metadata Card | Ícono de ubicación minimalista + texto secundario |
| `email` | String ("angelolbroce@gmail.com") | Quick Action Card | Botón interactivo de copiado rápido al portapapeles |
| `avatarUrl` | URL ("profile.jpg") | Hero Card / Mini Navbar | Contenedor circular con borde refractivo de vidrio sutil |
| `cvUrl` | URL ("Angel_Broce_CV.pdf") | Hero CTA | Botón de acción con descarga directa |

### 1.2. Proyectos GitHub Dinámicos (`GitHubRepository`)
| Variable a Mostrar | Tipo de Dato | Ubicación en Interfaz | Elemento Visual UI |
| :--- | :--- | :--- | :--- |
| `name` | String | Encabezado de Tarjeta | Título en negrita con hover lift |
| `description` | String / Nullable | Cuerpo de Tarjeta | Párrafo truncado a 2-3 líneas en color gris atenuado (#D4D4D8) |
| `language` | String | Footer de Tarjeta | Badge tipo píldora (`bg-neutral-900 border-neutral-700`) |
| `topics` | Array[String] | Tags de Tarjeta | Chips monocromáticos filtrables al clic |
| `stargazers_count` | Number | Métricas de Tarjeta | Contador numérico con ícono de estrella |
| `forks_count` | Number | Métricas de Tarjeta | Contador numérico con ícono de bifurcación |
| `html_url` | URL | Botón de Acción | Botón minimalista "Código / Repo" con ícono GitHub |
| `homepage` | URL / Nullable | Botón de Acción | Botón con gradiente de contraste "Live Demo" |

### 1.3. Habilidades Técnicas (`SkillItem`)
| Variable a Mostrar | Tipo de Dato | Ubicación en Interfaz | Elemento Visual UI |
| :--- | :--- | :--- | :--- |
| `name` | String (PHP, JS, Java, etc.) | Tarjeta de Habilidad | Ícono monocromático minimalista + Nombre técnico |
| `levelPercentage` | Number (0 - 100) | Barra de Progreso | Barra de llenado en gradiente monocromático (Plata a Blanco) |
| `category` | Enum (Backend, Frontend, etc.) | Selector de Filtro | Tab o Segmented Control con física de amortiguación |

### 1.4. Trayectoria y Experiencia (`ExperienceTimeline`)
| Variable a Mostrar | Tipo de Dato | Ubicación en Interfaz | Elemento Visual UI |
| :--- | :--- | :--- | :--- |
| `roleTitle` | String | Encabezado Timeline | Título del puesto en tipografía de alto peso |
| `organization` | String | Metadato de Timeline | Nombre de empresa/universidad + año |
| `description` | Text | Detalle de Hito | Bloque de texto descriptivo con logros clave |

---

## 2. Inventario de Entradas e Interacciones (Inputs & Botones)

| ID de Elemento | Tipo de Control | Acción / Evento | Comportamiento Dinámico |
| :--- | :--- | :--- | :--- |
| `btn-cv-download` | Enlace / Botón CTA | Clic | Descarga inmediata de `Angel_Broce_CV.pdf` con micro-escala `0.97` |
| `btn-contact-email` | Botón interactivo | Clic | Copia el correo al portapapeles y despliega tooltip "¡Copiado!" |
| `tabs-navigation` | Segmented Control Pill | Clic | Cambio fluido de vista (Proyectos, Habilidades, Sobre Mí) sin refresco de página |
| `input-project-search` | Input de texto | Input en tiempo real | Filtro instantáneo de repositorios GitHub por nombre o tecnología |
| `filter-tech-tags` | Botones Pill / Badges | Clic | Filtra las tarjetas de proyectos según el lenguaje seleccionado |
| `btn-theme-contrast` | Botón Toggle | Clic | Alternancia entre "Obsidian Noir (Negro profundo)" y "High Contrast B&W" |
| `btn-repo-link` | Enlace externo | Clic | Abre el repositorio en GitHub en nueva pestaña |
| `btn-demo-link` | Enlace externo | Clic | Abre la demostración en vivo (si `homepage` existe) |

---

## 3. Estados de la Interfaz (Error, Carga y Éxito)

### 3.1. Estado de Carga (Loading / Skeleton)
- **Visualización:** Skeleton loaders de vidrio esmerilado con animación de pulso shimmer suave (`linear-gradient` animado en escala de grises oscuros).
- **Duración:** Durante la llamada asíncrona a `https://api.github.com/users/AngelBroce/repos`.

### 3.2. Estado de Éxito (Success / Data Ready)
- **Visualización:** Transición suave de entrada (Fade-in + Translate-Y de 10px a 0px con curva `cubic-bezier(0.16, 1, 0.3, 1)` de 200ms) para cada tarjeta de proyecto.
- **Micro-interacción:** Efecto de elevación magnética al pasar el ratón (`translate-y(-3px)`) y borde sutil iluminado blanco puro (`rgba(255, 255, 255, 0.25)`).

### 3.3. Estado de Error (Error Handling)
- **Visualización:** Banner Bento monocromático con ícono de advertencia minimalista, mensaje en texto claro ("No se pudieron sincronizar los proyectos con GitHub en este momento") y botón de reintento (`Reintentar conexión`).

### 3.4. Estado Vacío (Empty State)
- **Visualización:** Mensaje estilizado "No se encontraron proyectos para el filtro seleccionado" con botón para resetear filtros.

---

## 4. Guía Visual del Sistema Monocromático (B&W / Noir)
- **Fondos:** Deep Obsidian `#050505` y Charcoal `#0F0F12`.
- **Superficies Bento:** Vidrio esmerilado (`background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08)`).
- **Tipografía:** Blanco Hielo `#FFFFFF` para títulos, Titanio `#A1A1AA` para textos secundarios.
- **Acentos:** Blanco Puro con resplandor difuso (`rgba(255, 255, 255, 0.15)`).
