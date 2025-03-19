// Enhanced responsive handling for the landing page
document.addEventListener('DOMContentLoaded', function () {
    // Ensure mobile navigation works correctly
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        // Clear any problematic inline styles that might be set
        navLinks.style.right = '';

        mobileToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Fix hero layout on small screens
    function adjustHeroLayout() {
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        const heroText = document.querySelector('.hero-text');
        const profileWrapper = document.getElementById('profile-image-wrapper');
        const heroDescription = document.querySelector('.hero-description');

        if (window.innerWidth <= 768) {
            // Mobile layout adjustments
            if (heroContent) heroContent.style.flexDirection = 'column';
            if (heroImage) {
                heroImage.style.order = '1';
                heroImage.style.marginTop = '30px';
            }
            if (heroText) {
                heroText.style.order = '2';
                heroText.style.textAlign = 'center';
                heroText.style.width = '100%';
            }
            if (profileWrapper) {
                profileWrapper.style.marginTop = '0';
                profileWrapper.style.marginBottom = '20px';
            }
            if (heroDescription) {
                // Force visibility of description
                heroDescription.style.display = 'block';
                heroDescription.style.visibility = 'visible';
                heroDescription.style.opacity = '1';
                heroDescription.style.margin = '15px auto 25px';
                heroDescription.style.maxWidth = '100%';
                heroDescription.style.padding = '0 20px';
            }
        } else if (window.innerWidth <= 1024) {
            // Tablet layout
            if (heroContent) heroContent.style.flexDirection = 'column';
            if (heroImage) heroImage.style.order = '1';
            if (heroText) {
                heroText.style.order = '2';
                heroText.style.textAlign = 'center';
            }
        } else {
            // Desktop layout
            if (heroContent) heroContent.style.flexDirection = 'row';
            if (heroImage) {
                heroImage.style.order = '1';
                heroImage.style.marginTop = '0';
            }
            if (heroText) {
                heroText.style.order = '2';
                heroText.style.textAlign = 'left';
            }
        }

        // Always ensure hero description is visible
        if (heroDescription) {
            heroDescription.style.display = 'block';
            heroDescription.style.visibility = 'visible';
            heroDescription.style.opacity = '1';
        }
    }

    // Run on page load and resize
    adjustHeroLayout();
    window.addEventListener('resize', adjustHeroLayout);

    // Ensure animations don't interfere with visibility
    const animatedElements = document.querySelectorAll('.animated-text, .animated-element');
    animatedElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });

    // Fix cosmic background on small screens
    function adjustCosmicBackground() {
        const cosmicElements = document.querySelectorAll('.geometric-elements, .aurora-effect, .warp-speed');

        if (window.innerWidth <= 768) {
            cosmicElements.forEach(el => {
                el.style.opacity = '0.3';
            });
        } else {
            cosmicElements.forEach(el => {
                el.style.opacity = '';
            });
        }
    }

    adjustCosmicBackground();
    window.addEventListener('resize', adjustCosmicBackground);
});