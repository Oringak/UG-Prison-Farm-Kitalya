// 1. Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Toggle FAQ / Information Sections
const toggleSections = document.querySelectorAll('.toggle-section');
toggleSections.forEach(section => {
    const button = section.querySelector('.toggle-button');
    button.addEventListener('click', () => {
        const content = section.querySelector('.toggle-content');
        const isVisible = content.style.display === 'block';
        content.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? 'Show More' : 'Show Less';
    });
});

// 3. Image Hover Effects
const images = document.querySelectorAll('.image-item img');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// 4. Scroll Animations for elements that appear when scrolled into view
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    elementsToAnimate.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();  // Check immediately on page load to show any already visible elements

// 5. Form Validation (for a sample form)
const form = document.querySelector('#contact-form');  // Assume you have a form with id 'contact-form'
const nameField = form.querySelector('#name');
const emailField = form.querySelector('#email');
const messageField = form.querySelector('#message');

form.addEventListener('submit', function (e) {
    let isValid = true;
    if (nameField.value.trim() === '') {
        isValid = false;
        alert('Please enter your name');
    }
    if (!/\S+@\S+\.\S+/.test(emailField.value.trim())) {
        isValid = false;
        alert('Please enter a valid email address');
    }
    if (messageField.value.trim() === '') {
        isValid = false;
        alert('Please enter your message');
    }

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if invalid
    }
});

// Optional: Back-to-top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = 'Back to Top';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});