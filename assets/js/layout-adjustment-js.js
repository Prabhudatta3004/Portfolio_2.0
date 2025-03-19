// Fix spacing and social button layout
document.addEventListener('DOMContentLoaded', function () {
    // Fix social buttons layout
    const socialLinks = document.querySelector('.social-links');
    if (socialLinks) {
        socialLinks.style.display = 'flex';
        socialLinks.style.flexDirection = 'row';
        socialLinks.style.justifyContent = 'center';
        socialLinks.style.gap = '20px';

        // Make sure all links have proper dimensions
        const links = socialLinks.querySelectorAll('.social-link');
        links.forEach(link => {
            link.style.width = '40px';
            link.style.height = '40px';
            link.style.display = 'flex';
            link.style.alignItems = 'center';
            link.style.justifyContent = 'center';
        });
    }

    // Adjust spacing based on window size
    function adjustLayout() {
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const navbar = document.getElementById('navbar');

        if (hero && navbar) {
            const navHeight = navbar.offsetHeight;

            // Adjust top padding based on screen size
            if (window.innerWidth > 992) {
                // Desktop
                hero.style.paddingTop = (navHeight + 80) + 'px';
                if (heroContent) {
                    heroContent.style.flexDirection = 'row';
                    heroContent.style.textAlign = 'left';
                }
                if (socialLinks) {
                    socialLinks.style.justifyContent = 'flex-start';
                }
            } else if (window.innerWidth > 768) {
                // Tablet
                hero.style.paddingTop = (navHeight + 60) + 'px';
                if (heroContent) {
                    heroContent.style.flexDirection = 'column';
                    heroContent.style.textAlign = 'center';
                }
                if (socialLinks) {
                    socialLinks.style.justifyContent = 'center';
                }
            } else {
                // Mobile
                hero.style.paddingTop = (navHeight + 40) + 'px';
                if (heroContent) {
                    heroContent.style.flexDirection = 'column';
                    heroContent.style.textAlign = 'center';
                }
                if (socialLinks) {
                    socialLinks.style.justifyContent = 'center';
                }
            }
        }
    }

    // Initial adjustment
    adjustLayout();

    // Re-adjust on window resize
    window.addEventListener('resize', adjustLayout);
});