// Fix for profile image positioning
document.addEventListener('DOMContentLoaded', function () {
    // Get navbar height
    const navbar = document.getElementById('navbar');
    const hero = document.querySelector('.hero');
    const profileImage = document.querySelector('.hero-image');
    const profileContainer = document.querySelector('.profile-image-container');

    if (navbar && hero) {
        const navbarHeight = navbar.offsetHeight;

        // Add extra padding to hero section based on navbar height
        hero.style.paddingTop = (navbarHeight + 80) + 'px';

        // Force the profile image down
        if (profileImage) {
            profileImage.style.marginTop = '40px';
        }

        if (profileContainer) {
            profileContainer.style.marginTop = '20px';
        }
    }

    // Adjust on resize
    window.addEventListener('resize', function () {
        if (navbar && hero) {
            const navbarHeight = navbar.offsetHeight;

            // Different spacing for different screen sizes
            if (window.innerWidth <= 768) {
                hero.style.paddingTop = (navbarHeight + 60) + 'px';
            } else {
                hero.style.paddingTop = (navbarHeight + 80) + 'px';
            }
        }
    });

    // Add some room at the bottom of page for social links
    // This ensures they don't get cut off
    const socialLinks = document.querySelector('.social-links');
    if (socialLinks) {
        const footer = document.createElement('div');
        footer.style.height = '40px';
        footer.style.width = '100%';
        document.body.appendChild(footer);
    }
});