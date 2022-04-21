//1. Crear una aplicación que imprima 50 p's con el texto hello world loops

// for(const i=0; i<=49; i++) {

//     document.write(<p>Hello world loops</p>);
// }

//2. Crear una aplicación que imprima 37 p's con los textos numerados de la siguiente manera:
// 1 hello world loop
// 2 hello world loop
// 3 hello world loop
// ...
// 37 hello world loop

// for(let i=0; i<= 36; i++){

//     document.write(`<p>${i}. hello world loop</p>`);
// }

//3. Crear una aplicación que solicite al usuario un número. Pintar tantos círculos como haya dicho el usuario.
// Dentro del círculo se encontrará centrado el número del círculo que es. Los círculos empiezan por 1

let a = parseInt(prompt('Introduce un número'));

for(let i=1; i<=a; i++){
    document.write(`
        <div class="circle">
            ${i}
        </div>`);
}
