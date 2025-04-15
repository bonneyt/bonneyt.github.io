function toggleHorse(id, event) {
    // Prevent the click from bubbling up to the h3 element
    event.preventDefault();
    event.stopPropagation();
    
    const content = document.getElementById(id);
    const button = event.target;
    
    // Toggle the active class
    content.classList.toggle('active');
    
    // Update button text
    button.textContent = content.classList.contains('active') ? 'Hide Details' : 'Show Details';
}

// Add click handlers to all h3 elements in horse profiles
document.addEventListener('DOMContentLoaded', function() {
    const horseHeaders = document.querySelectorAll('.horse-profile h3');
    
    horseHeaders.forEach(header => {
        header.addEventListener('click', function(event) {
            // Find the button within this header and click it
            const button = this.querySelector('.toggle-btn');
            if (button && event.target !== button) {
                button.click();
            }
        });
    });
}); 