
/*
1.Crear una aplicación que imprima 50 p's con el texto hello world loops
*/ 
let hello = 50;

for(let i=0; i<50; i++){
    document.write(`<p> hello world </p>`);
};

/*2.Crear una aplicación que imprima 37 p's con los textos numerados de la siguiente manera:
1 hello world loop
2 hello world loop
3 hello world loop
...

37 hello world loop
*/


for (let i=0; i<37;i++) {
    document.write(`<p>${i+1} hello world loop </p>`);
};



/*
3. Crear una aplicación que solicite al usuario un número. 
Pintar tantos círculos como haya dicho el usuario. 
Dentro del círculo se encontrará centrado el número del círculo que es. 
Los círculos empiezan por 1
*/

//prompt devuelve string, pues uso paseInt
let input = parseInt(prompt('Introduce un número'));

for(let i=1; i < input; i++){
    document.write(`<div class="circle">${i}</div>`);
};