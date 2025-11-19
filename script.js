let password1 = document.getElementById("password");
let password2 = document.getElementById("confirmPass");
let submitButton = document.getElementById("submitButton");
let errorMessage = document.getElementById("errorMessage");

function validatePass() {
    if (password1.value === password2.value) {
        password2.setCustomValidity("");
        password1.className = "correct";
        password2.className = "correct";
        errorMessage.textContent = "";
        } else {
        password2.setCustomValidity("Confirmar contraseña");
        password1.className = "error";
        password2.className = "error";  
        errorMessage.textContent = "*Las contraseñas no coinciden";          
        }
 }

password1.onchange = validatePass;

password2.onkeyup = validatePass;
