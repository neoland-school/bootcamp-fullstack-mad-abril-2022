/**Crea  un programa que dado dos números mediante prompt  imprima el mayor de ellos por pantalla. */

const numOne = parseFloat(prompt('Introduce primero numero'));
const numTwo = parseFloat(prompt('Introduce segundo numero'));

document.write(`<p>El numero mayor es: ${numOne>=numTwo?numOne:numTwo} </p>`);

/**Mediante prompt introduce tu nombre y tu apellido e imprime por pantalla la ultima letra de tu nombre y la primera de tu apellido.*/

const nam = prompt('Introduce tu nombre');
const surName = prompt('Introduce tu apellido');

document.write(`<p>La ultima letra de tu nombre es: ${nam.charAt(nam.length-1)} </p>`);
document.write(`<p>La primera letra de tu apellido es: ${surName.charAt(0)} </p>`)

/** Crea un programa que imprima por pantalla  un saludo en el idioma que le indiques,
 *  los idiomas serán ingles, español y francés,  el idioma debe ser pasado por prompt y el saludo por default será en ingles. */

let lang = prompt('Enter the language');
let resp;

if(lang==='español'){
    resp = 'Buenas tardes';
} else if(lang==='frances'){
    resp = 'Bonsoir';
} else if(lang==='ingles') {
    resp = 'Good evening';
} else {
    resp = 'we do not have this language registered';
}

document.write(resp)

/** Mediante Un solo !!!!! prompt introduce tu nombre y tu apellido e 
 * imprime por pantalla la ultima letra de tu nombre y la primera de tu apellido.*/

let fullName = prompt('Introduce nombre y apellido')
let position = fullName.indexOf(' ')

document.write(`<p> La posicion del espacio entre nombre y apellido es ${position}</p>`);
document.write(`<p> Entonces la ultima letra del nombre seria ${fullName.charAt(position-1)} y la primera letra del apellido seria ${fullName.charAt(position+1)}</p>`)


/** Crea un programa donde incluyas una frase y este te diga si la frase incluye malas palabras, 
 * debes elegir 4 malas palabras que tu programa debe buscar y 
 * de encontrarlo va pintar en pantalla que la frase contiene malas palabras y de no ser así pintara que la frase esta limpia,
 *  debe dar igual si introduces la frase con mayúsculas  o minisculas .*/

let frase = prompt('Introduce una frase');
let malasPalabras;

if(frase==='coño'){
    malasPalabras='Esta frase contiene malas palabras'; 
} else if(frase==='mierda'){
    malasPalabras='Esta frase contiene malas palabras'; 
} else if(fraseMayus==='carajo') {
    malasPalabras='Esta frase contiene malas palabras'; 
} else if(fraseMayus==='ostias'){
    malasPalabras='Esta frase contiene malas palabras'; 
} else {
    frase;
}

document.write(malasPalabras)

/** Crea un algoritmo que te imprima por pantalla,  si tienes la edad suficiente para entrar a un local nocturno o no, 
 * el algoritmo debe usar operador ternario. */

let edad = parseFloat(prompt('Introduce tu edad'));
let edadSuf = 'Tienes edad suficiente para entrar a un local nocturno'
let edadNoSuf = 'No tienes la edad suficiente para entrar a un local nocturno'

document.write(`<p>${edad>=18?edadSuf:edadNoSuf}</p>`)


/** Crea un algoritmo para determinar si un año es bisiesto o no, 
 * para esto el año que se pase por prompt deberá ser divisible entre 4 y no divisible entre 100, o ser divisible entre 400,
 *  del resto seria un año común, para este algoritmo usaremos operador ternario, pinta por pantalla el resultado. */

let anio = parseFloat(prompt('Introduce el año'));
let anioBisiesto = (anio%4===0 && anio%100!==0) || anio%400===0;

document.write(`<p>Este ${anio} es bisiesto : ${anioBisiesto}</p>`)

