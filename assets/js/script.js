document.getElementById('generate').onclick = function newPassword() {
    const lengthPrompt = prompt("Enter the length of your password (between 8 and 128)");
    const passwordLength = parseInt(lengthPrompt);

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Your choice doesn't meet our password requirements (8-128 characters)");
        return;
    }

    const useSpecialChars = confirm("Do you want Special Characters in your password?");
    const useNumericChars = confirm("Do you want Numeric Characters in your password?");
    const useLowercaseChars = confirm("Do you want Lowercase Characters in your password?");
    const useUppercaseChars = confirm("Do you want Uppercase Characters in your password?");

    const specialCharacters = '!#$%&?@[\\]^_`{|}~'.split('');
    const numericCharacters = '0123456789'.split('');
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let availableCharacters = [];

    if (useSpecialChars) availableCharacters = availableCharacters.concat(specialCharacters);
    if (useNumericChars) availableCharacters = availableCharacters.concat(numericCharacters);
    if (useLowercaseChars) availableCharacters = availableCharacters.concat(lowercaseCharacters);
    if (useUppercaseChars) availableCharacters = availableCharacters.concat(uppercaseCharacters);

    if (availableCharacters.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
    }

    document.getElementById("showpassword").value = password;

    // Scroll to the password generator section
    document.getElementById("generate-section").scrollIntoView({ behavior: "smooth", block: "start" });
};

function copyPassword() {
    const passwordField = document.getElementById("showpassword");
    const password = passwordField.value;

    if (!password) {
        alert("No password to copy! Generate a password first.");
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    }).catch(() => {
        // Fallback for older browsers
        passwordField.select();
        document.execCommand("Copy");
        alert("Password copied to clipboard!");
    });
}