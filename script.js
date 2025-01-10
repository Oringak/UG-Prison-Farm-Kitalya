// script.js file
document.addEventListener('DOMContentLoaded', () => {
    // Example JavaScript code: Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 50, // Offset for the fixed header
                behavior: 'smooth'
            });
        });
    });
});

function toggleAboutSubIcons() {
    var aboutSubIcons = document.getElementById('about-sub-icons');
    aboutSubIcons.style.display = aboutSubIcons.style.display === 'none' ? 'block' : 'none';
    document.getElementById('about-content').style.display = 'none';
}

function showAboutContent(contentType) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the selected content section
    document.getElementById(contentType + '-content').style.display = 'block';

    // Display the content area
    document.getElementById('about-content').style.display = 'block';
}