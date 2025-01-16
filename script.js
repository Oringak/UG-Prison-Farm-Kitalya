function goHome() {
    window.location.href = 'index.html'; // Replace with actual homepage URL
}

function toggleContactDetails() {
    const contactDetails = document.getElementById('contact-details');
    contactDetails.style.display = contactDetails.style.display === 'none' ? 'block' : 'none';
}

function toggleSubIcons() {
    const subIconsContainer = document.getElementById('rehab-sub-icons-container');
    const allSubContents = document.querySelectorAll('.sub-icon-content');

    if (subIconsContainer.style.display === 'block') {
        subIconsContainer.style.display = 'none';
        allSubContents.forEach((content) => {
            content.style.display = 'none';
        });
    } else {
        subIconsContainer.style.display = 'block';
    }
}

function showContent(contentId) {
    const allContent = document.querySelectorAll('.content-view');
    allContent.forEach((content) => {
        content.style.display = 'none';
    });

    const contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';
}

function toggleReadMore() {
    const readMoreText = document.getElementById('more-text');
    const readMoreBtn = document.getElementById('read-more-btn');
    
    if (readMoreText.style.display === 'none') {
        readMoreText.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        readMoreText.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    showContent('prisons-act'); // Default view when the page loads
});