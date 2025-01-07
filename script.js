// JavaScript for Interactive Features

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Hero Section Text Fade-in Effect
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero h2');
    if (heroText) {
        heroText.style.opacity = 0;
        heroText.style.transition = 'opacity 2s';
        setTimeout(() => {
            heroText.style.opacity = 1;
        }, 500);
    }
});

// Facility Overview Image Hover Effect
const imageItems = document.querySelectorAll('.image-item');
imageItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
