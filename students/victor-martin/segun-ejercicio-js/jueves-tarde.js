
// Crea un programa que dado un numero mediante promt y 
// usando el bucle for, te impirma por pantalla su tabla de 
// multiplicar de la siguiente forma:
// // Tabla de multiplicar de 5

const numMultiplicar = parseInt(prompt('Introduzca el num '));

for (let i=1;i<=10; i++){
    document.write(`${numMultiplicar} x  ${i}  = ${numMultiplicar * i} `);
    document.write(`<br>`);
            // document.write("<p>");
            // document.write(i + "x " + 1 + "= " + numMultiplicar * i);
            // document.write("</p>");

}


// Crear una página web que pinte por pantalla separado por comas las primeras 
// 100 potencias de dos. Ejemplo: 1,2,4,8,16,32,64,...

                            // const potencia = 
                            // for (let i = 2 ; i < 50; i++)
                            // {
                            //     document.write()
                            // }

    for (i=0; i<=100; i++) {
    document.write(`${2**i},`);
    document.write(`<br>`);
    }
    // const base = 3;
    // const exponente = 2;
    // let r = 1;

    //     for(let i = 0; i<100; i++){
    //         document.write('')
    //         r = r * base;
    //     }



    
    // Crea un programa que recorra los números del 1-100 e imprima por pantalla :
    //     Fizz, si es multiplo de 3.
    //      Buzz, si es múltiplo de 5.
    //       FizzBuzz, si es múltiplo de 3 y 5 a la vez.


                                    // for(let i = 0; i<exponente; i++){
                                    //     if ( le)
                                    //     else if
                                    // }

    // let unoCien = 100;
    for(let i=1; i<100; i++){
        if (i%3===0 && i%5===0)
        document.write(`<p>FizzBuzz</p>`);
        else if (i%3===0) {
        document.write(`<p>Fizz</p>`);
        }
        else if (i%5===0){ 
        document.write(`<p>Buzz</p>`);
        }
        else {
            document.write(`<p>${i}</p>`);
        }
    }


    // Escribir un programa que solicite al usuario el número de filas 
    // y el número de columnas. Dibujar una tabla con las filas 
    // y columnas introducidas, usar etiquetas html " th, tr, td.."

    let filas = parseInt(prompt('Introduce el numero de filas'));
    let columnas =  parseInt(prompt('Introduce el numero de columnas'));


    document.write(`<table>`);

        for (let i=1; i<=filas; i++){

            document.write(`<tr style="width:150px; height:150px; background-color:green;">`);
            for (let j=1; j<=columnas; j++){
                document.write(`<td style="width:150px; height:150px; background-color:white;">hEY</td>`);
            }
            document.write(`</tr>`);

    }

    document.write(`</table>`);
