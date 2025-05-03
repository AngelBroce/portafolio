document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Fetch GitHub projects
  fetchGitHubProjects('AngelBroce'); // Replace with your GitHub username
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // If the target is a tab content, activate the corresponding tab
        if (targetElement.classList.contains('tab-pane')) {
          const tabId = targetElement.id;
          const tab = new bootstrap.Tab(document.querySelector(`button[data-bs-target="#${tabId}"]`));
          tab.show();
        }
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
});

// Fetch GitHub projects
async function fetchGitHubProjects(username) {
  const projectsContainer = document.getElementById('projects-container');
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
    
    if (!response.ok) {
      throw new Error('No se pudieron cargar los proyectos');
    }
    
    const projects = await response.json();
    
    // Clear loading spinner
    projectsContainer.innerHTML = '';
    
    if (projects.length === 0) {
      projectsContainer.innerHTML = `
        <div class="col-12 text-center py-5">
          <p class="text-muted">No se encontraron proyectos para este usuario.</p>
        </div>
      `;
      return;
    }
    
    // Create project cards
    projects.forEach(project => {
      // Skip the 'portafolio' repository
      if (project.name.toLowerCase() === 'portafolio') {
        return; // Skip this iteration
      }

      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4';
      
      // Language badge
      const languageBadge = project.language 
        ? `<span class="badge bg-light text-dark border me-1 project-language">${project.language}</span>` 
        : '';
      
      // Topic badges (up to 3)
      const topicBadges = project.topics && project.topics.length > 0
        ? project.topics.slice(0, 3).map(topic => 
            `<span class="badge bg-light text-dark border me-1 project-topic">${topic}</span>`
          ).join('')
        : '';
      
      // Demo link (if available)
      const demoLink = project.homepage
        ? `<a href="${project.homepage}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-pink">
             <i class="fas fa-external-link-alt me-1"></i> Demo
           </a>`
        : '';
      
      col.innerHTML = `
        <div class="card h-100 project-card shadow-sm border-top border-4 border-purple">
          <div class="card-body">
            <h5 class="card-title text-purple">${project.name}</h5>
            <p class="card-text text-muted small mb-3">${project.description || 'Sin descripción disponible'}</p>
            <div class="mb-3">
              ${languageBadge}
              ${topicBadges}
            </div>
          </div>
          <div class="card-footer bg-light d-flex justify-content-between align-items-center">
            <div>
              <span class="text-purple me-3 small">
                <i class="fas fa-star me-1"></i> ${project.stargazers_count}
              </span>
              <span class="text-pink small">
                <i class="fas fa-code-branch me-1"></i> ${project.forks_count}
              </span>
            </div>
            <div class="d-flex gap-2">
              <a href="${project.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-purple">
                <i class="fab fa-github me-1"></i> Repo
              </a>
              ${demoLink}
            </div>
          </div>
        </div>
      `;
      
      projectsContainer.appendChild(col);
    });
    
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    
    projectsContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="alert alert-danger" role="alert">
          <p class="mb-0">${error.message}</p>
          <p class="mb-0">Por favor, verifica el nombre de usuario de GitHub o intenta más tarde.</p>
        </div>
      </div>
    `;
  }
}