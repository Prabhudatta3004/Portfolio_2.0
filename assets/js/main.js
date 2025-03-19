// Enhanced main functionality
document.addEventListener('DOMContentLoaded', function () {
    // Loader Animation
    setTimeout(function () {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(function () {
                loader.style.visibility = 'hidden';
            }, 500);
        }
    }, 2000);

    // Navbar Scroll Effect
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Mobile Navigation Toggle with enhanced error handling
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');

            // Accessibility
            const expanded = navLinks.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');

            // Add debugging info
            console.log('Mobile toggle clicked. Menu active:', expanded);
        });
    }

    // Close mobile menu when clicking a link
    const navLinkItems = document.querySelectorAll('.nav-links a');

    if (navLinkItems.length > 0 && navLinks) {
        navLinkItems.forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');

                if (mobileToggle) {
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }

                console.log('Nav link clicked. Menu closed.');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (navLinks && mobileToggle &&
            navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !mobileToggle.contains(e.target)) {

            navLinks.classList.remove('active');
            body.classList.remove('menu-open');

            if (mobileToggle) {
                mobileToggle.setAttribute('aria-expanded', 'false');
            }

            console.log('Clicked outside menu. Menu closed.');
        }
    });

    // Handle window resize (if switching from mobile to desktop view)
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');

            if (mobileToggle) {
                mobileToggle.setAttribute('aria-expanded', 'false');
            }

            console.log('Window resized to desktop. Menu closed.');
        }
    });

    // Ensure profile image is properly positioned on mobile
    function adjustProfileImagePosition() {
        const profileWrapper = document.getElementById('profile-image-wrapper');
        if (profileWrapper) {
            if (window.innerWidth <= 768) {
                // Add extra margin on mobile
                profileWrapper.style.marginTop = '100px';
                profileWrapper.style.marginBottom = '60px';
            } else {
                // Reset for desktop
                profileWrapper.style.marginTop = '0';
                profileWrapper.style.marginBottom = '0';
            }
        }
    }

    // Run on page load and resize
    adjustProfileImagePosition();
    window.addEventListener('resize', adjustProfileImagePosition);
});