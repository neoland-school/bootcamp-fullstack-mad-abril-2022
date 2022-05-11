//1. Crea un programa que dado dos números mediante prompt imprima el mayor de ellos por pantalla.

let result = Math.max(10,50);   
document.write(result); 


//2.Mediante prompt introduce tu nombre y tu apellido e imprime por pantalla la ultima letra de tu nombre y la primera de tu apellido.

let nombre = (prompt("Introduzca su nombre"));
let apellido = (prompt("Introduzca su apellido"));

// 
document.write(`La ultima letra de su nombre es ${nombre.charAt(nombre.length-1)}`);
document.write(`La primera letra de su apellido es ${apellido[0]}`); // no hace falta el length.



/*
3. Crea un programa que imprima por pantalla un saludo en el idioma que le indiques, 
los idiomas serán ingles, español y francés. El idioma debe ser pasado por prompt y el saludo por default será en ingles.
*/

let idioma = prompt('Please input your preferred language: english, spanish, french');

if (idioma == "spanish") { // true
    document.write('Hola amigo bienvenido');
  } else if (idioma == "english") {
    document.write('Hello Friend, Wellcome');
  } else if(idioma == "french") {
    document.write('Bonjour l ami, bienvenue');
  };



/*
4.Mediante un solo prompt, introduce tu nombre y tu apellido e imprime por pantalla 
la ultima letra de tu nombre y la primera de tu apellido.
*/

const fullName = prompt('Introduzca nombre y apellido');

// el nombre termina en la posicion-1 del separador y el apellido comienza en la pos+1

const sepCharIndex = fullName.indexOf(' '); 
document.write(`<p>Ultima letra de su Nombre: ${fullName.charAt(sepCharIndex-1)}</p>`);
document.write(`<p>Primera letra de su Apellido: ${fullName.charAt(sepCharIndex+1)}</p>`);


/*
 ó Así 
// split(" ")[]
let namesurname = prompt("Introduce tu nombre y apellido");
let first = namesurname.split(" ")[0];
let surname = namesurname.split(" ")[1];

document.write(`La ultima letra de su nombre es ${first.charAt(first.length-1)},
La primera letra de su apellido es ${surname.charAt(0)}`);

/*
5.Crea un programa donde incluyas una frase y este te diga si la frase incluye malas palabras, 
debes elegir 4 malas palabras que tu programa debe buscar y de encontrarlo va pintar en pantalla 
que la frase contiene malas palabras y de no ser así pintara que la frase esta limpia, 
debe dar igual si introduces la frase con mayúsculas  o minisculas .
*/

//- método toLowerCase() para convertir a minúsculas (y que no importe si el input tiene mayus o minus para comparar)
//- método .includes() para comprobar si un string está contenido en otro.

let input = prompt("Introduce una frase");

if ( input.toLowerCase().includes("tonto") || input.toLowerCase().includes("mierda") ||
 input.toLowerCase().includes("mamon") || input.toLowerCase().includes("hediondo") )  {
  document.write("La frase contiene malas palabras");
} else {
  document.write("La frase está limpia, no contiene palabrotas");
};


/*
6.Crea un algoritmo que te imprima por pantalla, si tienes la edad suficiente para entrar a un local nocturno
o no, el algoritmo debe usar operador ternario.
*/
//operador ternario         x > 18 ? entras : no entras
let age = prompt("ingresa tu edad");
let isadult = age >= 18 ? "Puedes entrar,eres mayor de edad": "No puedes entrar, eres menor de edad";
alert(isadult);


// sin operador ternario
let edad = parseInt(prompt('Escribe tu edad'));
if (edad >= 18) {
    document.write("Eres mayor de edad para entrar");
}else{
    document.write("No puedes entrar, eres menor de edad");
};



/*
7. Crea un algoritmo para determinar si un año es bisiesto o no, para esto el año que se pase por prompt 
deberá ser divisible entre 4 
y no divisible entre 100, o ser divisible entre 400, del resto seria un año común, 
para este algoritmo usaremos operador ternario, pinta por pantalla el resultado.
*/ 

//&& (AND)    "||" OR  "!"" (NOT) Convierte el operando al tipo booleano: true/false.Retorna el valor contrario.

// %= el resto de la division. == de igualdad  != de desigualdad



