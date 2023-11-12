const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const signUpButtom = document.getElementById('signUp');

signUpButtom.addEventListener('click', () =>(
    container.classList.add('panel-active')
))

loginButton.addEventListener('click', () =>(
    container.classList.remove('panel-active')
))
