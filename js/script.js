function generatePassword() {
    // Prompt for password criteria
    const length = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));

    if (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
    }

    const includeLowercase = confirm("Include lowercase characters?");
    const includeUppercase = confirm("Include uppercase characters?");
    const includeNumeric = confirm("Include numeric characters?");
    const includeSpecial = confirm("Include special characters?");

    // Validate at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert("Please select at least one character type.");
        return;
    }

    // Generate the password
    const password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

    // Display the password on the page
    document.getElementById("password-container").innerText = `${password}`;
}

function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_+{}[]|;:,.<>?';

    let allChars = '';
    let password = '';

    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumeric) allChars += numericChars;
    if (includeSpecial) allChars += specialChars;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}