/** La luz de trafico puede ser 'verde',   "ambar"  o "rojo". Crea un algoritmo que dado la luz de tráfico actual por prompt
 * , pinte por pantalla  un semaforo  con la luz indicada y que indique si el coche puede pasar o debe parar. */

 const semaforo = prompt('Indique el estado del semáforo');

 switch (semaforo) {
     case 'verde': {
         document.write(`
             <div class="luz"></div>
             <div class="luz"></div>
             <div class="luz" style="background-color:green;"></div>
         `);
         break;
     }
     case 'ambar': {
         document.write( `
             <div class="luz"></div>
             <div class="luz" style="background-color:orange;"></div>
             <div class="luz" ></div>
         `);
         break;
     }
     case 'rojo': {
         document.write(`
             <div class="luz" style="background-color:red;"></div>
             <div class="luz"></div>
             <div class="luz" ></div>
         `);
         break;
     }
     default: {
         document.write(`
             <div class="luz" style="background-color:red;"></div>
             <div class="luz"></div>
             <div class="luz" ></div>
         `);
     }
 }

/** Vamos a crear una calculadora que haga las operaciones básicas de suma, resta, multiplicación y división, en este caso
 *  usaremos el condicional SWITCH,  el usuario debe ingrear mediante prompt el primer numero, el operador y el segundo numero
 *  y el algoritmo pintara por pantalla los dos números el operador y  el resultado ejmp= "2 + 2 = 4".*/

let oneNum = parseFloat(prompt('Introduce el primer numero'));
let signo = prompt('Introduce el signo + - * /');
let secNum = parseFloat(prompt('Introduce el segundo numero'));

let resultado;

switch(signo) {

    case '+':
        resultado=oneNum+secNum;
        break;
    
    case '-':
        if(oneNum>secNum) {
            resultado=oneNum-secNum;
        } else {
            resultado=secNum-oneNum;
        }
        break;
    
    case '*':
        resultado=oneNum*secNum;
        break;

    case '/':
        if(oneNum>secNum){
            resultado=oneNum/secNum;
        } else {
            resultado=secNum/oneNum
        }
        break

}

document.write(`${oneNum} ${signo} ${secNum} = ${resultado}`)


/**Creemos un algoritmo para saber si un estudiante puede optar o no a una beca, 
 * para eso debera pasar  mediante prompt un total de 7 calificaciones, 
 * y se deberá imprimir por pantalla la cantidad de asignaturas aprobadas, 
 * la nota media y si puede optar o no a la beca, 
 * para saber si un estudiante puede optar a la beca deberá tener el mínimo de asignaturas aprobadas
 * ( solo puede tener dos reprobadas,  usar operador de asignación para esta operación), y una nota media superior a 6,
 *  PD:" la nota mínima para aprobar una asignatura  es de 5". */

let passedScores = 0;

const scoreOne = parseFloat(prompt('Nota'));
passedScores += scoreOne>=5 ? 1 : 0;

const scoreTwo = parseFloat(prompt('Nota'));
passedScores += scoreTwo>=5 ? 1 : 0;

const scoreThree = parseFloat(prompt('Nota'));
passedScores += scoreThree>=5 ? 1 : 0;

const scoreFour = parseFloat(prompt('Nota'));
passedScores += scoreFour>=5 ? 1 : 0;

const scoreFive = parseFloat(prompt('Nota'));
passedScores += scoreFive>=5 ? 1 : 0;

const scoreSix = parseFloat(prompt('Nota'));
passedScores += scoreSix>=5 ? 1 : 0;

const scoreSeven = parseFloat(prompt('Nota'));
passedScores += scoreThree>=5 ? 1 : 0;

const averageScore =  (scoreOne+scoreTwo +scoreThree + scoreFour + scoreFive + scoreSix + scoreSeven) / 7;
const hasGrant = passedScores >=5 && averageScore > 6;

document.write(`<p>${hasGrant ? 'Tu beca ha sido concedida' : 'No cumples los requisitos para la beca'}</p>`);
