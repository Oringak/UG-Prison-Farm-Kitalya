function goHome() {
    // Redirect to the homepage
    window.location.href = 'index.html';  // Replace 'index.html' with the actual URL of your homepage if it's different.
}

function showAboutUs() {
    // Show About Us content
    alert('About Us content goes here.');
}

function toggleContactDetails() {
    const contactDetails = document.getElementById('contact-details');
    contactDetails.style.display = contactDetails.style.display === 'none' ? 'block' : 'none';
}

function showFacilityOverview() {
    // Show Facility Overview content
    alert('Facility Overview content goes here.');
}

function showStaffWelfare() {
    // Show Staff Welfare content
    alert('Staff Welfare content goes here.');
}

let slideIndex = 0;
const slides = document.querySelectorAll("#slider img");
const slider = document.getElementById("slider");

function showSlides() {
    slideIndex = (slideIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${slideIndex * 20}%)`; // Move by 20% each time
}

setInterval(showSlides, 5000); // Change image every 5 seconds

function openFullscreen(img) {
    const fullscreen = document.createElement("div");
    fullscreen.style.position = "fixed";
    fullscreen.style.top = "0";
    fullscreen.style.left = "0";
    fullscreen.style.width = "100vw";
    fullscreen.style.height = "100vh";
    fullscreen.style.background = "rgba(0, 0, 0, 0.9)";
    fullscreen.style.display = "flex";
    fullscreen.style.alignItems = "center";
    fullscreen.style.justifyContent = "center";
    fullscreen.style.zIndex = "1000";

    const fullImage = document.createElement("img");
    fullImage.src = img.src;
    fullImage.style.maxWidth = "90%";
    fullImage.style.maxHeight = "90%";
    fullImage.style.borderRadius = "10px";
    fullImage.style.boxShadow = "0px 4px 8px rgba(255, 255, 255, 0.5)";
    fullImage.style.cursor = "pointer";

    fullImage.onclick = function () {
        document.body.removeChild(fullscreen);
    };

    fullscreen.appendChild(fullImage);
    document.body.appendChild(fullscreen);
}

function toggleReadMore() {
    const moreText = document.getElementById("more-text");
    const readMoreBtn = document.getElementById("read-more-btn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
}

function toggleSubIcons() {
    const subIcons = document.getElementById('about-us-icons');
    subIcons.style.display = subIcons.style.display === 'none' ? 'block' : 'none';
}

function showContent(id) {
    const contentViews = document.querySelectorAll('.content-view');
    contentViews.forEach(content => content.style.display = 'none');
    const content = document.getElementById(id);
    if (content) {
        content.style.display = 'block';
    }
}