// 1.Guarda un string hola mundo en el local storage.


localStorage.setItem('strings','hola mundo');
// localStorage.setItem('hola mundo', JSON.stringify(hola, mundo));

// 2. Guarda un objeto con dos propiedades tu nombre y tu apellido en el 
// session storage, recuperalo y pintalo por pantalla.

            // const testObject = { nombre:'Victor',  apellidos: 'Martin'};
            // sessionStorage.setItem('testObject', JSON.stringify(testObject));
            // let printObject = SON.parse(localStorage.getItem('printObject'));
            // let text = document.createElement("p");
            // document.body.appendChild(text);


    const userData = {
        nombre: "Victor",
        apellido: "Martin"
    }

sessionStorage.setItem('userData', JSON.stringify(userData));

const user = JSON.parse(sessionStorage.getItem(userData));

// console.log(user);

const text = document.createElement("p");
text.textContent = `${userData.nombre} ${userData.apellido}`;
// console.log(text);
document.body.appendChild(text);



            // let object = sessionStorage.getItem('datos');
            // let obje = JSON.parse(object);

            // let element = document.createElement("p");
            // // let print = document.createTextNode(`${obje.nombre} ${obje.apellido}`)
            // element.textContent = datos.nombre
            // li1.textContent = "BUENAS";
            // body.appenChild(element);
            // document.body.appendChild(element);




// 3 .Crea una pagina html  con dos input text , escribe cualquier dato recupéra los 
// input en js  y mánda un value al localstorage y otro al session storage.


/*
1- crea dos input text en hmtl
2- escribe datos 
3- recupera en javascript 
4  obtener el valor de los input
5 -manda un value al localstorage
6- manda el otro value al sessionstorage
*/

            // const recoverText = document.getElementById('texto1');
            // localStorage.setItem('texto1');
            // const recover = JSON.parse(localStorage.getItem('texto1'));

const inputLocal = document.getElementById("local");
inputLocal.addEventListener('input', () => {
    let localValue = inputLocal.value;
    // console.log(localValue);
    localStorage.setItem('input1', localValue);
})

const inputSession = document.getElementById("session");
inputSession.addEventListener('input', () => {
    let sessionValue = inputSession.value;
    // console.log(sessionValue);
    sessionStorage.setItem('input2', sessionValue);
})


// 4. Haremos una pagina web con una pagina home, la cual tendrá un form de login 
// que tendrá tres, input uno de nombre, uno de password y un input submit, 
// cuando el usuario inicie sesión deberá , mandarnos a otra pagina html de 
// tipo usuario (para esto usaremos la api Location) donde nos aparecerá 
// nuestro nombre y un boton de cerrar sesion, cuando le demos al boton 
// de cerrar sesion, esta nos debe vaciar nuestro localstorage y mandarnos 
// de regreso al la pagina home( para esto usaremos la api History).

/*
-form de login
-3 inputs
-cuando el usuario inicie sesion nos manda a una url (usaremos la api location)
-donde nos aparece nuestro nombre y un boton de cerrar sesion, cuando
-cerremos sesion nos debe vaciar nuestro localstorage y mandarnos a la url de home (api history)
*/

const submitLogin  = document.getElementById("local");
submitLogin.addEventListener()