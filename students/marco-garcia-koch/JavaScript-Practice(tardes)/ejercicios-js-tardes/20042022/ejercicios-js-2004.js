
// 1- Crea  un programa que dado dos números mediante prompt  imprima el mayor de ellos por pantalla.

const numberOne = prompt('Introduzca el primer número');
const numberTwo = prompt('Introduzca el segundo número');

if (numberOne >= numberTwo) {
    document.write(`<p>El número mas grande es: ${numberOne}</p>`);
} else {
    document.write(`<p>El número mas grande es: ${numberTwo}</p>`);
}


// 2- Mediante prompt introduce tu nombre y tu apellido e imprime por pantalla la ultima letra de tu nombre 
// y la primera de tu apellido.

const nameAndSurname = prompt('Escribe tu nombre y apellidos');
const spaceIndex = nameAndSurname.indexOf(' ');

document.write(`<p>La última letra de mi nombre es la '${nameAndSurname.charAt(spaceIndex-1)}' y la primera letra del
                del apellido es la '${nameAndSurname.charAt(spaceIndex+1)}'.</p>`);


// 3- Crea un programa que imprima por pantalla un saludo en el idioma que le indiques, 
// los idiomas serán ingles, español y francés, el idioma debe ser pasado por prompt 
// y el saludo por default será en ingles.

const language = prompt(`Elija el idioma en el que quieres el saludo:
                            - Inglés
                            - Español
                            - Francés`);

switch (language) {
    case 'Inglés': {
        document.write(`<p>Hello, how are you?</p>`);
        break;
    }

    case 'Español': {
        document.write(`<p>Hola, como estás?</p>`);
        break;
    }

    case 'Francés': {
        document.write(`<p>Bonjour, comment allez-vous?</p>`);
        break;
    }

    default: {
        document.write(`<p>Hello, how are you?</p>`)
    }
}

// 4- Crea un programa donde incluyas una frase y este te diga si la frase incluye malas palabras, 
// debes elegir 4 malas palabras que tu programa debe buscar y de encontrarlo va pintar en pantalla 
// que la frase contiene malas palabras y de no ser así pintara que la frase esta limpia, debe dar 
// igual si introduces la frase con mayúsculas  o minisculas .

const badWordOne = 'payaso';
const badWordTwo = 'subnormal';
const badWordThree = 'tonto';
const badWordFour = 'imbecil';

const userPhrase = prompt('Escriba una frase');

userPhrase.toLocaleLowerCase();

if (userPhrase.includes(badWordOne)|| userPhrase.includes(badWordTwo) || userPhrase.includes(badWordThree) || userPhrase.includes(badWordFour)) {
    document.write(`<p>La frase introducida contiene malas palabras</p>`);
} else {
    document.write(`<p>La frase introducida está limpia`);
}

// 5- Crea un algoritmo que te imprima por pantalla, si tienes la edad suficiente para entrar 
// a un local nocturno o no, el algoritmo debe usar operador ternario.

const age = prompt('Escribe tu edad');

document.write(`<p>${age >= 18 ? 'Tienes la edad, pasa anda' : 'No tienes edad para entrar mostri, a tu casa'}</p>`);


// 6- Crea un algoritmo para determinar si un año es bisiesto o no, para esto el año que se pase por prompt 
// deberá ser divisible entre 4 y no divisible entre 100, o ser divisible entre 400, 
// del resto seria un año común, para este algoritmo usaremos operador ternario, 
// pinta por pantalla el resultado.

const year = prompt('Escriba el año que quieres saber si es bisiesto o no');

document.write(`<p>El año ${year} ${(year%4===0 && year%100!==0) || (year%400===0) ? 
                'es bisiesto' : 'no es bisiesto'}</p>`);


