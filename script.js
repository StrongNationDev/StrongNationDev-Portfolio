document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Full Stack Website Developer", "UI & UX Designer", "Software Engineer", "Tech Enthusiast", "Telegram Bot Developer", "Mobile App Developer"]; // Add more texts as needed
    const typingTextElement = document.querySelector('.typing-text');
    let index = 0;  // Keeps track of the current text
    let charIndex = 0;  // Keeps track of the current character
    let isDeleting = false;  // Indicates whether the text is being deleted
    let typingSpeed = 80;  // Typing speed in milliseconds
    let deletingSpeed = 50;  // Deleting speed in milliseconds
    let delayAfterComplete = 2000;  // Delay after completing typing before deleting

    function typeText() {
        const currentText = texts[index];

        if (isDeleting) {
            typingTextElement.textContent = currentText.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                index = (index + 1) % texts.length; 
                setTimeout(typeText, 500);
            } else {
                setTimeout(typeText, deletingSpeed);  
            }
        } else {
            // If typing, add a character
            typingTextElement.textContent = currentText.substring(0, charIndex++);
            if (charIndex > currentText.length) {
                // If typing is complete, start deleting after a delay
                isDeleting = true;
                setTimeout(typeText, delayAfterComplete);
            } else {
                setTimeout(typeText, typingSpeed);  // Continue typing
            }
        }
    }

    typeText();  // Start the typing animation
});





document.addEventListener('DOMContentLoaded', function() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;  // Start with the first testimonial

    // Show the first testimonial by default
    testimonialItems[currentIndex].classList.add('active');

    setInterval(() => {
        // Hide the current testimonial
        testimonialItems[currentIndex].classList.remove('active');

        // Calculate the next index
        currentIndex = (currentIndex + 1) % testimonialItems.length;

        // Show the next testimonial
        testimonialItems[currentIndex].classList.add('active');
    }, 4000);
});


// scripts for my service navigation

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Function to display the current slide
function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    dots[index].classList.remove('active');
  });
  dots[slideIndex].classList.add('active');
}

// Function to go to the previous slide
function slideLeft() {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
}

// Function to go to the next slide
function slideRight() {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  showSlide(currentSlide);
}

// Function to go to a specific slide
function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  showSlide(currentSlide);
}
