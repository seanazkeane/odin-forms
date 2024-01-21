const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const userPassword = document.getElementById('user_password');
const confirmPassword = document.getElementById('confirm_password');
const errorElement = document.getElementById("error_element");
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    if (userPassword.value !== confirmPassword.value) {
        e.preventDefault();
        errorElement.innerText = "Passwords do not match. Try again."
    }

});
