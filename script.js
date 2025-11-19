// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Lightbox / Image Preview
const galleryImages = document.querySelectorAll('.gallery img');

// Create popup container
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;

        // Clear previous image
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);
    });
});

// Close lightbox on click
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Form Validation
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields before submitting.");
        e.preventDefault();
    } else {
        alert("Thank you for your message!");
    }
});
