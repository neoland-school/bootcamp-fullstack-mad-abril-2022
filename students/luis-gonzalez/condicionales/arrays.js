//Inicio con Arrays 25-04-22.

/*
//Crea un array de palabras e imprime por pantalla la segunda posicion.
let arreglo =['tomate', 'carro', 'trabajo', 'jugo'];
document.write(arreglo);

document.write(`<br>===============================<br>`)
*/

/*
// Crea un array de números por prompt e imprimelo por pantalla.(easy).
//Introduce un numero por prompt y crea un array de números con la longitud indicada de números  e imprímelo por pantalla.(easy).
 for(let i =0; i<=9; i++){
     let pr =prompt(`Introduce un número:`);
     let lista = [];
     lista.push(pr);
    
     document.write(`${[lista]} , `);
     }

     document.write(`<br>===============================<br>`)
*/

/*
//Crea un array de géneros musicales [rock, pop, country], rock debera ser un array de de subgeneros que contenga [punk, metal, hardcore], Ahora crea un array de banda  que contenga un string ejmp "metallica" mas  el array de géneros musicales y con ese array de banda muestra por pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy).
let rock=['punk', 'metal', 'hardcore'];
let generos=[ rock , 'pop', 'country']
let bandas = ['metlica', 'zapato3', 'nirvana', generos];

//document.write(`${bandas[0]}, ${generos[rock[1]]} `);
document.write(`${bandas[0]}, ${generos[0][1]}`);

document.write(`<br>===============================<br>`)(Math.random()*100)
*/

/*
// Usa el ejercicio 1 para crear un  array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario.

 let jota =0;
for(let i=1; i<=5;i++){
    let numer = parseInt(prompt(`Dame un número`));
    let conju =[];
    conju.push(numer); 

    if (numer>=10){
         jota++;
    }
    
    }
    if(jota>0){
        document.write('true')
            }else{
                document.write('false');
}

*/
/*
// Introduce una palabra por prompt  y crea   un array palabras,  y imprime  true o false si palabra prompt  existe o no dentro del array.

for(let i=0; i<3; i++){
let parole = prompt(`Ingresa una palabra: `);
let caja =[];
document.write(caja[i]);
}








