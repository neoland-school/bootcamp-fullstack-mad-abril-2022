let usuario = localStorage.nombre;

const target_div3 = document.getElementById("usuario");
console.log(target_div3);
let text3 = document.createElement('p');
text3.textContent = `Hola ${usuario} !`;
target_div3.appendChild(text3);

document.getElementById('logoff').onclick = function (){ 
    localStorage.nombre = '';
    alert("La sesión se cerrará");
    window.location.href = 'index.html';
};