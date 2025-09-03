// Wait for the entire page to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Smooth Scrolling for Navigation Links ---
    // Selects all anchor links that start with a '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Add a click event listener to each anchor
        anchor.addEventListener('click', function (e) {
            // Prevent the default behavior of the link (jumping to the section)
            e.preventDefault();

            // Get the target section's ID from the href attribute (e.g., '#about-section')
            const targetId = this.getAttribute('href');
            // Find the element with that ID
            const targetElement = document.querySelector(targetId);

            // If the element exists, scroll to it smoothly
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Resume Download Button Functionality ---
    // Select the download button by its ID
    const downloadButton = document.getElementById('download_resume');
    
    // Add a click event listener
    downloadButton.addEventListener('click', () => {
        // Create a temporary link element
        const link = document.createElement('a');
        // Set the link's href to the resume file path. You'll need to replace this with the actual path to your resume.
        link.href = 'path/to/your/resume.pdf'; 
        // Set the download attribute with the desired filename
        link.download = 'Siam_Hossain_Resume.pdf';
        
        // Append the link to the document body, trigger a click, and then remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // --- Contact Form Validation ---
    // Select the form and all its input elements
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const messageTextarea = document.getElementById('messageTextarea');
    const formMessage = document.getElementById('formMessage'); // The div to display messages

    // Add a submit event listener to the form
    contactForm.addEventListener('submit', (e) => {
        // Prevent the form from submitting in the traditional way
        e.preventDefault();

        // Trim whitespace from the input values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageTextarea.value.trim();

        // Reset message div
        formMessage.textContent = '';
        formMessage.style.color = '';

        // Check if any field is empty
        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
            return; // Stop the function
        }

        // Validate the email format using a simple regular expression
        if (!validateEmail(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return; // Stop the function
        }

        // If all checks pass, simulate a successful form submission
        // In a real-world scenario, you would send this data to a server here.
        console.log('Form submitted successfully:', { name, email, message });
        
        // Display a success message
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = 'green';
        
        // Clear the form fields
        contactForm.reset();
    });

    // Helper function to validate email format
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

});
