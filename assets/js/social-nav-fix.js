// Fix for social icons and navigation
document.addEventListener('DOMContentLoaded', function () {
    // Fix social icons if they're broken
    const socialLinks = document.querySelectorAll('.social-link');
    const socialIcons = document.querySelectorAll('.social-icon');

    socialLinks.forEach(link => {
        // Make sure the links have proper styling
        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.justifyContent = 'center';

        // Ensure proper dimensions
        link.style.width = '44px';
        link.style.height = '44px';
        link.style.borderRadius = '50%';
        link.style.border = '1px solid rgba(255, 255, 255, 0.3)';
        link.style.background = 'rgba(0, 0, 0, 0.3)';
    });

    socialIcons.forEach(icon => {
        // Ensure icons are visible
        icon.style.fill = '#ffffff';
        icon.style.width = '20px';
        icon.style.height = '20px';
    });

    // Fix navigation
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navbar) {
        // Ensure navbar has proper background
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.backdropFilter = 'blur(10px)';
    }

    // Make sure mobile toggle works correctly
    if (mobileToggle && navLinks) {
        // Remove any existing event listeners
        const newMobileToggle = mobileToggle.cloneNode(true);
        if (mobileToggle.parentNode) {
            mobileToggle.parentNode.replaceChild(newMobileToggle, mobileToggle);
        }

        // Add click handler
        newMobileToggle.addEventListener('click', function () {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navLinks.style.right = '-300px';
            } else {
                navLinks.classList.add('active');
                navLinks.style.right = '0';
            }
        });
    }

    // Fix hero spacing
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth <= 768) {
        hero.style.paddingTop = '80px';
    }

    // Fix buttons on mobile
    if (window.innerWidth <= 768) {
        const heroCta = document.querySelector('.hero-cta');
        if (heroCta) {
            heroCta.style.flexDirection = 'column';
            heroCta.style.width = '100%';
            heroCta.style.gap = '15px';

            const buttons = heroCta.querySelectorAll('a');
            buttons.forEach(btn => {
                btn.style.width = '100%';
                btn.style.textAlign = 'center';
            });
        }
    }
});