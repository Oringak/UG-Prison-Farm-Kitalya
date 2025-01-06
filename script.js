// Welcome message alert when the page loads
window.addEventListener("load", function () {
    alert("Welcome to UG Prison Farm Kitalya Website! Explore our efforts in rehabilitation and reintegration.");
});

// Smooth scrolling functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Function to toggle visibility of sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const isHidden = section.style.display === "none";
        section.style.display = isHidden ? "block" : "none";
    }// JavaScript to Highlight the Section on Page Load
document.addEventListener('DOMContentLoaded', function () {
    const rehabSection = document.querySelector('.rehabilitation');
    if (rehabSection) {
        rehabSection.style.transition = 'background-color 1s ease';
        rehabSection.style.backgroundColor = '#eaf4fc'; // Temporary light blue highlight

        // Revert to original background after 2 seconds
        setTimeout(() => {
            rehabSection.style.backgroundColor = '#f9f9f9';
        }, 2000);
    }
});

// JavaScript to Scroll to the Section When a Button is Clicked
function scrollToRehabilitation() {
    const rehabSection = document.querySelector('.rehabilitation');
    if (rehabSection) {
        rehabSection.scrollIntoView({ behavior: 'smooth' });
    }
}

How to Use:

    HTML: Add a button to scroll to the section (optional):

<button onclick="scrollToRehabilitation()" style="display: block; margin: 20px auto; padding: 10px 20px; font-size: 1em;">
    Go to Rehabilitation Section
</button>
// Add toggle buttons for each section dynamically
function addToggleButtons() {
    const sections = document.querySelectorAll(".content-section, .rehabilitation, .professionalism, .facility-overview");
    sections.forEach(section => {
        const sectionId = section.id || "";
        const heading = section.querySelector("h2")?.textContent || "Section";

        if (sectionId) {
            const button = document.createElement("button");
            button.textContent = `Toggle ${heading}`;
            button.className = "toggle-button";
            button.addEventListener("click", () => toggleSection(sectionId));

            section.parentElement.insertBefore(button, section);
        }
    });
}

// Initialize toggle buttons on page load
addToggleButtons();

// Image gallery interaction (if images are clickable or need enhancement)
function setupImageGallery() {
    const images = document.querySelectorAll(".image-gallery .image-item img");
    images.forEach(image => {
        image.addEventListener("click", () => {
            const altText = image.alt || "Image";
            alert(`You clicked on: ${altText}`);
        });
    });
}

// Initialize image gallery interaction
setupImageGallery();
// Optional: Hover effect for the Officer in Charge section
document.addEventListener("DOMContentLoaded", function() {
    const officerSection = document.querySelector('.officer');

    officerSection.addEventListener('mouseenter', function() {
        officerSection.style.backgroundColor = '#e0f7fa';
    });
    officerSection.addEventListener('mouseleave', function() {
        officerSection.style.backgroundColor = '#ffffff';
    });
});