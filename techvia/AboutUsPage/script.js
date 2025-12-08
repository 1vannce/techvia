// =============================
// Mobile Navigation Toggle
// =============================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// =============================
// Sticky Header on Scroll
// =============================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// =============================
// Smooth Scrolling for Anchor Links
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =============================
// Intersection Observer for Scroll Animations
// =============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
});

// =============================
// Values Section - Infinite Scroll Animation
// =============================
window.valuesCarouselInitialized = window.valuesCarouselInitialized || false;

const initValuesCarousel = () => {
    if (window.valuesCarouselInitialized) {
        return;
    }

    const track = document.querySelector('.values-track');
    const wrapper = document.querySelector('.values-wrapper');

    if (!track || !wrapper) {
        return;
    }

    if (track.hasAttribute('data-initialized')) {
        return;
    }

    window.valuesCarouselInitialized = true;
    track.setAttribute('data-initialized', 'true');

    // Get original cards
    const originalCards = track.querySelectorAll('.value-card:not([data-clone])');
    const originalCount = originalCards.length;

    if (originalCount === 0) {
        return;
    }

    // Clone cards for seamless loop
    originalCards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute('data-clone', 'true');
        track.appendChild(clone);
    });

    // IMPORTANT: Calculate exact width for seamless loop
    const cardWidth = 300; // Same as CSS width
    const gap = 32; // 2rem = 32px
    const totalOriginalWidth = (cardWidth + gap) * originalCount;

    // Set animation duration based on width (adjust speed here)
    const speed = 50; // pixels per second
    const duration = totalOriginalWidth / speed;

    track.style.animationDuration = `${duration}s`;

    // Hover functionality
    wrapper.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });

    wrapper.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });

    // Touch events for mobile
    wrapper.addEventListener('touchstart', () => {
        track.style.animationPlayState = 'paused';
    }, { passive: true });

    wrapper.addEventListener('touchend', () => {
        setTimeout(() => {
            track.style.animationPlayState = 'running';
        }, 1000);
    }, { passive: true });

    console.log('Values carousel initialized - seamless loop');
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initValuesCarousel, { once: true });
} else {
    initValuesCarousel();
}

// =============================
// Counter Animation for Stats
// =============================
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    updateCounter();
};

// Observe stat numbers
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// =============================
// Active Navigation State on Scroll
// =============================
const updateActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Debounce function for performance
const debounce = (func, wait = 10) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

window.addEventListener('scroll', debounce(updateActiveNav));

// =============================
// Team Card Hover Effect Enhancement
// =============================
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// =============================
// Button Ripple Effect
// =============================
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-effect 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation via CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-effect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// =============================
// Lazy Loading for Images
// =============================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// =============================
// Console Message
// =============================
console.log('%c✨ TechVerse About Page', 'font-size: 20px; font-weight: bold; color: #000000;');
console.log('%cBuilt with modern HTML, CSS, and JavaScript', 'font-size: 12px; color: #666666;');
