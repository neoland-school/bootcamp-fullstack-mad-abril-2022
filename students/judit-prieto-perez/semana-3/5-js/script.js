

/*Mediante el uso del bucle  while imprime 40 p's con los textos numerados de la siguiente manera:*/

let num = 0

while (num <39 ) {
    num ++;
    document.write(`<p>${num+1} Hello world</p>`);
}


/*2. Mediante el uso de while crea 100 divs de color #F47732. Modificar el ejercicio para que los divs 
pares se sean de  color #F47732 y los impares #1148F3. Modificar para que  se muestren sobre un contenedor flex.

1. Crear 100 divs

- Repetir un div 100 veces --> bucle while hasta 100. */



let cunt = 0

while () {
    count++;
    document.write(`<div class="par"> 1div${count+1} </div>`)
}
/*
- Cómo se cuáles son pares --> si el resto es 0. Osea si n%2 ===0
- Cómo sé cuáles son impares --> si el resto NO es 0. Osea si n%2 != 0

- Si es PAR --> color ROSA */

let count=0;

while (count < 100){
    if (count%2 === 0) {
        document.write(`<div class="par"> 1div${count} </div>`)
    }else{
        document.write(`<div class="impar"> 1div${count} </div>`)
    }
count++;
}

/*3.Solicitar el número al usuario un numero por prompt, 
e imprime en un P  el número al revés.

1. pide un numero --> prompt

2- numero al revés. --> recorrer el numero --> bucle?

- Puedo saber lo que mide con .lenght.
puedo 

-str
en cada vuelta le añades la ultima posicion
replace con el de la ultima?
*/



let n= parseInt(prompt('Introduce un numero'));
let num1 =0;

for(let i= num.lenght; i>1){
}num.charAt

document.write(`${num}`)




/* Un for para recorrer el string.
una variable vacia para que le puedas ir agregando los carc inveros
charat para indicar con un string la letra*/

