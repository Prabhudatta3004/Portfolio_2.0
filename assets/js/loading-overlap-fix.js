// Fix for loading and navbar overlap issues
document.addEventListener('DOMContentLoaded', function () {
    // Add loading class to body
    document.body.classList.add('loading');

    // Elements
    const loader = document.getElementById('loader');
    const navbar = document.getElementById('navbar');
    const hero = document.querySelector('.hero');
    const profileImage = document.querySelector('.hero-image');
    const profileContainer = document.querySelector('.profile-image-container');

    // Calculate top padding based on navbar height
    function calculateTopPadding() {
        if (navbar && hero) {
            const navbarHeight = navbar.offsetHeight;

            // Different padding for different screen sizes
            if (window.innerWidth <= 480) {
                hero.style.paddingTop = (navbarHeight + 80) + 'px';
            } else if (window.innerWidth <= 768) {
                hero.style.paddingTop = (navbarHeight + 100) + 'px';
            } else if (window.innerWidth <= 992) {
                hero.style.paddingTop = (navbarHeight + 120) + 'px';
            } else {
                hero.style.paddingTop = (navbarHeight + 150) + 'px';
            }
        }
    }

    // Fixed loader
    function handleLoader() {
        // Hide loader after delay and show navbar
        setTimeout(function () {
            if (loader) {
                loader.style.opacity = '0';

                setTimeout(function () {
                    loader.style.visibility = 'hidden';
                    document.body.classList.remove('loading');

                    // Show navbar
                    if (navbar) {
                        navbar.style.opacity = '1';
                        navbar.style.pointerEvents = 'auto';
                    }

                    // Make any final adjustments
                    calculateTopPadding();
                }, 500);
            }
        }, 3000); // 3 second loading time
    }

    // Run layout functions
    calculateTopPadding();
    handleLoader();

    // Recalculate on resize
    window.addEventListener('resize', calculateTopPadding);

    // Fix profile image position
    if (profileImage) {
        profileImage.style.position = 'relative';
        profileImage.style.zIndex = '10';
    }

    // Force loading to end if it gets stuck
    setTimeout(function () {
        if (document.body.classList.contains('loading')) {
            document.body.classList.remove('loading');
            if (loader) {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }
            if (navbar) {
                navbar.style.opacity = '1';
                navbar.style.pointerEvents = 'auto';
            }
        }
    }, 5000); // Force end loading after 5 seconds maximum
});