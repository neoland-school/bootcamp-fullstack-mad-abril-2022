/*
1.Guarda un string hola mundo en el local storage.
*/

localStorage.setItem('s', 'Hola Mundo');



//almaceno elemento con key y en el parámetro con item
//localStorage.setItem("key", item);
//ejp:
//localStorage.setItem("userID", 11);




/*
2.Guarda un objeto con dos propiedades tu nombre y tu apellido en el session storage, 
recuperalo y pintalo por pantalla.
*/

/* Opción 1 ->  sessionStorage.setItem(name, content) */
//sessionStorage.setItem('Nombre', 'Ana')
//sessionStorage.setItem('Apellido', 'Rodriguez')

 /* Opción 2 ->sessionStorage.name = content */
//sessionStorage.Nombre = 'Ana'
//sessionStorage.Apellido = 'Rodriguez'


// Opción 1 -> localStorage.getItem(name, content)
// Opción 2 -> localStorage.name


/* Esta manera */

const user_1 = {name: 'Jetzabel', surn: 'Cisneros'};

sessionStorage.setItem('Nombre',JSON.stringify(user_1.name));
localStorage.setItem('Apellido',JSON.stringify(user_1.surn));

// Obtenemos los datos y los almacenamos en variables
let first_nombre = sessionStorage.Nombre;
let last_name  = localStorage.Apellido;

//const user = JSON.parse(sessionStorage.setItem('name', 'name'));
//console.log(user)

const target_div = document.getElementById("ex2");
let text1 = document.createElement('p');
text1.textContent =  `${first_nombre} ${last_name}`;
//console.log(text)
target_div.appendChild(text1);


///
//Fuente: https://www.iteramos.com/pregunta/76849/guardar-objetos-de-javascript-en-sessionstorage
///


/*3.Crea una pagina html  con dos input text , escribe cualquier dato recupéra los input en js 
y mánda un value al localstorage y otro al session storage.
*/

// <input> <p>Nombre: <input type="text" id= "nombre_1" name="nombre" >

//         <p>Apellido: <input type="text" id= "apellido_1" name="apellido" >
// </input>

// Opción 1 ->  sessionStorage.setItem(name, content)
//let nombre_propio = document.getElementById("nombre_1").innerHTML;
//document.write(nombre_propio);

let input_nombre = document.getElementById("nombre_1");
let input_apellido = document.getElementById("apellido_1");
let nombre_propio = '';
let apellido = '';

input_nombre.addEventListener("keydown", () => {  

    let nombre_propio = input_nombre.value;
    sessionStorage.setItem('nombre', nombre_propio);
    let firstname = sessionStorage.nombre;
    const target_div2 = document.getElementById("ex3");
    let text2 = document.createElement('p');
    text2.textContent = `${firstname}`;

    target_div2.appendChild(text2);

});

input_apellido.addEventListener("keydown", () => {  

    let apellido = input_apellido.value;
    localStorage.setItem('apellido', apellido);
    let lastname  = localStorage.apellido;
    const target_div2 = document.getElementById("ex3");
    let text2 = document.createElement('p');
    text2.textContent = `${lastname}`;

    target_div2.appendChild(text2);

});







/* EXERCISE 4. in demo2.js & index2.html*/
     
/*
4.Haremos una pagina web con una pagina home, la cual tendrá un form de login que tendrá tres inputs,
uno de nombre, uno de password y un input submit,
cuando el usuario inicie sesión deberá mandarnos a otra pagina html de tipo usuario
(para esto usaremos la api Location) donde nos aparecerá nuestro nombre y un boton de cerrar sesion, 
cuando le demos al boton de cerrar sesion, esta nos 
debe vaciar nuestro localstorage y
mandarnos de regreso al la pagina home( para esto usaremos la api History).
 */
//document.location

// objeto con usuario / passw correcto
var usuarios = {usuario:"jetz",passw:"hola"};

// función enlazada al click
document.getElementById('enter').onclick = function (){ 
  
  // obtener valores de los inputs del form
  var un = document.getElementById('usuario').value;
  var pw = document.getElementById('passw').value;
  // comparar valores con el objeto usuarios
  if((un == usuarios.usuario) && (pw == usuarios.passw)){
      // acceso concedido 
      console.log("authed");
      localStorage.setItem("nombre", usuarios.usuario);
      //console.log(usuarios.usuario);
      window.location.href = 'user_home.html';
  } else {
      console.log("denied!");
      alert("Usuario / Contraseña Incorrectos");
  }
  //authenticate() ? window.location.href = 'https://www.google.com' : alert("Usuario / Contraseña Incorrectos");
};


