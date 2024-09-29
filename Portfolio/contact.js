document.addEventListener('DOMContentLoaded', () => {
    // Grab the form and status message elements
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Get form field values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation for empty fields
        if (!name || !email || !message) {
            displayStatus('Please fill out all fields!', 'error');
            return;
        }

        // Simulate form submission (you can replace this with an actual submission)
        displayStatus('Sending message...', 'pending');

        // Simulate an asynchronous operation like form submission via AJAX
        setTimeout(() => {
            // Simulate success response
            displayStatus('Message sent successfully!', 'success');

            // Reset form after submission
            contactForm.reset();
        }, 2000); // Simulate 2 seconds delay
    });

    // Function to display status message
    function displayStatus(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = ''; // Reset any previous class
        statusMessage.classList.add(type); // Add the new status class (error, success, pending)
    }
});
