// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu mobile
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animation du hamburger
        const bars = hamburger.querySelectorAll('.bar');
        bars[0].style.transform = hamburger.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : '';
        bars[1].style.opacity = hamburger.classList.contains('active') ? '0' : '1';
        bars[2].style.transform = hamburger.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : '';
    });

    // Fermer le menu au clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = '';
            bars[1].style.opacity = '1';
            bars[2].style.transform = '';
        });
    });

    // Smooth scrolling pour les liens d'ancrage
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Hauteur de la navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation des barres de compétences
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('#skills');

    function animateSkillBars() {
        const sectionTop = skillsSection.offsetTop - window.innerHeight + 100;
        
        if (window.pageYOffset > sectionTop) {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }
    }

    // Animation au scroll pour les éléments
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-card, .project-card, .about-text');
        
        elements.forEach(element => {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;
            const viewportTop = window.pageYOffset;
            const viewportBottom = viewportTop + window.innerHeight;
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                element.classList.add('visible');
            }
        });
        
        // Animer les barres de compétences
        animateSkillBars();
    }

    // Navbar transparente au scroll
    function handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    }

    // Écouteurs d'événements
    window.addEventListener('scroll', function() {
        animateOnScroll();
        handleNavbarScroll();
    });

    // Animation initiale
    animateOnScroll();

    // Effet de frappe pour le titre
    function typeWriter() {
        const text = "Salut, je suis Jason Madi";
        const heroTitle = document.querySelector('.hero-title');
        const highlight = '<span class="highlight">Jason Madi</span>';
        
        if (heroTitle) {
            heroTitle.innerHTML = text.replace('Jason Madi', highlight);
            heroTitle.style.opacity = '0';
            heroTitle.style.animation = 'fadeInUp 1s ease forwards';
        }
    }

    // CSS pour l'animation fadeInUp
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Démarrer l'animation après un court délai
    setTimeout(typeWriter, 500);

    // Parallax effect pour le hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animation des cartes au hover
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Effet de particules pour le background (optionnel)
    function createParticles() {
        const hero = document.querySelector('.hero');
        const particlesCount = 50;
        
        for (let i = 0; i < particlesCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = 'rgba(255, 255, 255, 0.5)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            hero.appendChild(particle);
        }
    }

    // CSS pour l'animation des particules
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(particleStyle);

    // Créer les particules
    createParticles();

    // Gestion du thème clair/sombre (bonus)
    function initThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            box-shadow: var(--shadow-lg);
            transition: var(--transition);
            z-index: 1000;
        `;
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const icon = this.querySelector('i');
            icon.className = document.body.classList.contains('dark-theme') ? 'fas fa-sun' : 'fas fa-moon';
        });
        
        document.body.appendChild(themeToggle);
    }

    // Initialiser le toggle de thème
    initThemeToggle();

    // Validation simple pour les liens de contact
    const contactLinks = document.querySelectorAll('.contact-link[href^="mailto:"], .contact-link[href^="https://"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.includes('example.com') || this.href.includes('linkedin.com/in/jasonmadi')) {
                e.preventDefault();
                alert('Veuillez mettre à jour ce lien avec vos vraies informations de contact !');
            }
        });
    });

    // Effet de révélation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec animation
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .about-text, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Fonctions utilitaires
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimisation des performances pour le scroll
const debouncedScroll = debounce(function() {
    // Fonctions de scroll optimisées ici
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Console easter egg
console.log(`
🚀 Site web créé par Jason Madi
📧 Contact: jason.madi@example.com
💻 GitHub: https://github.com/madijason
✨ Développé avec HTML, CSS et JavaScript
`);
