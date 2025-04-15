document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to all contact buttons
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the contact info section
            const contactSection = document.querySelector('.contact-info');
            
            // Scroll to the contact section smoothly
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Open the email client
            window.location.href = mailtoLink;
        });
    });
}); 