// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-up').forEach(el => {
    observer.observe(el);
});

// Scroll Background for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.height = '70px';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        navbar.style.height = '80px';
    }
});

// Mobile menu placeholder (could be expanded)
const menuToggle = document.querySelector('.mobile-menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        // Implement mobile menu opening logic here
        console.log('Mobile menu clicked');
    });
}
