// // 1. Guarda un string hola mundo en el local storage.
localStorage.setItem('demoString', 'Hola mundo')

// // 2. Guarda un objeto con dos propiedades tu nombre y tu apellido en el session storage, recuperalo
// // y pintalo por pantalla.

const userOne = {
    nombre:'Bryan',
    apellido: 'Paucarima Franco'
}

sessionStorage.setItem('userOne',JSON.stringify(userOne))

const user = JSON.parse(sessionStorage.getItem('userOne'))
// console.log(user)

const text = document.createElement('p')
text.textContent = `${user.nombre} ${user.apellido}`
// console.log(text)
document.body.appendChild(text)

// // 3. Crea una pagina html  con dos input text , escribe cualquier dato recupéra los input en js  
// //  y mánda un value al localstorage y otro al session storage.

const inputOne = document.createElement('input')
inputOne.type = 'text'
inputOne.placeholder = 'Escribe un texto'
const inputTwo = document.createElement('input')
inputTwo.type = 'text'
inputTwo.placeholder = 'Escribe un texto'

document.body.appendChild(inputOne)
document.body.appendChild(inputTwo)

inputOne.addEventListener('input', (e) => {
    localStorage.setItem('valueOne', JSON.stringify(e.target.value))
})


inputTwo.addEventListener('input', (e) => {
    sessionStorage.setItem('valueTwo', JSON.stringify(e.target.value))
})

