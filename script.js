document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const ctaButtons = document.querySelector('.cta-buttons');

    // Check if the toggle button already exists
    if (!navbar.querySelector('.toggle-button')) {
        const toggleButton = document.createElement('button');
        toggleButton.classList.add('toggle-button');
        toggleButton.innerHTML = '&#9776;'; // Hamburger icon
        navbar.insertBefore(toggleButton, navLinks);

        // Add click event listener to toggle button
        toggleButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            ctaButtons.classList.toggle('active');
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Form Validation for Newsletter Subscription
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.querySelector('input[placeholder="First Name"]');
    const email = document.querySelector('input[placeholder="Email"]');
    let valid = true;

    // Validation checks
    if (firstName.value.trim() === '') {
        alert('First Name is required.');
        firstName.focus();
        valid = false;
    } else if (email.value.trim() === '') {
        alert('Email is required.');
        email.focus();
        valid = false;
    } else if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        email.focus();
        valid = false;
    }

    if (valid) {
        alert('Subscription successful!');
        // You can uncomment the next line to actually submit the form
        // e.target.submit();
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
