// 4. Haremos una pagina web con una pagina home, la cual tendrá un form de login que tendrá tres, 
// input uno de nombre, uno de password y un input submit, cuando el usuario inicie sesión deberá , 
// mandarnos a otra pagina html de tipo usuario (para esto usaremos la api Location) 

const printForm = document.createElement('form')
const inputName = document.createElement('input')
inputName.placeholder = 'Username'
const inputPassword = document.createElement('input')
inputPassword.type = 'password'
inputPassword.placeholder = 'Password'
const inputSubmit = document.createElement('input')
inputSubmit.type = 'submit'
inputSubmit.value = 'Sign in'

printForm.addEventListener('submit', (e) => {
    e.preventDefault();    
    location.href = 'ejercicios-user.html'
})

inputName.addEventListener('input', (e) => {
    localStorage.setItem('valueName', JSON.stringify(e.target.value))
})

inputPassword.addEventListener('input', (e) => {
    localStorage.setItem('valuePassword', JSON.stringify(e.target.value))
})

document.body.appendChild(printForm)
printForm.appendChild(inputName)
printForm.appendChild(inputPassword)
printForm.appendChild(inputSubmit)