alert(!true); // false
alert(!0); // true
let año = prompt("Introduce un año");
let year = parseInt(año);
((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? document.write("Bisiesto") : document.write("No bisiesto");


/*
8.La luz de trafico puede ser 'verde', "ambar"  o "rojo". 
Crea un algoritmo que dado la luz de tráfico actual por prompt, pinte por pantalla un semaforo
con la luz indicada y que indique si el coche puede pasar o debe parar.
*/

const color = prompt("Introduce un color: rojo / verde / ambar");

switch(color){

    case 'rojo': 
      var locat= document.getElementById('semaforo').getElementsByTagName('span')[0];
    case 'ambar': 
      var locat= document.getElementById('semaforo').getElementsByTagName('span')[1];
    case 'verde':
      var locat= document.getElementById('semaforo').getElementsByTagName('span')[2];
      var pasar = true;    
    default:
      document.write("Error. Introduce rojo, verde o ambar");
}

locat.classList.add(`${color}`);
pasar ? document.write("<br>El coche puede pasar") : document.write("<br>El coche debe parar");


/*
9.Vamos a crear una calculadora que haga las operaciones básicas de suma, resta, multiplicación y división,
 en este caso usaremos el condicional SWITCH, el usuario debe ingrear mediante prompt el primer numero, 
 el operador y el segundo numero 
 y el algoritmo pintara por pantalla los dos números el operador y el resultado ejmp= "2 + 2 = 4".
*/

let resultado;// acumulando en esta variable

const input1 = parseFloat(prompt('Introduce el primer número: '));
const operador = prompt('Introduce el operador (+, -, * o / ): ');
const input2 = parseFloat(prompt('Introduce el segundo número: '));

switch(operador) {
    
  case '+': resultado = input1 + input2;
  document.write(`${input1} + ${input2} = ${resultado}`);
  break;

  case '-': resultado = input1 - input2;
  document.write(`${input1} - ${input2} = ${resultado}`);
  break;

  default:
  document.write('Operador inválido');
  break;
    
};



/*
10.Creemos un algoritmo para saber si un estudiante puede optar o no a una beca, 
para eso debera pasar mediante prompt un total de 7 calificaciones, 
y se deberá imprimir por pantalla la cantidad de asignaturas aprobadas, 
la nota media y si puede optar o no a la beca, para saber si un estudiante puede optar a la beca deberá 
tener el mínimo de asignaturas aprobadas( solo puede tener dos reprobadas, 
usar operador de asignación para esta operación), 
y una nota media superior a 6, PD:" la nota mínima para aprobar una asignatura es de 5".
*/

let aprobadas = 0;// en esta variable iré acumulando

const asignatura1 = parseFloat(prompt("Introduce tu primera nota"));
 aprobadas += asignatura1>=5 ? 1 : 0;
// voy sumando y acumulando +=
// solo sumo si esta aprobada sino sumo cero

 const asignatura2 = parseFloat(prompt("Introduce segunda nota"));
 aprobadas += asignatura2>=5 ? 1 : 0;
 // compruebo que funciona y añade
 //document.write(`Aprobadas añade 1. Actual: ${aprobadas}<br>`)

 const asignatura3 = parseFloat(prompt("Introduce tercera nota"));
 aprobadas += asignatura3>=5 ? 1 : 0;

 const asignatura4 = parseFloat(prompt("Introduce cuarta nota"));
 aprobadas += asignatura4>=5 ? 1 : 0;

 const asignatura5 = parseFloat(prompt("Introduce quinta nota"));
 aprobadas += asignatura5>=5 ? 1 : 0;

 const asignatura6 = parseFloat(prompt("Introduce sexta nota"));
 aprobadas += asignatura6>=5 ? 1 : 0;

 const asignatura7 = parseFloat(prompt("Introduce séptima nota"));
 aprobadas += asignatura7>=5 ? 1 : 0;



const notamedia =  (asignatura1+asignatura2+asignatura3+asignatura4+asignatura5+asignatura6+asignatura7) / 7;
document.write(`Nota media: ${notamedia}`)

/* forma larga de establecer el estado del boleano de abajo

if (aprobadas >= 5 && notamedia > 6) {
    hasgrant = true;
} else {
    hasgrant = false;
}

*/

const hasGrant = aprobadas >=5 && notamedia > 6;

document.write(`<p>${hasGrant ? 'Tu beca ha sido concedida' : 'No cumples los requisitos para la beca'}</p>`);

/*
//Loop de lo anterio

let passedSubjects = 0;
let subjectScoreAcc = 0;

for(let i=0; i<=6 ; i++){
    const nextSubjectScore = parseFloat(prompt('Nota'));
    passedSubjects += nextSubjectScore>=5 ? 1 : 0;
    subjectScoreAcc += nextSubjectScore;
}

const averageScore =  subjectScoreAcc / 7;
const hasGrant = passedSubjects >=5 && averageScore > 6;

document.write(`<p>${hasGrant ? 'Tu beca ha sido concedida' : 'No cumples los requisitos para la beca'}</p>`);

*/

