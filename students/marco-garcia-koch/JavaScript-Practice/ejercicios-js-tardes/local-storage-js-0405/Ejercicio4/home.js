
//4- Haremos una pagina web con una pagina home, la cual tendrá un form de login que tendrá tres, 
// input uno de nombre, uno de password y un input submit, cuando el usuario inicie sesión deberá , 
// mandarnos a otra pagina html de tipo usuario (para esto usaremos la api Location) donde nos aparecerá 
// nuestro nombre y un boton de cerrar sesion, cuando le demos al boton de cerrar sesion, 
// esta nos debe vaciar nuestro localstorage y mandarnos de regreso al la pagina
//  home( para esto usaremos la api History).

let username = document.getElementById('USER');

username.addEventListener('input', () => {
    localStorage.setItem('username', JSON.stringify(username.value));
})

let form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    localStorage.setItem('form', JSON.stringify(form));
    form.reset();
    location = "http://127.0.0.1:5501/Ejercicio4/user.html";
    
})

