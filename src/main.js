// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal on Scroll & Active Links
const reveals = document.querySelectorAll('.reveal');
const navItems = document.querySelectorAll('.nav-item');
const deskLinks = document.querySelectorAll('.nav-links a');

const handleScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    const fromTop = window.scrollY + 100;

    // Reveal elements
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < triggerBottom) {
            reveal.classList.add('active');
        }
    });

    // Active link states
    const sections = ['home', 'services', 'about', 'location'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const top = section.offsetTop - 100;
            const bottom = top + section.offsetHeight;

            if (fromTop >= top && fromTop <= bottom) {
                // Update bottom nav
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
                });
                // Update desktop nav
                deskLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        }
    });
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Smooth link handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
