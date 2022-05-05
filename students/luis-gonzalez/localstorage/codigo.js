/*
//1.- Guarda un string hola mundo en el local storage.
localStorage.setItem('primer', 'Hola Mundo')

*/

/*
//2.- Guarda un objeto con dos propiedades tu nombre y tu apellido en el session storage, recuperalo y pintalo por pantalla.
sessionStorage.setItem('datos', JSON.stringify({nombre:'Luis', apellido:'González'}));

let ob = sessionStorage.getItem('datos');
let objeto = JSON.parse(ob);

const pintar = document.createElement('p');
let pintarT = document.createTextNode(`${objeto.nombre} ${objeto.apellido}`)
pintar.appendChild(pintarT)
document.body.appendChild(pintar);
*/

/*
//3.- Crea una pagina html  con dos input text , escribe cualquier dato recupéra los input en js  y mánda un value al localstorage y otro al session storage.

const formulario = document.createElement('form');

const input1 = document.createElement('input');
input1.type = 'text';
input1.name='name1';
input1.id='input1'

formulario.appendChild(input1);

const input2 = document.createElement('input');
input2.type = 'text';
input2.name='name2';
input2.id='input2'

formulario.appendChild(input2);

document.body.appendChild(formulario);
//=========================

const input11 = document.getElementById('input1');
const input22 = document.getElementById('input2')

input11.addEventListener('input', updateValue);

function updateValue(e){
    localStorage.setItem('inputN1', e.srcElement.value);

    console.log(e.srcElement.value);
}

input22.addEventListener('input', updateValues);

function updateValues(e){
    sessionStorage.setItem('inputN2', e.srcElement.value);

    console.log(e.srcElement.value);
}
*/

//4.- Haremos una pagina web con una pagina home, la cual tendrá un form de login que tendrá tres, input uno de nombre, uno de password y un input submit, cuando el usuario inicie sesión deberá , mandarnos a otra pagina html de tipo usuario (para esto usaremos la api Location) donde nos aparecerá nuestro nombre y un boton de cerrar sesion, cuando le demos al boton de cerrar sesion, esta nos debe vaciar nuestro localstorage y mandarnos de regreso al la pagina home( para esto usaremos la api History)




//==================================================
let boton = document.getElementById('send');
let user = document.querySelector('#user');
let password = document.querySelector('#password');


boton.addEventListener('click', enviar);

function enviar(){
    window.location.href = "segunda.html";

    localStorage.setItem('nombre', user.value);
    localStorage.setItem('password', password.value);

    let obuser = localStorage.getItem('nombre');
    



   
  //document.write(obuser)
  console.log(obuser)


  
}




