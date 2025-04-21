const mailInput = document.getElementById("Email1Input");   // corrigé
const PasswordInput = document.getElementById("PasswordInput");
const btnsingin = document.getElementById("btnsignin");

btnsingin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // ici il faudra appeler l'api pour verifier les credentials en BDO

    if (mailInput.value == "test@gmail.com" && PasswordInput.value == "123") {
        //il faudra recuper le vrai token
        const token = "ikjhhhhdjdjjjjdjj";
        setToken(token);
        //placer ce token en cookie
        setCookie(RoleCookieName, "client", 7)
        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        PasswordInput.classList.add("is-invalid"); // corrigé: respect de la casse + classe correcte
    }
}