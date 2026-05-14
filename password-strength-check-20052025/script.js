const passwordInput = document.getElementById("password");
const strengthMessage = document.getElementById("strengthMessage");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    strengthMessage.textContent = strength.text;
    strengthMessage.style.color = strength.color;
});

function checkPasswordStrength(password) {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[\W_]/.test(password);
    const length = password.length;

    if(length === 0) {
        return { text: "" , color: "black"};
    }

    if (length < 6) {
        return { text: "Çok zayıf", color: "red" };
      }

      if( length >= 6 && hasLower && hasNumber) {
        if (hasUpper && hasSymbol && length >= 8) {
            return { text: "Guclu şifre" , color: "green"};
        }
        return { text: "orta seviye şifre",  color: "orange"};
      }
      return { text: "zayıf şifre" ,  color: "red"};
}