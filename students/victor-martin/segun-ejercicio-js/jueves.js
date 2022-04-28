
// Crear una aplicación que imprima 50 p's 
// con el texto hello world loops

// const sayHello ="hello word loops ";
// const repetirCadena = sayHello.repeat(50); // repetir 20 veces
// document.write(repetirCadena);

 for (let i = 0 ; i < 50; i++)
 {
     document.write(`<p>hello word loops<p/>`)
 }

// Crear una aplicación que imprima 37 p's 
// con los textos numerados de la siguiente manera:

document.write(`<br>`)
const sayHello ="hello word loops "

for (let i = 1; i < 38; i++)
{
    document.write(`${i}` + ` ${sayHello}`);
}


// Crear una aplicación que solicite al usuario un número. 
// Pintar tantos círculos como haya dicho el usuario. 
// Dentro del círculo se encontrará centrado el número del 
// círculo que es. Los círculos empiezan por 1 


const n = parseInt(prompt('Introduzca un número')); 
for (let i = 1; i<=n; i++) 
{
    document.write(`<div class="circle">
                        ${i}
                        </div>`);
}


