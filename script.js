// script.js

function handleSubmission() {
    // Get the values from the input fields
    var skillsInput = document.querySelector('input[placeholder="Skills, expertise and taglines"]').value;
    var phoneInput = document.querySelector('input[placeholder="Phone number."]').value;
    var portfolioInput = document.querySelector('input[placeholder="Put your portfolios here"]').value;

    // Display an alert with the submitted information
    var alertMessage = "Skills: " + skillsInput + "\nPhone Number: " + phoneInput + "\nPortfolios: " + portfolioInput;
    alert(alertMessage);
}