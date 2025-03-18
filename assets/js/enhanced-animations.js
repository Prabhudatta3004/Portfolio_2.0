// Enhanced 3D Animations JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Three.js Particle Universe
    initParticleUniverse();

    // Initialize Warp Speed Effect
    initWarpSpeed();

    // Parallax Tilt Effect for Profile Image
    initParallaxTilt();

    // Enhanced loader animation
    setTimeout(function () {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(function () {
                loader.style.visibility = 'hidden';
            }, 500);
        }
    }, 2500);

    // Initialize all animations
    createAnimatedStars();
    initButtonEffects();
    animateGeometricElements();
    initParallaxEffects();

    // Highlight active page in navigation
    highlightActivePage();
});

// Highlight active page in navigation
function highlightActivePage() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Check if href matches the current page or if we're on index.html/home
        if (href === currentPage ||
            (currentPage === '' && href === 'index.html') ||
            (currentPage === '/' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Three.js Particle Universe
function initParticleUniverse() {
    const particleContainer = document.getElementById('particle-universe');
    if (!particleContainer) return;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    particleContainer.appendChild(renderer.domElement);

    // Create particle geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;

    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
        // Position particles in a 3D space
        posArray[i] = (Math.random() - 0.5) * 10;
        posArray[i + 1] = (Math.random() - 0.5) * 10;
        posArray[i + 2] = (Math.random() - 0.5) * 10;

        // Random scale for each particle
        scaleArray[i / 3] = Math.random();
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));

    // Create particle material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.025,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    // Create particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Position camera
    camera.position.z = 5;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate particle system based on mouse movement
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;

        // Responsive mouse movement
        particlesMesh.rotation.x += mouseY * 0.05;
        particlesMesh.rotation.y += mouseX * 0.05;

        renderer.render(scene, camera);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

// Warp Speed Effect
function initWarpSpeed() {
    const warpContainer = document.getElementById('warp-speed');
    if (!warpContainer) return;

    const starCount = 400;

    for (let i = 0; i < starCount; i++) {
        createWarpStar(warpContainer);
    }
}

function createWarpStar(container) {
    const star = document.createElement('div');

    // Style the star
    star.style.position = 'absolute';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.backgroundColor = '#ffffff';
    star.style.borderRadius = '50%';

    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const z = Math.random() * 1000;

    // Set initial position (centered)
    star.style.left = `${window.innerWidth / 2}px`;
    star.style.top = `${window.innerHeight / 2}px`;

    // Add to container
    container.appendChild(star);

    // Animate with GSAP
    gsap.to(star, {
        x: (x - window.innerWidth / 2) * 10,
        y: (y - window.innerHeight / 2) * 10,
        opacity: 0,
        scale: 3,
        duration: 3 + Math.random() * 5,
        ease: "none",
        repeat: -1,
        delay: Math.random() * 3,
        onRepeat: function () {
            gsap.set(star, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 0.5 + Math.random()
            });
        }
    });
}

// Parallax Tilt Effect for Profile Image
function initParallaxTilt() {
    const profileImage = document.querySelector('.parallax-tilt');
    const container = document.querySelector('.profile-image-container');

    if (!profileImage || !container) return;

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate tilt values with limited range (-10 to 10 degrees)
        const tiltX = -(mouseY / (rect.height / 2)) * 10;
        const tiltY = (mouseX / (rect.width / 2)) * 10;

        // Apply tilt transformation
        profileImage.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

        // Move orbs in opposite direction for depth effect
        const orbs = document.querySelectorAll('.orb');
        orbs.forEach((orb, index) => {
            const depth = (index + 1) * 0.5;
            orb.style.transform = `translate(${-mouseX * depth * 0.02}px, ${-mouseY * depth * 0.02}px)`;
        });

        // Move tech icons for parallax effect
        const techIcons = document.querySelectorAll('.tech-icon');
        techIcons.forEach((icon, index) => {
            const depth = (index + 1) * 0.3;
            icon.style.transform = `translate(${-mouseX * depth * 0.03}px, ${-mouseY * depth * 0.03}px)`;
        });
    });

    container.addEventListener('mouseleave', () => {
        // Reset transformations
        profileImage.style.transform = 'rotateX(0deg) rotateY(0deg)';

        const orbs = document.querySelectorAll('.orb');
        orbs.forEach(orb => {
            orb.style.transform = 'translate(0, 0)';
        });

        const techIcons = document.querySelectorAll('.tech-icon');
        techIcons.forEach(icon => {
            icon.style.transform = 'translate(0, 0)';
        });
    });
}

// Create Animated Stars for the cosmic background
function createAnimatedStars() {
    const starsContainer = document.getElementById('animated-stars');
    if (!starsContainer) return;

    const starCount = 100;

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

// Animated Buttons with Hover Effects
function initButtonEffects() {
    document.querySelectorAll('.btn-3d').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate position in percent
            const percentX = x / rect.width;
            const percentY = y / rect.height;

            // Calculate tilt
            const tiltX = (percentY - 0.5) * 10;
            const tiltY = (0.5 - percentX) * 10;

            // Apply tilt and push effect
            button.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;

            // Light effect
            const background = button.querySelector('.btn-background');
            if (background) {
                background.style.background = `radial-gradient(circle at ${percentX * 100}% ${percentY * 100}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)`;
            }
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
            const background = button.querySelector('.btn-background');
            if (background) {
                background.style.background = '';
            }
        });
    });
}

// Initialize the geometric elements animation
function animateGeometricElements() {
    const elements = document.querySelectorAll('.geo-element');
    if (!elements.length) return;

    elements.forEach(element => {
        // Random starting position within viewport
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;

        element.style.left = `${startX}px`;
        element.style.top = `${startY}px`;
    });
}

// Parallax effect for cosmic elements
function initParallaxEffects() {
    window.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        // Move nebulas with mouse
        const nebula1 = document.querySelector('.nebula-1');
        const nebula2 = document.querySelector('.nebula-2');

        if (nebula1 && nebula2) {
            nebula1.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
            nebula2.style.transform = `translate(${-mouseX * 20}px, ${-mouseY * 20}px)`;
        }

        // Move cosmic rings with mouse
        const rings = document.querySelectorAll('.cosmic-ring');
        rings.forEach((ring, index) => {
            const factor = (index + 1) * 5;
            ring.style.transform = `translate(-50%, -50%) translate(${mouseX * factor}px, ${mouseY * factor}px)`;
        });
    });
}

// Window resize handling
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        // Disable or reduce certain effects on smaller screens
        const particleUniverse = document.getElementById('particle-universe');
        if (particleUniverse) {
            particleUniverse.style.opacity = '0.3';
        }
    } else {
        const particleUniverse = document.getElementById('particle-universe');
        if (particleUniverse) {
            particleUniverse.style.opacity = '0.6';
        }
    }
});