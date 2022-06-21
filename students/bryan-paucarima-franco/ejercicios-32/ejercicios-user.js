// donde nos aparecerá nuestro nombre y un boton de cerrar sesion, cuando le demos al boton de cerrar sesion,
// esta nos debe vaciar nuestro localstorage y mandarnos de regreso al la pagina home( para esto usaremos la api History).

const printFormTwo = document.createElement('form')
const userNameLoggedIn = document.createElement('p')
userNameLoggedIn.textContent = 'Username: '
const loggedIn = document.createElement('p')
loggedIn.textContent = JSON.parse(localStorage.getItem('valueName'))
const inputSubmitTwo = document.createElement('input')
inputSubmitTwo.type = 'submit'
inputSubmitTwo.value = 'Sign off'

document.body.appendChild(printFormTwo)
printFormTwo.appendChild(userNameLoggedIn)
printFormTwo.appendChild(loggedIn)
printFormTwo.appendChild(inputSubmitTwo)


printFormTwo.addEventListener('submit', (e) => {
    e.preventDefault();  
    history.back();
    localStorage.removeItem('valueName')
    localStorage.removeItem('valuePassword') 
})
