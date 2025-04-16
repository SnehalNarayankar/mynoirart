// Initialize EmailJS service
(function() {
    emailjs.init("hgqwsAWF6LXR53eDi"); // Replace with your EmailJS User ID
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if all fields are filled
    if (name && email && message) {
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Send the form data using EmailJS
        emailjs.send('service_liqysc5', 'template_ocy6c3j', templateParams)
            .then(function(response) {
                console.log('Success:', response);  // Log successful response
                // Show success message to the user
                document.getElementById("form-message").innerHTML = "Thank you, " + name + "! Your message has been sent.";
                document.getElementById("form-message").style.color = "green";

                // Clear the form after submission
                document.getElementById("contact-form").reset();
            }, function(error) {
                console.error('Error:', error);  // Log error details to console
                // Show error message to the user
                document.getElementById("form-message").innerHTML = "Sorry, there was an error sending your message. Please try again later.";
                document.getElementById("form-message").style.color = "red";
            });
    } else {
        // Show an error message if any field is empty
        document.getElementById("form-message").innerHTML = "Please fill out all fields.";
        document.getElementById("form-message").style.color = "red";
    }
});

// Attach click event to all zoomable images
const images = document.querySelectorAll(".zoomable");
images.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";  // Show modal
        modalImg.src = this.src;        // Set modal image to clicked image
        captionText.innerHTML = this.alt;  // Set caption
    });
});

// Close modal when "x" is clicked
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";  // Hide modal
});