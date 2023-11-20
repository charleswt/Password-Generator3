function generatePassword() {

    // Password criteria prompt
    var length = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));

    if (isNaN(length) || length < 8 || length > 128) {

        alert("Please enter a valid password length between 8 and 128 characters.");

        return;
    }

    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    // Validates one or more character type
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {

        alert("Please select at least one character type.");

        return;
    }

    // Generates password
    var password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

    // Displays password on page
    document.getElementById("password").innerText = `${password}`;
}

function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {

    // variables
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numericChars = '0123456789';
    var specialChars = '!@#$%^&*()_+{}[]|;:,.<>?';

    var allChars = '';
    var password = '';

    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumeric) allChars += numericChars;
    if (includeSpecial) allChars += specialChars;

    // randomises given text/vars
    for (let i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}