const passwordInput = document.getElementById("passwordInput");
const progressBar = document.getElementById("progressBar");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", updatePasswordStrength);



function updatePasswordStrength() {
    const password = passwordInput.value;
    const passwordLength = password.length;

    // Update progress bar value based on the number of characters
    progressBar.style.width = `${ passwordLength* 5}%`;

    // Check password length and provide feedback
    if (passwordLength < 8) {passwordLength
        progressBar.style.backgroundColor = "#FF6347"; // Red
        strengthText.textContent = "Should be longer";
    } else if (passwordLength < 12) {
        progressBar.style.backgroundColor = "#FFA500"; // Orange
        strengthText.textContent = "Pretty good";
    } else {
        progressBar.style.backgroundColor = "#4CAF50"; // Green
        strengthText.textContent = "Grrrreat!";
    }
}
