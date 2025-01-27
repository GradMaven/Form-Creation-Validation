
//Set Up and Initial Code Structure

  function validateForm() {
    
    const form = document.getElementById("registration-form");

    const feedbackDiv = document.getElementById("form-feedback");

    
//Form Submission and Event Prevention

form.addEventListener('submit', (event) => {
    event.preventDefault(); //to prevent dafault form submission

    //Input Retrieval and Trimming

const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

//Initialize Validation Variables:
let isValid = true;
const messages = [];

//Username Validation:

if (username.length < 3) {
    isValid = false;
    messages.push("Username must be a minimum of 3 characters!");
}

if (!email.includes("@") || !email.includes(".")) {
    isValid = false;
    messages.push("Please enter a valid email address (e.g., user@example.com)!");
}

if (password.length < 8) {
    isValid = false;
    messages.push("Password must be at least 8 characters long");
}


//Displaying Feedback

feedbackDiv.style.display = "block";
if (isValid) {
    feedbackDiv.textContent = "Registration successful";
    feedbackDiv.style.color = "#28a745";

} else {
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
}

});

}


document.addEventListener("DOMContentLoaded", validateForm);
