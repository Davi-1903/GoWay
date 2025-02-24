const password = document.querySelector('#password');
const passwordBtn = document.querySelector('#password-btn');

passwordBtn.onclick = function() {
    password.type = (this.checked) ? 'text' : 'password';
}