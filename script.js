document.addEventListener('DOMContentLoaded', function () {
    // Functionality to handle image hover effect and caption toggle
    const imageItems = document.querySelectorAll('.image-item img');
    
    imageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        item.addEventListener('click', function() {
            const caption = this.nextElementSibling;
            caption.style.display = (caption.style.display === 'none' || caption.style.display === '') ? 'block' : 'none';
        });
    });
});