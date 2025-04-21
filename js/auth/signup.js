//Implémenter le JS de ma page
const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput"); // corrigé
const inputMail = document.getElementById("Email1Input");   // corrigé
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnvalidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

function validateForm() {
    const nomok = validateRequired(inputNom);
    const prenomok = validateRequired(inputPreNom);
    const mailok = validateMail(inputMail);
    const passwordok = validatePassword(inputPassword);
    const passwordconfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword); // corrigé ici

    if (nomok && prenomok && mailok && passwordok && passwordconfirmOk) {
        btnvalidation.disabled = false;
    } else {
        btnvalidation.disabled = true;
    }
}

function validateConfirmationPassword(inputPwd, inputconfirmePwd) { // corrigé "imputPwd"
    if (inputPwd.value == inputconfirmePwd.value) {
        inputconfirmePwd.classList.add("is-valid");
        inputconfirmePwd.classList.remove("is-invalid");
        return true;
    } else {
        inputconfirmePwd.classList.add("is-invalid");
        inputconfirmePwd.classList.remove("is-valid");
        return false;
    }
}

function validateMail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailuser = input.value;
    if (mailuser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passworduser = input.value;
    if (passworduser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input) {
    if (input.value != '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}