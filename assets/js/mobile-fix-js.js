// Mobile-specific layout fixes
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on a mobile device
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Get elements
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        const profileWrapper = document.getElementById('profile-image-wrapper');
        const profileContainer = document.querySelector('.profile-image-container');
        const heroText = document.querySelector('.hero-text');

        // Force proper mobile layout
        if (hero) {
            hero.style.paddingTop = '80px';
            hero.style.display = 'flex';
            hero.style.flexDirection = 'column';
            hero.style.minHeight = '100vh';
        }

        if (heroContent) {
            heroContent.style.display = 'flex';
            heroContent.style.flexDirection = 'column';
            heroContent.style.alignItems = 'center';
            heroContent.style.justifyContent = 'flex-start';
            heroContent.style.width = '100%';
            heroContent.style.gap = '0';
            heroContent.style.margin = '0';
            heroContent.style.padding = '0';
        }

        // Fix profile image
        if (heroImage) {
            const imgWidth = window.innerWidth <= 380 ? 180 : 200;

            heroImage.style.width = imgWidth + 'px';
            heroImage.style.height = imgWidth + 'px';
            heroImage.style.margin = '0 auto 60px';
            heroImage.style.padding = '0';
        }

        if (profileWrapper) {
            profileWrapper.style.margin = '0';
            profileWrapper.style.padding = '0';
        }

        if (profileContainer) {
            const containerWidth = window.innerWidth <= 380 ? 180 : 200;

            profileContainer.style.width = containerWidth + 'px';
            profileContainer.style.height = containerWidth + 'px';
            profileContainer.style.margin = '0 auto';
        }

        // Fix text content
        if (heroText) {
            heroText.style.marginTop = '0';
            heroText.style.marginBottom = '50px';
            heroText.style.padding = '0 15px';
            heroText.style.width = '100%';
            heroText.style.position = 'relative';
            heroText.style.zIndex = '20';
            heroText.style.textAlign = 'center';
        }

        // Fix social links
        const socialLinks = document.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.style.display = 'flex';
            socialLinks.style.flexDirection = 'row';
            socialLinks.style.justifyContent = 'center';
            socialLinks.style.gap = '20px';
            socialLinks.style.margin = '0 auto 30px';
        }

        // Fix buttons
        const heroCta = document.querySelector('.hero-cta');
        if (heroCta) {
            heroCta.style.display = 'flex';
            heroCta.style.flexDirection = 'column';
            heroCta.style.width = '100%';
            heroCta.style.gap = '15px';
            heroCta.style.marginBottom = '20px';

            const buttons = heroCta.querySelectorAll('a');
            buttons.forEach(btn => {
                btn.style.width = '100%';
                btn.style.textAlign = 'center';
            });
        }

        // Handle resize
        window.addEventListener('resize', function () {
            const newIsMobile = window.innerWidth <= 768;

            if (newIsMobile !== isMobile) {
                // Reload page if switching between mobile and desktop
                window.location.reload();
            }
        });
    }
});