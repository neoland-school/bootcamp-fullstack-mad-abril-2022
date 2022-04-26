/**Crear una aplicación que imprima 50 p's con el texto hello world loops */

for (let i = 0; i < 50; i++) {
    document.write(`<p>hello world loops</p>`)
}

/**Crear una aplicación que imprima 37 p's con los textos numerados de la siguiente manera:
1 hello world loop
2 hello world loop
3 hello world loop
...
37 hello world loop */

for (let i = 1; i < 38; i++) {
    document.write(`<p>${i} hello world loops</p>`)
}

/**Crear una aplicación que solicite al usuario un número. Pintar tantos círculos como haya dicho el usuario. 
 * Dentro del círculo se encontrará centrado el número del círculo que es. Los círculos empiezan por 1 */

const numCirculos = parseInt(prompt('Introduce un numero'))

for (let i = 1; i <= numCirculos; i++) {
    document.write(`<div class=circulos> ${i} </div>`)
}

