// Fix mobile scrolling issues
document.addEventListener('DOMContentLoaded', function () {
    // Ensure body can scroll
    document.body.style.height = 'auto';
    document.body.style.overflowY = 'auto';

    // Add extra space at the bottom of the content to ensure everything is visible
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.paddingBottom = '100px';
    }

    // Make sure cosmic background stays fixed
    const cosmicBg = document.querySelector('.cosmic-bg');
    if (cosmicBg) {
        cosmicBg.style.position = 'fixed';
        cosmicBg.style.height = '100%';
    }

    // Force content to be scrollable
    document.documentElement.style.height = 'auto';
    document.documentElement.style.overflowY = 'auto';

    // Fix possible overflow issues
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.overflow = 'visible';
    }

    // Add extra padding to container
    const container = document.querySelector('.container');
    if (container) {
        container.style.paddingBottom = '50px';
    }

    // Add extra space element at the bottom
    const extraSpace = document.createElement('div');
    extraSpace.style.height = '70px';
    extraSpace.style.width = '100%';
    document.body.appendChild(extraSpace);
});