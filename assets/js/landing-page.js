/**
 * Landing Page Specific JavaScript
 * Contains all the interactive functionality for the landing page
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize any other landing page specific functionality
    initLandingPageFeatures();
});

/**
 * Initialize smooth scrolling functionality for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav__list a, .footer__nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize landing page specific features
 */
function initLandingPageFeatures() {
    // Add hover effect for specialist cards
    const specialistCards = document.querySelectorAll('.especialista-card');
    specialistCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Add animation for hero section elements
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    
    if (heroTitle && heroSubtitle) {
        heroTitle.style.opacity = '0';
        heroSubtitle.style.opacity = '0';
        
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.5s ease';
            heroSubtitle.style.transition = 'opacity 0.5s ease';
            heroTitle.style.opacity = '1';
            heroSubtitle.style.opacity = '1';
        }, 100);
    }
}

// Export functions for potential future use
export {
    initSmoothScrolling,
    initLandingPageFeatures
};
