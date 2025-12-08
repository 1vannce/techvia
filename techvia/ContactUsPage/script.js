document.addEventListener('DOMContentLoaded', (event) => {
    // Note: The validateForm function needs to be globally accessible for the HTML onclick
    
    // Get the modal element
    const modal = document.getElementById("mapModal");

    // Get the link that opens the modal
    const mapLink = document.getElementById("map-icon-link");

    // Get the <span> element that closes the modal
    const span = document.getElementById("closeMap");

    // When the user clicks the link, open the modal 
    mapLink.onclick = function(e) {
        e.preventDefault(); // Prevent the link from jumping the page
        modal.style.display = "flex"; // Use 'flex' to center the modal content
    }

    // When the user clicks on (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }
});

// Function is now globally accessible and contains the actual logic
function validateForm() {
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');
    const contactForm = document.getElementById('contactForm');

    // Regular expression for a basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const emailValue = emailInput.value;
    const isValid = emailPattern.test(emailValue);

    if (!isValid) {
        // Show error message if validation fails
        emailError.style.display = 'block';
        emailInput.classList.add('invalid');
        return false; // Prevent form submission
    } else {
        // Hide error message if valid
        emailError.style.display = 'none';
        emailInput.classList.remove('invalid');
        
        // --- Form is valid, proceed with submission logic here ---
        // As discussed previously, this requires a server-side script (e.g., PHP)

        // Clear the form fields after successful validation/submission
        contactForm.reset(); 

        // Optional: You can add an alert to confirm the message was sent
        alert('Form Submitted (backend processing needed)');
        
        return true; 
    }
}
