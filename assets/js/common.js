// Common JS functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Navigation transition on scroll
    const header = document.querySelector('.header');
    const fullNav = document.querySelector('.nav-container');
    
    // Mobile menu elements
    const burgerMenu = document.querySelector('.burger-menu');
    // const burgerMenuMini = document.querySelector('.burger-menu-mini'); // Not used
    const body = document.body;
    
    // Create mobile menu elements
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Restore closeMenu creation and usage
    const closeMenu = document.createElement('div');
    closeMenu.className = 'close-menu';
    closeMenu.innerHTML = '&times;';
    
    const mobileMenuLinks = document.createElement('ul');
    mobileMenuLinks.className = 'mobile-menu-links';
    
    // Clone navigation links for mobile menu
    const navLinks = document.querySelector('.nav-links').cloneNode(true);
    mobileMenuLinks.innerHTML = navLinks.innerHTML;
    
    mobileMenu.appendChild(closeMenu); // Add closeMenu back
    mobileMenu.appendChild(mobileMenuLinks);
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    body.appendChild(mobileMenu);
    body.appendChild(overlay);
    
    // Scroll event handler for navigation transition
    window.addEventListener('scroll', function() {
        fullNav.style.display = 'flex';
    });
    
    // Mobile menu toggle function
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        overlay.style.display = mobileMenu.classList.contains('active') ? 'block' : 'none';
        body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        // No burgerMenu.classList.toggle('active')
    }
    
    // Event listeners for mobile menu
    burgerMenu.addEventListener('click', toggleMobileMenu);
    closeMenu.addEventListener('click', toggleMobileMenu); // Restore
    overlay.addEventListener('click', toggleMobileMenu);
    
    // Contact form submission handler - if exists on page
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation and submission
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Thank you for your message! In a real site, this would be sent to the site owner.');
                contactForm.reset();
                
                // In a real implementation, you would add code to submit to a form service
            }
        });
    }
}); 