function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Get elements
const contactBtn = document.getElementById('contact-btn');
const popupForm = document.getElementById('popup-form');
const closeBtn = document.querySelector('.close-btn');

// Open popup with smooth transition when 'Contact Me' button is clicked
contactBtn.addEventListener('click', function() {
    popupForm.style.display = 'flex'; // Ensure popup is displayed
    setTimeout(function() {
        popupForm.classList.add('show'); // Add the 'show' class after it's visible to trigger the animation
    }, 10); // Small delay to allow the transition to work
});

// Close popup with smooth transition when the close button is clicked
closeBtn.addEventListener('click', function() {
    popupForm.classList.remove('show');
    setTimeout(function() {
        popupForm.style.display = 'none'; // Hide it after the transition ends
    }, 300); // Match the duration of the CSS transition
});

// Close popup with smooth transition when clicking outside the form content
window.addEventListener('click', function(event) {
    if (event.target == popupForm) {
        popupForm.classList.remove('show');
        setTimeout(function() {
            popupForm.style.display = 'none'; // Hide it after the transition ends
        }, 300); // Match the duration of the CSS transition
    }
});