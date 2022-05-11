
//1- Guarda un string hola mundo en el local storage.

const string = 'hola mundo';

localStorage.setItem('string', JSON.stringify(string));



//2- Guarda un objeto con dos propiedades tu nombre y tu apellido en el session storage, 
// recuperalo y pintalo por pantalla.

const nameSurnameObj = {
    name: 'Marco',
    surname: 'Garcia'
}

sessionStorage.setItem('namesurname', JSON.stringify(nameSurnameObj));

const restoredNameSurname = JSON.parse(sessionStorage.getItem('namesurname'));

let p = document.createElement('p');
p.textContent = `${restoredNameSurname.name} ${restoredNameSurname.surname}`;

document.body.appendChild(p);


//3- Crea una pagina html  con dos input text , escribe cualquier dato recupéra los input en js  
// y mánda un value al localstorage y otro al session storage.

const inputOne = document.querySelector('.input-one');
inputOne.addEventListener('input', () => {
    sessionStorage.setItem('inputone', JSON.stringify(inputOne.value));
})

const inputTwo = document.querySelector('.input-two');
inputTwo.addEventListener('input', () => {
    localStorage.setItem('inputtwo', JSON.stringify(inputTwo.value));
})

