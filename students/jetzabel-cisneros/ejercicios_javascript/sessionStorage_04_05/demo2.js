     
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

// objeto con usuario / pass correcto
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


