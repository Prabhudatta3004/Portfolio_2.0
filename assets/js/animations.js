// Animation effects
// Animation effects
document.addEventListener('DOMContentLoaded', function () {
    // Create Animated Stars
    function createAnimatedStars() {
        const starsContainer = document.getElementById('animated-stars');
        const starCount = 50;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('span');
            const size = Math.random() * 2 + 1;
            const duration = Math.random() * 3 + 2;
            const opacity = Math.random() * 0.7 + 0.3;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.setProperty('--duration', `${duration}s`);
            star.style.setProperty('--opacity', opacity);
            star.style.animationDelay = `${Math.random() * 5}s`;

            starsContainer.appendChild(star);
        }
    }

    createAnimatedStars();

    // Parallax effect for cosmic elements
    window.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        // Move nebulas with mouse
        const nebula1 = document.querySelector('.nebula-1');
        const nebula2 = document.querySelector('.nebula-2');

        nebula1.style.transform = `rotate(45deg) translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        nebula2.style.transform = `rotate(-45deg) translate(${-mouseX * 20}px, ${-mouseY * 20}px)`;

        // Move cosmic rings with mouse
        const rings = document.querySelectorAll('.cosmic-ring');
        rings.forEach((ring, index) => {
            const factor = (index + 1) * 5;
            ring.style.transform = `translate(-50%, -50%) translate(${mouseX * factor}px, ${mouseY * factor}px)`;
        });
    });

    // Add slight rotation to the profile image on hover
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mousemove', function (e) {
            const bounds = this.getBoundingClientRect();
            const mouseX = e.clientX - bounds.left - bounds.width / 2;
            const mouseY = e.clientY - bounds.top - bounds.height / 2;
            const rotateX = mouseY * -0.05;
            const rotateY = mouseX * 0.05;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        profileImage.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
});