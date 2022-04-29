/* Crea  un programa que dado dos números mediante prompt  
imprima el mayor de ellos por pantalla.*/


let numeroUno = parseFloat(prompt('Introduzca un número'));
let numeroDos = parseFloat(prompt('Introduzca otro número'));
if(numeroUno >= numeroDos)
	{
        //imprime numero mayor
	document.write("El numero mayor es: " + numeroUno + "  el intruducido en primer lugar ");
	}
	else
	{
       //imprime numero mayor
	document.write("El Numero mayor es : " + numeroDos + "  el intruducido en segundo lugar ");
	}
	

    document.write('<br>');
    // Mediante prompt introduce tu nombre y tu apellido e imprime por pantalla la ultima letra de tu 
    // nombre y la primera de tu apellido.

let nombreUsuario = prompt('Introduzca su nombre');
let apellidoUsuario = prompt('Introduzca su apellido');

document.write(nombreUsuario.charAt(0));
document.write('<br>');
document.write(apellidoUsuario.charAt(5));


// document.write(nombreUsuario.index(0));
// document.write('<br>');
// document.write(apellidoUsuario.index(5));


// Crea un programa que imprima por pantalla  un saludo en el idioma que le indiques, 
// los idiomas serán ingles, español y francés,  
// el idioma debe ser pasado por prompt y el saludo por default será en ingles.


let saludoIdioma = prompt('Introduzca el idioma');
document.write(`<p>${saludoIdioma}</p>`)

if(saludoIdioma english)
	{
        //imprime saludo english Hello
        document.write("Hello " + saludoIdioma);
	}
    else if 	{
        //imprime saludo frances Salut
        document.write("Salut" + saludoIdioma);
    
    } 
    else 
    //imprime saludo italiano salute
    document.write("Salute : " + saludoIdioma);
    }

        
    

// if(zCondicion>0 && zCondicion<=10){
// 	document.write("caso 1")
// }else if(zCondicion>10 && zCondicion<40){
// 	document.write("caso 2")
// }else{
// 	document.write("caso 3");
// }


// switch (expresión) {
//     case valor1:
//       //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
//       [break;]
//     case valor2:
//       //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
//       [break;]
//     ...
//     case valorN:
//       //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
//       [break;]
//     default:
//       //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//       [break;]
//   }