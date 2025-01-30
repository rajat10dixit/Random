const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthInput = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?/";

function generatePassword() {
    let characters = "";
    if (uppercaseCheck.checked) characters += uppercaseLetters;
    if (lowercaseCheck.checked) characters += lowercaseLetters;
    if (numbersCheck.checked) characters += numbers;
    if (symbolsCheck.checked) characters += symbols;

    const passwordLength = parseInt(lengthInput.value);
    let password = "";

    if (characters.length === 0) {
        passwordField.value = "Select at least one option!";
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordField.value = password;
}

copyBtn.addEventListener("click", () => {
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});

generateBtn.addEventListener("click", generatePassword);
