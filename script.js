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

// Protección de derechos de autor - Detectar acceso desde Google
function checkReferrerAndProtect() {
    const referrer = document.referrer;
    const isFromGoogle = referrer.includes('google.com') || 
                        referrer.includes('google.pe') || 
                        referrer.includes('google.co') ||
                        referrer.includes('google.') ||
                        referrer.includes('bing.com') ||
                        referrer.includes('yahoo.com');
    
    if (isFromGoogle) {
        // Ocultar todo el contenido original
        document.body.style.display = 'none';
        
        // Limpiar el body completamente
        document.body.innerHTML = '';
        document.body.style.display = 'block';
        
        // Crear overlay de protección
        const overlay = document.createElement('div');
        overlay.id = 'copyright-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            z-index: 2147483647;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            color: white;
            text-align: center;
            padding: 2rem;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        `;
        
        overlay.innerHTML = `
            <div style="max-width: 600px; background: rgba(0,0,0,0.9); padding: 3rem; border-radius: 15px; border: 2px solid #ff6b6b; box-shadow: 0 0 50px rgba(255,107,107,0.3);">
                <h1 style="color: #ff6b6b; font-size: 2.5rem; margin-bottom: 1rem; text-transform: uppercase; user-select: none;">
                    ⚠️ Acceso Restringido
                </h1>
                <h2 style="color: #ffd93d; font-size: 1.8rem; margin-bottom: 2rem; user-select: none;">
                    Derechos de Autor Protegidos
                </h2>
                <p style="font-size: 1.2rem; line-height: 1.6; margin-bottom: 2rem; user-select: none;">
                    Este contenido está protegido por derechos de autor. El acceso desde motores de búsqueda no está permitido.
                </p>
                <div style="background: rgba(255,107,107,0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem; user-select: none;">
                    <p style="font-size: 1.1rem; color: #ffd93d;">
                        <strong>Propietario:</strong> Richard Josué Pillaca Machaca<br>
                        <strong>Derechos Reservados:</strong> © 2024<br>
                        <strong>Contacto:</strong> richard232108@gmail.com
                    </p>
                </div>
                <p style="font-size: 1rem; color: #ccc; user-select: none;">
                    Para acceder a este contenido, contacta directamente al propietario.
                </p>
                <div style="margin-top: 2rem;">
                    <button onclick="window.close()" style="
                        background: #ff6b6b;
                        color: white;
                        border: none;
                        padding: 12px 30px;
                        border-radius: 25px;
                        font-size: 1.1rem;
                        cursor: pointer;
                        margin: 0 10px;
                        transition: all 0.3s ease;
                        user-select: none;
                    " onmouseover="this.style.background='#ff5252'" onmouseout="this.style.background='#ff6b6b'">
                        Cerrar Ventana
                    </button>
                    <button onclick="window.history.back()" style="
                        background: #4ecdc4;
                        color: white;
                        border: none;
                        padding: 12px 30px;
                        border-radius: 25px;
                        font-size: 1.1rem;
                        cursor: pointer;
                        margin: 0 10px;
                        transition: all 0.3s ease;
                        user-select: none;
                    " onmouseover="this.style.background='#45b7aa'" onmouseout="this.style.background='#4ecdc4'">
                        Volver Atrás
                    </button>
                </div>
            </div>
        `;
        
        // Agregar al body
        document.body.appendChild(overlay);
        
        // Prevenir scroll
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        
        // Protección contra inspección de elementos
        let devtools = { open: false, orientation: null };
        
        // Detectar apertura de DevTools
        setInterval(() => {
            const threshold = 160;
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;
            
            if (widthThreshold || heightThreshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    devtools.orientation = widthThreshold ? 'vertical' : 'horizontal';
                    // Redirigir a una página de error o mostrar mensaje
                    window.location.href = 'about:blank';
                }
            } else {
                devtools.open = false;
                devtools.orientation = null;
            }
        }, 500);
        
        // Prevenir todas las teclas
        document.addEventListener('keydown', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }, true);
        
        // Prevenir clic derecho
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, true);
        
        // Prevenir selección de texto
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        }, true);
        
        // Prevenir drag and drop
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        }, true);
        
        // Prevenir copiar
        document.addEventListener('copy', function(e) {
            e.preventDefault();
            return false;
        }, true);
        
        // Prevenir pegar
        document.addEventListener('paste', function(e) {
            e.preventDefault();
            return false;
        }, true);
        
        // Prevenir cortar
        document.addEventListener('cut', function(e) {
            e.preventDefault();
            return false;
        }, true);
        
        // Prevenir clics fuera del overlay
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
        
        // Protección adicional contra F12 y otras teclas
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                (e.ctrlKey && e.shiftKey && e.key === 'C') ||
                (e.ctrlKey && e.key === 'U') ||
                (e.ctrlKey && e.key === 'S') ||
                (e.ctrlKey && e.key === 'P')) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }, true);
        
        // Prevenir acceso a la consola
        console.log = console.warn = console.error = console.info = console.debug = function() {};
        
        // Protección contra debugger
        setInterval(() => {
            debugger;
        }, 100);
        
        return true; // Indica que se activó la protección
    }
    return false; // No se activó la protección
}

// Función para manejar la descarga del CV con notificación
function handleCVDownload() {
    const cvButtons = document.querySelectorAll('.btn-cv');
    
    cvButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Crear elemento de descarga
            const link = document.createElement('a');
            link.href = 'RichardPillaca Portafolio.pdf';
            link.download = 'RichardPillaca Portafolio.pdf';
            link.style.display = 'none';
            
            // Agregar al DOM y hacer clic
            document.body.appendChild(link);
            link.click();
            
            // Remover el elemento
            document.body.removeChild(link);
            
            // Mostrar notificación de descarga exitosa
            showDownloadNotification();
        });
    });
}

// Función para mostrar notificación de descarga
function showDownloadNotification() {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.id = 'download-notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 18px; color: #fff;"></i>
        <div>
            <div style="font-weight: 600; margin-bottom: 2px;">¡Descarga Completada!</div>
            <div style="font-size: 12px; opacity: 0.9;">Tu CV se ha descargado exitosamente</div>
        </div>
    `;
    
    // Agregar al body
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Inicializar todas las funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Verificar protección de derechos de autor primero
    if (checkReferrerAndProtect()) {
        return; // Si se activó la protección, no continuar con el resto de funciones
    }
    
    // Inicializar descarga del CV
    handleCVDownload();
    
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

// Bloqueo de panel de desarrollador con mensaje de derechos reservados
(function() {
    function showDevWarning() {
        alert('Este portafolio tiene derechos reservados. El acceso al panel de desarrollador está restringido.');
    }
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.keyCode === 123) {
            showDevWarning();
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if ((e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
            (e.ctrlKey && e.keyCode === 85)) {
            showDevWarning();
            e.preventDefault();
            return false;
        }
    });
    // No bloquear clic derecho
})(); 