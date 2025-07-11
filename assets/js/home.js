// Home page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Instagram Carousel functionality
    const carouselSlide = document.querySelector('.carousel-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (carouselSlide && prevButton && nextButton) {
        // Get all images in the carousel
        const images = carouselSlide.querySelectorAll('img');
        const imageWidth = 210; // 200px width + 10px margin
        let currentIndex = 0;
        
        // Function to update carousel position
        function updateCarousel() {
            carouselSlide.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }
        
        // Event listeners for carousel buttons
        nextButton.addEventListener('click', function() {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
        
        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    }
}); 

// Contact form mailto functionality
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = document.getElementById('message').value;

        const subject = encodeURIComponent('New Contact Form Submission');
        const body = encodeURIComponent(message);

        window.location.href = `mailto:alice@ahframeartist.com?subject=${subject}&body=${body}`;
    });
} 