// 7- La luz de trafico puede ser 'verde',   "ambar"  o "rojo". 
// Crea un algoritmo que dado la luz de tráfico actual por prompt, pinte por pantalla  
// un semaforo  con la luz indicada y que indique si el coche puede pasar o debe parlet

    const light = prompt(`Indica la luz del semáforo:
                            -'red'
                            -'orange'
                            -'green'`);

    document.write(`<section class="background">
                        <div class="trafic-light-container">
                            <div class="trafic-light-color ${light === 'red' ? 'red' : ''}"></div>
                            <div class="trafic-light-color ${light === 'orange' ? 'orange' : ''}"></div>
                            <div class="trafic-light-color ${light === 'green' ? 'green' : ''}"></div>
                        </div>
                        <h1 class="text">${light === 'red' ? 'STOP' : 'GO'}</h1>
                    </section>`);


// 8- Vamos a crear una calculadora que haga las operaciones básicas de suma, resta, multiplicación y división, 
// en este caso usaremos el condicional SWITCH,  el usuario debe ingrear mediante prompt el primer numero, 
// el operador y el segundo numero y el algoritmo pintara por pantalla los dos números el operador y  
// el resultado ejmp= "2 + 2 = 4".

let firstNumber = prompt('Introduzca el primer número');
let operator = prompt('Introduzca el operador con el que quiere hacer la operación');
let secondNumber = prompt('Introduzca el segundo número');
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

switch (operator) {
    case '+': {
        document.write(`${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`);
        break;
    }

    case '-': {
        document.write(`${firstNumber} - ${secondNumber} = ${firstNumber-secondNumber}`);
        break;
    }

    case 'x': {
        document.write(`${firstNumber} X ${secondNumber} = ${firstNumber*secondNumber}`);
        break;
    }

    case '/': {
        document.write(`${firstNumber} / ${secondNumber} = ${firstNumber/secondNumber}`);
        break;
    }

    default : {
        document.write(`Los datos son incorrectos`);
    }
}


// 9 - Creemos un algoritmo para saber si un estudiante puede optar o no a una beca, 
// para eso debera pasar  mediante prompt un total de 7 calificaciones, 
// y se deberá imprimir por pantalla la cantidad de asignaturas aprobadas, 
// la nota media y si puede optar o no a la beca, para saber si un estudiante puede optar a la beca 
// deberá tener el mínimo de asignaturas aprobadas( solo puede tener dos reprobadas,  
// usar operador de asignación para esta operación), y una nota media superior a 6, 
// PD:" la nota mínima para aprobar una asignatura  es de 5".

let scoreOne = parseFloat(prompt('Introduzca la nota 1'));
let scoreTwo = parseFloat(prompt('Introduzca la nota 2'));
let scoreThree = parseFloat(prompt('Introduzca la nota 3'));
let scoreFour = parseFloat(prompt('Introduzca la nota 4'));
let scoreFive = parseFloat(prompt('Introduzca la nota 5'));
let scoreSix = parseFloat(prompt('Introduzca la nota 6'));
let scoreSeven = parseFloat(prompt('Introduzca la nota 7'));

const averageScore = (scoreOne+scoreTwo+scoreThree+scoreFour+scoreFive+scoreSix+scoreSeven)/7;

let passedSubjects = 0;
passedSubjects += scoreOne >= 5 ? 1 : 0;
passedSubjects += scoreTwo >= 5 ? 1 : 0;
passedSubjects += scoreThree >= 5 ? 1 : 0;
passedSubjects += scoreFour >= 5 ? 1 : 0;
passedSubjects += scoreFive >= 5 ? 1 : 0;
passedSubjects += scoreSix >= 5 ? 1 : 0;
passedSubjects += scoreSeven >= 5 ? 1 : 0;

const beca = (passedSubjects >= 5) && (averageScore > 6);

document.write(`<p>La cantidad de asignaturas aprobadas es de ${passedSubjects}. La nota media es ${averageScore}. 
                El alumno ${beca ? 'puede optar a la beca' : 'no puede optar a la beca'}`);