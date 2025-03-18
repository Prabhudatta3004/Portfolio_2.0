// Main functionality
// Main functionality
document.addEventListener('DOMContentLoaded', function () {
    // Loader Animation
    setTimeout(function () {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(function () {
            loader.style.visibility = 'hidden';
        }, 500);
    }, 2000);

    // Navbar Scroll Effect
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    document.getElementById('mobile-toggle').addEventListener('click', function () {
        document.getElementById('nav-links').classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            document.getElementById('nav-links').classList.remove('active');
        });
    });
});