/**
 * PORTAFOLIO ANGEL BROCE - CLIENTE ASÍNCRONO & ESPECIFICACIONES DE PROYECTOS
 * Integra GitHub REST API en tiempo real con Base de Datos Curada de Especificaciones Técnicas.
 */

// Base de Datos de Especificaciones Técnicas Curadas
const PROJECT_SPECS_DATABASE = {
  'sistema-citas-clinicas': {
    title: 'Sistema de Gestión de Citas Clínicas',
    category: 'web',
    categoryLabel: 'Web Full Stack',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Arquitectura MVC'],
    shortDesc: 'Plataforma web integral para la reserva y administración de turnos médicos, expedientes de pacientes y agendas de consultas.',
    highlights: [
      'Control de agendas y turnos médicos en tiempo real sin solapamientos.',
      'Base de datos relacional MySQL normalizada con integridad referencial.',
      'Módulo administrativo con estadísticas de pacientes y reportes de atención.',
      'Interfaz web adaptativa accesible desde dispositivos móviles y consultorios.'
    ],
    architecture: 'Arquitectura MVC desacoplada. Backend estructurado con controladores de citas y servicios de base de datos protegidos contra inyecciones SQL (Prepared Statements).',
    challenges: 'Optimización de consultas para agendas concurrentes y validación rigurosa de disponibilidad médica.',
    demoUrl: null
  },
  'generador-de-informes-cait': {
    title: 'Generador Automatizado de Informes CAIT',
    category: 'python',
    categoryLabel: 'Python & Automatización',
    stack: ['Python', 'Pandas', 'ReportLab', 'Automatización', 'PDF Engine'],
    shortDesc: 'Herramienta en Python para el procesamiento de métricas técnicas y compilación automática de informes oficiales del CAIT en PDF.',
    highlights: [
      'Procesamiento automatizado de hojas de datos con Pandas.',
      'Generación dinámica de documentos PDF vectoriales con tablas y resúmenes.',
      'Reducción de más del 80% en los tiempos de confección manual de informes.',
      'Manejo de excepciones para inconsistencias en los datos de entrada.'
    ],
    architecture: 'Pipeline de procesamiento por etapas: Ingesta de datos -> Limpieza y validación -> Generador de plantillas ReportLab -> Exportación PDF.',
    challenges: 'Garantizar el formato visual estricto requerido por los estándares institucionales del CAIT de manera algorítmica.',
    demoUrl: null
  },
  'arbol-de-fallos-fiabilidad': {
    title: 'Modelador de Árbol de Fallos & Fiabilidad',
    category: 'qa',
    categoryLabel: 'QA & Fiabilidad',
    stack: ['JavaScript ES6+', 'HTML5 Canvas', 'CSS3', 'Análisis Cuantitativo', 'FTA'],
    shortDesc: 'Herramienta interactiva para el modelado de fiabilidad de sistemas críticos y cálculo probabilístico mediante Árbol de Fallos (FTA).',
    highlights: [
      'Cálculo algebraico de probabilidades de falla con compuertas lógicas (AND/OR).',
      'Visualización interactiva y jerárquica de eventos iniciales y eventos tope.',
      'Determinación de cortes mínimos (Cut Sets) para evaluar vulnerabilidades.',
      'Exportación gráfica del diagrama para documentación técnica de ingeniería.'
    ],
    architecture: 'Motor de árboles graficos en JavaScript basado en estructuras de nodos recursivos y evaluación probabilística en tiempo real.',
    challenges: 'Resolución analítica de compuertas lógicas interconectadas y prevención de bucles en la estructura del árbol.',
    demoUrl: null
  },
  'entorno-jmeter': {
    title: 'Suite de Pruebas de Carga y Rendimiento JMeter',
    category: 'qa',
    categoryLabel: 'QA & Rendimiento',
    stack: ['Apache JMeter', 'Performance Testing', 'HTTP/REST', 'Stress Testing'],
    shortDesc: 'Entorno de configuración de pruebas de estrés, capacidad máxima y concurrencia sobre servicios web y APIs.',
    highlights: [
      'Simulación de usuarios concurrentes bajo ramp-up configurable.',
      'Monitoreo de latencia, percentiles 90/95/99 y tasa de throughput.',
      'Diagnóstico preventivo de cuellos de botella en servidores y pools de conexiones.',
      'Informes ejecutivos con métricas de rendimiento y tiempos de respuesta.'
    ],
    architecture: 'Planes de pruebas modularizados con Thread Groups, HTTP Request Samplers y Listeners para agregación estadística.',
    challenges: 'Ajuste de parámetros de simulación para emular patrones de tráfico reales sin saturar la máquina de pruebas.',
    demoUrl: null
  },
  'selenium-python': {
    title: 'Framework de Automatización de Pruebas E2E',
    category: 'qa',
    categoryLabel: 'QA & Automatización',
    stack: ['Python', 'Selenium WebDriver', 'PyTest', 'Page Object Model', 'CI/CD'],
    shortDesc: 'Framework de testing automatizado para verificar flujos funcionales críticos de usuario en aplicaciones web con cobertura de regresión.',
    highlights: [
      'Patrón de diseño Page Object Model (POM) para pruebas desacopladas y mantenibles.',
      'Verificación automatizada de formularios, autenticación y transacciones.',
      'Generación de capturas de pantalla automáticas ante fallos y reportes detallados.',
      'Esperas explícitas inteligentes para sincronización con elementos dinámicos AJAX.'
    ],
    architecture: 'Estructura modular dividida en Pages, Locators, TestSuites y TestData con ejecución parametrizada en PyTest.',
    challenges: 'Manejo de elementos asíncronos y tiempos de renderizado en Single Page Applications sin generar pruebas frágiles (flaky tests).',
    demoUrl: null
  },
  'proyectods5': {
    title: 'E-Commerce Responsivo con Astro',
    category: 'web',
    categoryLabel: 'E-Commerce & Astro',
    stack: ['Astro', 'JavaScript', 'CSS3', 'Arquitectura de Islas', 'Responsive Design'],
    shortDesc: 'Plataforma de comercio electrónico de alto rendimiento desarrollada en Astro para el proyecto semestral de Desarrollo de Software 5.',
    highlights: [
      'Arquitectura de Islas (Islands Architecture) para mínima huella de JavaScript.',
      'Catálogo de productos interactivo con filtrado dinámico por categorías.',
      'Carrito de compras reactivo en el cliente con almacenamiento local (LocalStorage).',
      'Puntaje de rendimiento superior en Core Web Vitals y diseño 100% responsivo.'
    ],
    architecture: 'Generación de sitios estáticos (SSG) complementada con islas reactivas de Astro para el carrito y checkout.',
    challenges: 'Sincronizar el estado del carrito entre páginas manteniendo el rendimiento óptimo del renderizado de Astro.',
    demoUrl: null
  },
  'proyecto-soft-iv': {
    title: 'Chequera Virtual & Sistema Financiero',
    category: 'web',
    categoryLabel: 'Web Full Stack',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Scrum / Git'],
    shortDesc: 'Aplicación financiera para la emisión, validación y conciliación de cheques virtuales y transacciones de cuentas.',
    highlights: [
      'Transacciones bancarias simuladas con cumplimiento de propiedades ACID.',
      'Panel de usuario con balance actualizado y verificación de cheques emitidos.',
      'Desarrollado bajo metodología ágil Scrum y control de versiones colaborativo en GitHub.',
      'Validaciones de seguridad contra fraudes y duplicidad de transacciones.'
    ],
    architecture: 'Backend en PHP orientado a objetos con capa de acceso a datos PDO y base de datos relacional MySQL.',
    challenges: 'Garantizar la consistencia transaccional cuando se emiten o cobran cheques simultáneamente.',
    demoUrl: null
  },
  'android-py2': {
    title: 'Aplicación Móvil Nativa en Kotlin',
    category: 'mobile',
    categoryLabel: 'Mobile (Android)',
    stack: ['Kotlin', 'Android SDK', 'Material Design 3', 'Coroutines'],
    shortDesc: 'Aplicación nativa para Android enfocada en fluidez de usuario, consumo de APIs y diseño adaptativo para smartphones.',
    highlights: [
      'Interfaz de usuario construida según los lineamientos de Material Design 3.',
      'Operaciones en segundo plano mediante Kotlin Coroutines para fluidez total (60 FPS).',
      'Manejo robusto del ciclo de vida de Fragments y Activities.',
      'Persistencia de preferencias de usuario y caché local.'
    ],
    architecture: 'Patrón de arquitectura MVVM con separación de vistas, ViewModels y repositorios de datos.',
    challenges: 'Optimización de consumo de memoria y transiciones de pantalla con feedback táctil.',
    demoUrl: null
  },
  'ds8-proyecto2': {
    title: 'Sistema de Gestión y Respaldo Empresarial',
    category: 'systems',
    categoryLabel: 'Sistemas & Arquitectura',
    stack: ['Visual Basic .NET', 'SQL Server / MySQL', 'ADO.NET', 'Desktop'],
    shortDesc: 'Aplicación de escritorio para la administración de inventario, clientes y automatización de copias de seguridad de bases de datos.',
    highlights: [
      'Rutina automatizada de generación y restauración de backups de base de datos.',
      'Gestión de permisos de usuarios con roles diferenciados (Administrador/Operador).',
      'Generación de reportes de auditoría y movimientos de inventario.',
      'Conexión optimizada a base de datos mediante ADO.NET.'
    ],
    architecture: 'Arquitectura en capas (Capa de Presentación WinForms, Capa de Negocio y Capa de Datos con ADO.NET).',
    challenges: 'Garantizar la integridad de los datos durante la creación de copias de seguridad en caliente.',
    demoUrl: null
  },
  'landingpage': {
    title: 'Landing Page Corporativa de Alta Conversión',
    category: 'web',
    categoryLabel: 'Web Full Stack',
    stack: ['HTML5 Semántico', 'CSS3 Moderno', 'Responsive Design', 'Glassmorphism'],
    shortDesc: 'Página de aterrizaje corporativa enfocada en captación de usuarios, diseño visual refinado y adaptabilidad multidispositivo.',
    highlights: [
      'Diseño 100% fluido optimizado para pantallas táctiles y escritorio.',
      'Microinteracciones en botones y puntos de llamada a la acción.',
      'Carga ultrarrápida sin dependencias externas pesadas.',
      'Estructura semántica para máxima indexación SEO.'
    ],
    architecture: 'Arquitectura frontend pura (Vanilla CSS & Semantic HTML) con Flexbox y CSS Grid.',
    challenges: 'Lograr una estética visual premium y ligera sin recurrir a frameworks pesados.',
    demoUrl: null
  }
};

