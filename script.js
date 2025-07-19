// Navegación móvil
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Animación de barras de habilidades
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Efecto de scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header con efecto de transparencia al hacer scroll
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    // Mantener fondo negro siempre
    header.style.background = '#111';
    if (scrollPosition > 100) {
        header.style.boxShadow = '0 2px 20px rgba(44, 62, 80, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(44, 62, 80, 0.1)';
    }
}

// Animación de elementos al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-category, .project-card, .contact-info, .contact-form');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Formulario de contacto
function handleContactForm() {
    const form = document.querySelector('.contact-form form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const formData = new FormData(form);
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const subject = form.querySelector('input[placeholder="Asunto"]').value;
        const message = form.querySelector('textarea').value;
        
        // Validación básica
        if (!name || !email || !subject || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Simular envío (aquí puedes agregar la lógica real de envío)
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Contador animado para estadísticas (opcional)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 segundos
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Efecto de parallax para el hero
function handleParallax() {
    const heroBg = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroBg.style.transform = `translateY(${rate}px)`;
    });
}

// Lazy loading para imágenes
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Tooltip para las barras de habilidades
function addSkillTooltips() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const progressBar = item.querySelector('.skill-progress');
        const percentage = item.querySelector('.skill-info span:last-child').textContent;
        
        item.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'skill-tooltip';
            tooltip.textContent = `Nivel: ${percentage}`;
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
                transform: translateY(-30px);
            `;
            
            item.style.position = 'relative';
            item.appendChild(tooltip);
        });
        
        item.addEventListener('mouseleave', () => {
            const tooltip = item.querySelector('.skill-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Animación de entrada para secciones y objetos
function animateSectionsOnScroll() {
    const animatedSections = document.querySelectorAll('section, .about-content, .skills-grid, .projects-grid, .contact-content');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    animatedSections.forEach(section => observer.observe(section));

    // Animación para tarjetas de proyectos y skills
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('animated-zoomIn');
    });
    document.querySelectorAll('.skill-category').forEach(skill => {
        skill.classList.add('animated-zoomIn');
    });
}

// Inicializar todas las funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();
    animateOnScroll();
    handleContactForm();
    handleParallax();
    lazyLoadImages();
    addSkillTooltips();
    animateSectionsOnScroll();
    
    // Event listeners
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Prevenir comportamiento por defecto de enlaces vacíos
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    // Notificación de éxito para Netlify Forms
    const form = document.querySelector('form[data-netlify]');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Enviar el formulario usando fetch para Netlify
            const data = new FormData(form);
            fetch('/', {
                method: 'POST',
                body: data
            }).then(() => {
                form.style.display = 'none';
                document.getElementById('form-success').style.display = 'block';
            }).catch(() => {
                alert('Hubo un error al enviar el mensaje. Intenta nuevamente.');
            });
        });
    }
});

// Función para actualizar dinámicamente las habilidades
function updateSkillLevel(skillName, newPercentage) {
    const skillItem = Array.from(document.querySelectorAll('.skill-info')).find(
        item => item.querySelector('span').textContent === skillName
    );
    
    if (skillItem) {
        const percentageSpan = skillItem.querySelector('span:last-child');
        const progressBar = skillItem.parentElement.querySelector('.skill-progress');
        
        percentageSpan.textContent = `${newPercentage}%`;
        progressBar.style.width = `${newPercentage}%`;
    }
}

// Función para agregar nuevos proyectos dinámicamente
function addNewProject(projectData) {
    const projectsGrid = document.querySelector('.projects-grid');
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <div class="project-image">
            <img src="${projectData.image}" alt="${projectData.title}">
        </div>
        <div class="project-content">
            <h3>${projectData.title}</h3>
            <p>${projectData.description}</p>
            <div class="project-tech">
                ${projectData.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${projectData.github}" class="btn btn-small"><i class="fab fa-github"></i> Ver Código</a>
                <a href="${projectData.demo}" class="btn btn-small btn-secondary"><i class="fas fa-external-link-alt"></i> Demo</a>
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
}

// Exportar funciones para uso externo
window.portfolioFunctions = {
    updateSkillLevel,
    addNewProject
}; 