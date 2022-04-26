/*Crear una aplicación que imprima 50 p's con el texto hello world loops*/

for (let i=0; i<50; i++){
    document.write(`<p>${i+1}</p>`)
}

/*Crear una aplicación que imprima 37 p's con los textos numerados de la siguiente manera:*/

for (let i=0; i<37; i++){
    document.write(`<p>${i+1} Hello World loop</p>`)
}


/*3. Crear una aplicación que solicite al usuario un número. Pintar tantos círculos como haya dicho el
usuario. 
Dentro del círculo se encontrará centrado el número del círculo que es. Los círculos empiezan por 1*/


let num = parseInt(prompt('introduce el numero de circulos'));
for (let i=1; i<=num; i++) {
    document.write(`<div class="circle">${i}</div>`)
}