// Estado Global de Proyectos
let allProjects = [];
let activeCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Año dinámico en footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Inicializar sistema de copiado al portapapeles
  initClipboardButtons();

  // 3. Inicializar Toolbar de Filtros y Búsqueda
  initFilterToolbar();

  // 4. Inicializar Modal de Especificaciones
  initModalListeners();

  // 5. Cargar proyectos de GitHub
  loadGitHubProjects('AngelBroce');
});

/**
 * Carga repositorios desde la API de GitHub y los fusiona con las especificaciones técnicas
 */
async function loadGitHubProjects(username) {
  const container = document.getElementById('projects-container');
  const countEl = document.getElementById('projects-count');

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`Error en la API de GitHub: ${response.status}`);
    }

    const repos = await response.json();

    // Procesar y fusionar con la base de datos de especificaciones
    allProjects = repos
      .filter(repo => {
        const nameLower = repo.name.toLowerCase();
        // Excluir repositorios auxiliares o irrelevantes para el portafolio
        return nameLower !== 'portafolio' && nameLower !== 'angelbroce';
      })
      .map(repo => {
        const key = repo.name.toLowerCase();
        const customSpec = PROJECT_SPECS_DATABASE[key] || {};

        return {
          id: repo.id,
          name: repo.name,
          title: customSpec.title || formatProjectTitle(repo.name),
          category: customSpec.category || inferCategory(repo.language, repo.name),
          categoryLabel: customSpec.categoryLabel || inferCategoryLabel(repo.language, repo.name),
          description: customSpec.shortDesc || repo.description || 'Proyecto desarrollado con código limpio y arquitectura modular.',
          stack: customSpec.stack || (repo.language ? [repo.language] : ['Desarrollo de Software']),
          highlights: customSpec.highlights || [
            'Estructura de código modular y testeada.',
            'Control de versiones en GitHub con trazabilidad de commits.',
            'Diseño enfocado en usabilidad y rendimiento.'
          ],
          architecture: customSpec.architecture || 'Diseño de software estructurado con separación de responsabilidades y buenas prácticas de ingeniería.',
          challenges: customSpec.challenges || 'Optimización de rendimiento y robustez en la integración de componentes.',
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          html_url: repo.html_url,
          homepage: customSpec.demoUrl || repo.homepage,
          updated_at: repo.updated_at
        };
      });

    // Renderizar según los filtros actuales
    renderFilteredProjects();

  } catch (error) {
    console.error('Error al cargar proyectos de GitHub:', error);
    if (container) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="bento-card text-center py-4">
            <i class="fas fa-exclamation-triangle fa-2x mb-3 text-secondary"></i>
            <h4 class="mb-2">No se pudieron sincronizar los proyectos</h4>
            <p class="text-secondary small mb-3">Ocurrió un inconveniente al conectar con la API de GitHub. Puedes ver los repositorios directamente en mi perfil.</p>
            <a href="https://github.com/AngelBroce" target="_blank" rel="noopener noreferrer" class="btn-noir-primary">
              <i class="fab fa-github"></i> Ver Perfil en GitHub
            </a>
          </div>
        </div>
      `;
    }
    if (countEl) countEl.textContent = '0 proyectos';
  }
}

/**
 * Renderiza las tarjetas de proyectos aplicando búsqueda y categoría activa
 */
function renderFilteredProjects() {
  const container = document.getElementById('projects-container');
  const countEl = document.getElementById('projects-count');
  if (!container) return;

  const filtered = allProjects.filter(project => {
    // Filtro por categoría
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;

    // Filtro por búsqueda
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.stack.some(s => s.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} proyecto${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="bento-card py-5">
          <i class="fas fa-search fa-2x mb-3 text-secondary"></i>
          <h4 class="mb-2">No se encontraron proyectos</h4>
          <p class="text-secondary small mb-3">Intenta cambiar el término de búsqueda o selecciona otra categoría.</p>
          <button class="btn-noir-secondary" onclick="resetFilters()">
            <i class="fas fa-undo me-1"></i> Restablecer Filtros
          </button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => {
    const stackBadges = project.stack.slice(0, 4).map(tech => 
      `<span class="badge-tech">${tech}</span>`
    ).join('');

    const highlightsList = project.highlights.slice(0, 2).map(h => 
      `<li>${h}</li>`
    ).join('');

    const demoBtn = project.homepage ? `
      <a href="${project.homepage}" target="_blank" rel="noopener noreferrer" class="btn-icon-glass" title="Demo en Vivo">
        <i class="fas fa-external-link-alt"></i>
      </a>
    ` : '';

    return `
      <div class="col-md-6 col-lg-4 d-flex">
        <article class="project-card w-100">
          <div>
            <div class="project-card-header">
              <div>
                <span class="project-category-tag">${project.categoryLabel}</span>
                <h3 class="project-title">${project.title}</h3>
              </div>
              <div class="project-stats">
                <span title="Estrellas en GitHub"><i class="fas fa-star me-1 text-secondary"></i>${project.stars}</span>
                <span title="Forks"><i class="fas fa-code-branch me-1 text-secondary"></i>${project.forks}</span>
              </div>
            </div>

            <p class="project-description">${project.description}</p>

            <ul class="project-highlights">
              ${highlightsList}
            </ul>

            <div class="d-flex flex-wrap gap-1 mb-3">
              ${stackBadges}
            </div>
          </div>

          <div class="project-card-footer">
            <button class="btn-spec-trigger" onclick="openProjectSpecModal('${escapeHtml(project.name)}')">
              <i class="fas fa-layer-group"></i> Ver Especificación
            </button>
            <div class="d-flex gap-2">
              <a href="${project.html_url}" target="_blank" rel="noopener noreferrer" class="btn-icon-glass" title="Ver Repositorio">
                <i class="fab fa-github"></i>
              </a>
              ${demoBtn}
            </div>
          </div>
        </article>
      </div>
    `;
  }).join('');
}

/**
 * Inicializa la barra de herramientas de filtrado y búsqueda
 */
function initFilterToolbar() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('project-search');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'all';
      renderFilteredProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderFilteredProjects();
    });
  }
}

/**
 * Restablece los filtros de búsqueda y categoría
 */
window.resetFilters = function() {
  activeCategory = 'all';
  searchQuery = '';
  
  const searchInput = document.getElementById('project-search');
  if (searchInput) searchInput.value = '';

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === 'all');
  });

  renderFilteredProjects();
};

/**
 * Abre el modal con las especificaciones técnicas completas de un proyecto
 */
window.openProjectSpecModal = function(projectName) {
  const normKey = (projectName || '').toLowerCase().trim();
  let project = allProjects.find(p => p.name.toLowerCase() === normKey);

  if (!project && PROJECT_SPECS_DATABASE[normKey]) {
    const customSpec = PROJECT_SPECS_DATABASE[normKey];
    project = {
      name: normKey,
      title: customSpec.title || formatProjectTitle(normKey),
      categoryLabel: customSpec.categoryLabel || 'Desarrollo de Software',
      description: customSpec.shortDesc || 'Proyecto desarrollado con buenas prácticas de software.',
      stack: customSpec.stack || [],
      highlights: customSpec.highlights || [],
      architecture: customSpec.architecture || 'Diseño de software modular.',
      challenges: customSpec.challenges || 'Optimización y robustez técnica.',
      html_url: `https://github.com/AngelBroce/${projectName}`,
      homepage: customSpec.demoUrl || null
    };
  }

  if (!project) return;

  const modalBackdrop = document.getElementById('spec-modal');
  const modalContent = document.getElementById('spec-modal-content');
  if (!modalBackdrop || !modalContent) return;

  const stackPills = project.stack.map(tech => 
    `<span class="badge-tech">${tech}</span>`
  ).join('');

  const highlightsItems = project.highlights.map(h => 
    `<li class="mb-2"><strong class="text-white">✓</strong> ${h}</li>`
  ).join('');

  const demoLink = project.homepage ? `
    <a href="${project.homepage}" target="_blank" rel="noopener noreferrer" class="btn-noir-primary">
      <i class="fas fa-external-link-alt"></i> Ver Demo en Vivo
    </a>
  ` : '';

  modalContent.innerHTML = `
    <div class="mb-4">
      <span class="project-category-tag">${project.categoryLabel}</span>
      <h2 class="font-display mt-1 mb-2 text-white" style="font-size: 1.85rem;">${project.title}</h2>
      <p class="text-secondary" style="font-size: 0.95rem;">${project.description}</p>
    </div>

    <div class="mb-4">
      <h4 class="text-white mb-2" style="font-size: 1.05rem;"><i class="fas fa-cubes me-2 text-secondary"></i>Stack Tecnológico & Herramientas</h4>
      <div class="d-flex flex-wrap gap-2">
        ${stackPills}
      </div>
    </div>

    <div class="mb-4">
      <h4 class="text-white mb-2" style="font-size: 1.05rem;"><i class="fas fa-check-circle me-2 text-secondary"></i>Características y Funcionalidades Clave</h4>
      <ul style="list-style: none; padding-left: 0;" class="text-secondary small">
        ${highlightsItems}
      </ul>
    </div>

    <div class="mb-4">
      <h4 class="text-white mb-2" style="font-size: 1.05rem;"><i class="fas fa-sitemap me-2 text-secondary"></i>Arquitectura de la Solución</h4>
      <p class="text-secondary small mb-0">${project.architecture}</p>
    </div>

    <div class="mb-4">
      <h4 class="text-white mb-2" style="font-size: 1.05rem;"><i class="fas fa-shield-alt me-2 text-secondary"></i>Desafíos Técnicos Resueltos</h4>
      <p class="text-secondary small mb-0">${project.challenges}</p>
    </div>

    <div class="d-flex flex-wrap gap-3 pt-3 border-top" style="border-color: var(--border-subtle) !important;">
      <a href="${project.html_url}" target="_blank" rel="noopener noreferrer" class="btn-noir-secondary">
        <i class="fab fa-github"></i> Inspeccionar Repositorio en GitHub
      </a>
      ${demoLink}
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
};

/**
 * Configuración de eventos para cerrar el modal
 */
function initModalListeners() {
  const modalBackdrop = document.getElementById('spec-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function closeModal() {
  const modalBackdrop = document.getElementById('spec-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * Sistema de copiado al portapapeles con Toast táctil
 */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('[data-copy-text]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-text');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`¡Copiado al portapapeles: ${textToCopy}!`);
        }).catch(() => {
          showToast('No se pudo copiar el texto.');
        });
      }
    });
  });
}

/**
 * Despliega notificación flotante (Toast)
 */
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast-feedback';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/**
 * Formatea nombres de repositorio kebab-case o PascalCase a títulos limpios
 */
function formatProjectTitle(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Infiere categoría del proyecto si no está en la base de datos curada
 */
function inferCategory(lang, name) {
  const l = (lang || '').toLowerCase();
  const n = (name || '').toLowerCase();

  if (l === 'kotlin' || n.includes('android')) return 'mobile';
  if (l === 'python' || n.includes('jmeter') || n.includes('selenium') || n.includes('prueba')) return 'qa';
  if (l === 'visual basic .net') return 'systems';
  return 'web';
}

function inferCategoryLabel(lang, name) {
  const cat = inferCategory(lang, name);
  switch (cat) {
    case 'mobile': return 'Mobile (Android)';
    case 'qa': return 'QA & Fiabilidad';
    case 'systems': return 'Sistemas & Desktop';
    default: return 'Web Full Stack';
  }
}

function escapeHtml(str) {
  return (str || '').replace(/'/g, "\\'");
}