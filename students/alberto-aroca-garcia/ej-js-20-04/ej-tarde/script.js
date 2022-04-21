//1 Crea  un programa que dado dos números mediante prompt imprima el mayor de ellos por pantalla.
// const a = parseFloat(prompt('Introduzca un número:'));
// const b = parseFloat(prompt('Introduzca otro número:'));

// document.write(`<p>El mayor es: ${a >= b ? a : b}</p>`);

//2 Mediante prompt introduce tu nombre y tu apellido e imprime por pantalla la ultima letra de tu nombre y la primera de tu apellido.

// const nam = prompt('Introduce tu nombre');
// const surn = prompt('Introduce tu apellido');

// let nombre = nam.length;
// let finalnombre = nam.charAt(nombre -1);
// let appellido = surn.charAt(0);

// document.write(`<p>La ultima letra de tu nombre es: ${finalnombre} y la primera de tu apellido es: ${appellido}</p>`);

//3 Crea un programa que imprima por pantalla  un saludo en el idioma que le indiques, los idiomas serán ingles, español y francés,  
//el idioma debe ser pasado por prompt y el saludo por default será en ingles.

// let saludo = (prompt('Elige un idioma entre: ingles, español y francés'));
// let saludos = saludo.toUpperCase();

// switch(saludos){
//     case 'INGLES': {
//         document.write('Hello, welcome to Neoland');
//         break;
//     }
//     case 'ESPAÑOL': {
//         document.write('Hola, bienvenido a Neoland');
//         break;
//     }
//     case 'FRANCES': {
//         document.write('Bonjour, bienvenue à Neoland');
//         break;
//     }
//     default: {
//         document.write('Introduce un idioma valido');
//     }
// }

//4 Mediante Un solo !!!!! prompt introduce tu nombre y tu apellido e imprime por pantalla la ultima letra de tu nombre y la primera de tu apellido.

// let namee = prompt('Introduce tu nombre y tu primer apellido');
// let x = namee.indexOf(' ');

// document.write(`<p>La ultima letra de tu nombre es ${namee.charAt(x-1)} y la primera letra de tu apellido es ${namee.charAt(x+1)}</p>`);


//5 Crea un programa donde incluyas una frase y este te diga si la frase incluye malas palabras, debes elegir 4 malas palabras
// que tu programa debe buscar y de encontrarlo va pintar en pantalla que la frase contiene malas palabras y de no ser así 
// pintara que la frase esta limpia, debe dar igual si introduces la frase con mayúsculas  o minisculas .

// let phrase = prompt('Introduce una frase');
// let newPhrase = phrase.toUpperCase();

// if((newPhrase.includes('HOSTIA')) || (newPhrase.includes('PUTA')) || (newPhrase.includes('CABRON')) || (newPhrase.includes('GILIPOLLAS')) ) {
//     document.write('<p>Tu frase contiene malas palabras, por favor vuelve a introducir una frase.</p>');
// } else{
//     document.write(`<p>${newPhrase}</p>`);
// }

//6 Crea un algoritmo que te imprima por pantalla, si tienes la edad suficiente para entrar a un local nocturno o no, 
// el algoritmo debe usar operador ternario.

// const age = parseFloat(prompt('Introduce tu edad: '));

// document.write(`<p>${age >= 18 ? 'Puedes pasar a un local nocturno' : 'No puedes pasar a un local nocturno'}</p>`);
    
//7 Crea un algoritmo para determinar si un año es bisiesto o no, para esto el año que se pase por prompt deberá 
//ser divisible entre 4 y no divisible entre 100, o ser divisible entre 400, del resto seria un año común, 
//para este algoritmo usaremos operador ternario, pinta por pantalla el resultado.

// let year = parseFloat(prompt('Introduce un año'));

// document.write((year%4 === 0 && year%100 !== 0) || year%400 === 0 ? 'El año '+year+' es bisiesto' : 'El año '+year+' no es bisiesto');

//8 La luz de trafico puede ser 'verde', "ambar"  o "rojo". Crea un algoritmo que dado la luz de tráfico actual por prompt, 
// pinte por pantalla  un semaforo  con la luz indicada y que indique si el coche puede pasar o debe parar.

// const userOption = prompt('Indique el estado del semáforo');
// let outputHTML;

// switch(userOption){
//     case 'verde': {
//         outputHTML = `
//             <div class="light"></div>
//             <div class="light"></div>
//             <div class="light"></div>
//         `;
//     }
//     case 'ambar' || 'naranja': {
//         outputHTML = `
//             <div class="light"></div>
//             <div class="light"></div>
//             <div class="light"></div>
//         `;
//     }
//     case 'rojo': {
//         outputHTML = `
//             <div class="light"></div>
//             <div class="light"></div>
//             <div class="light"></div>
//         `;
//     }
//     default:
// }



//9 Vamos a crear una calculadora que haga las operaciones básicas de suma, resta, multiplicación y división, 
// en este caso usaremos el condicional SWITCH,  el usuario debe ingrear mediante prompt el primer numero, 
// el operador y el segundo numero y el algoritmo pintara por pantalla los dos números el operador y  el resultado ejmp= "2 + 2 = 4".

// let calc = prompt('Introduce un número');
// calc = parseFloat(calc);

// switch(calc) {
//     case : {
//         /* CODIGO A EJECUTAR EN CASO QUE _var_a_comparar_ SEA IGUAL A _valor_ */
//         break;
//     }
//     case _valor_2_: {

//     }
//     ...

//     default: {
//         /* CODIGO A EJECUTAR SI _var_a_comparar_ NO ES IGUAL A NINGUNO DE LOS VALORES DEL CASE */
//     }
// }


//10 Creemos un algoritmo para saber si un estudiante puede optar o no a una beca, para eso debera pasar  
// mediante prompt un total de 7 calificaciones, y se deberá imprimir por pantalla la cantidad de asignaturas aprobadas, 
// la nota media y si puede optar o no a la beca, para saber si un estudiante puede optar a la beca deberá tener 
// el mínimo de asignaturas aprobadas( solo puede tener dos reprobadas,  usar operador de asignación para esta operación), 
// y una nota media superior a 6, PD:" la nota mínima para aprobar una asignatura  es de 5".


// let passedSubjects = 0;

// const subjectOne = parseFloat(prompt('Primera nota'));
// passedSubjects += subjectOne>=5 ? 1 : 0;

// const subjectTwo = parseFloat(prompt('Segunda nota'));
// passedSubjects += subjectTwo>=5 ? 1 : 0;

// const subjectThree = parseFloat(prompt('Nota'));
// passedSubjects += subjectThree>=5 ? 1 : 0;

// const subjectFour = parseFloat(prompt('Nota'));
// passedSubjects += subjectFour>=5 ? 1 : 0;

// const subjectFive = parseFloat(prompt('Nota'));
// passedSubjects += subjectFive>=5 ? 1 : 0;

// const subjectSix = parseFloat(prompt('Nota'));
// passedSubjects += subjectSix>=5 ? 1 : 0;

// const subjectSeven = parseFloat(prompt('Nota'));
// passedSubjects += subjectThree>=5 ? 1 : 0;

// const averageScore =  (subjectOne + subjectTwo + subjectThree + subjectFour + subjectFive + subjectSix + subjectSeven) / 7;
// const hasGrant = passedSubjects >=5 && averageScore > 6;

// document.write(`<p>${hasGrant ? 'Tu beca ha sido concedida' : 'No cumples los requisitos para la beca'}</p>`);

