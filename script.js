// Interactive Photo Upload
const photoUpload = document.getElementById('photo-upload');
photoUpload.addEventListener('change', (event) => {
    alert(`${event.target.files.length} photo(s) selected for upload.`);
});

// Interactive Officer Photo Upload
const officerPhotoUpload = document.getElementById('officer-photo-upload');
const officerPhotoGallery = document.getElementById('officer-photo-gallery');

officerPhotoUpload.addEventListener('change', (event) => {
    const files = event.target.files;
    officerPhotoGallery.innerHTML = ""; // Clear the gallery
    for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = "Officer Photo";
            img.className = "image-item";
            officerPhotoGallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// Interactive Video Upload
const videoUpload = document.getElementById('video-upload');
videoUpload.addEventListener('change', (event) => {
    alert(`${event.target.files.length} video(s) selected for upload.`);
});