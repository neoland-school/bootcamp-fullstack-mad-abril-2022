const a = 15;
const b = 34;

const c = a + b;
const d = a - b;
const e = a * b;
const f = a ** b;
const g = a % b;

document.write(`<p>${c}</p>`); ;

document.write(`<p>${d}</p>`); 

document.write(`<p>${e}</p>`);  

document.write(`<p>${f}</p>`);  

document.write(`<p>${g}</p>`);  

/* operaciones suma , potencia, resta, multiplicacion*/

let parImpar = "Si la variable a es:  " + (a%2===0 ? "Par" : "Impar");
document.write(`<p>${parImpar}</p>`); 

/* operador ternario para definir si es par o impar
osea si el resto dividido entre 2 da 0 es par si da 1 es impar
Con document.write imprimimos dentro de una etiqueta pa con el
acento al revés : ` `*/

let mostrar = "Entonces a tiene el color:  " + (a%2===0 ? `<div style="width:50px; height:50px; background-color:red;"> </div>` : `<div style="width:50px; height:50px; background-color:green;"> </div>`);
document.write(`<div>${mostrar}</div>`);

// let varDiv = `<div style="width:50px; height:50px; background-color:red;"> </div>`;
/**/


