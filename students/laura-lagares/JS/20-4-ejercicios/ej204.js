// Crea  un programa que dado dos números mediante prompt  imprima el mayor de ellos por pantalla.

let numUno = prompt('Introduce el primer número');
let numDos = prompt('Introduce el segundo número');

if ( numUno > numDos) {
    document.write(`<p>El número mayor es ${numUno}</p>`);
} else if ( numDos > numUno) {
    document.write(`<p>El número mayor es ${numDos}</p>`);
};


// Mediante prompt introduce tu nombre y tu apellido e imprime por pantalla la ultima letra de tu nombre y la primera de tu apellido.

let nombre= prompt('Introduce tu nombre');
let apellido = prompt('Introduce tu apellido');

document.write(`<p>La ultima letra de tu nombre es ${nombre.charAt(nombre.length-1)}</p>`);

document.write(`<p>La primera letra de tu apellido es ${apellido.charAt(0)}</p>`);


// Crea un programa que imprima por pantalla  un saludo en el idioma que le indiques, los idiomas serán ingles, español y francés,  el idioma debe ser pasado por prompt y el saludo por default será en ingles.

let saludo = prompt('Introduce un idioma: ingles, espanol o frances');

switch (saludo) {
    case 'espanol':
     document.write('Hola');   
        break;
    case 'frances':
     document.write('Bonjour');
        break;
    default:
     document.write('Hello');
        break;
};

// Mediante Un solo !!!!! prompt introduce tu nombre y tu apellido e imprime por pantalla la ultima letra de tu nombre y la primera de tu apellido.

let nomAp = prompt('Introduce tu nombre y apellido');
let espacio = nomAp.indexOf(' ');
document.write(`<p>La última letra de tu nombre es ${nomAp.charAt(espacio-1)} y la primera letra de tu apellido es ${nomAp.charAt(espacio+1)}</p>`);


// Crea un programa donde incluyas una frase y este te diga si la frase incluye malas palabras, debes elegir 4 malas palabras que tu programa debe buscar y de encontrarlo va pintar en pantalla que la frase contiene malas palabras y de no ser así pintara que la frase esta limpia, debe dar igual si introduces la frase con mayúsculas  o minisculas .

let frase = prompt ('Introduce una frase:');
let fraseLow = frase.toLowerCase();

if (fraseLow.includes('ostia')||fraseLow.includes('puta')||fraseLow.includes('copon')||fraseLow.includes('gilipollas')) {
   document.write('Tu frase tiene malas palabras.')
} else  {
    document.write('Tu frase esta limpia.')
};
document.write('<br>');

// Crea un algoritmo que te imprima por pantalla,  si tienes la edad suficiente para entrar a un local nocturno o no, el algoritmo debe usar operador ternario.

let edad = prompt('Introduce tu edad');
let entrarLocal = edad >= 18 ? 'Puede entrar en el local.' : 'No puede entrar en el local.';
document.write(`<p>${entrarLocal}</p>`);


// Crea un algoritmo para determinar si un año es bisiesto o no, para esto el año que se pase por prompt deberá ser divisible entre 4 y no divisible entre 100, o ser divisible entre 400, del resto seria un año común, para este algoritmo usaremos operador ternario, pinta por pantalla el resultado.

let year = prompt('Introduce un año');
let yearType = (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ? 'Bisiesto' : 'No bisiesto';
document.write(`<p>El año es ${yearType}</p>`);


// La luz de trafico puede ser 'verde',   "ambar"  o "rojo". Crea un algoritmo que dado la luz de tráfico actual por prompt, pinte por pantalla  un semaforo  con la luz indicada y que indique si el coche puede pasar o debe parar.

let color = prompt('Elige un color: rojo, ambar o verde');

switch (color) {
    case 'rojo':
        document.write(`
        <section class="container">
         <div class="semaforo">
            <div class="circle" style="background-color:red"></div>
            <div class="circle"></div>
            <div class="circle"></div>
         </div>
         <h1 class="texto">STOP</h1>
       </section>`);
    break;

    case 'ambar':
        document.write(`
        <section class="container">
         <div class="semaforo">
           <div class="circle"></div>
           <div class="circle" style="background-color:orange"></div>
           <div class="circle"></div>
         </div>
         <h1 class="texto">READY</h1>
       </section>`);

      break;
    case 'verde':
        document.write(`
        <section class="container">
        <div class="semaforo">
           <div class="circle"></div>
           <div class="circle"></div>
           <div class="circle" style="background-color:green"></div>
        </div>
        <h1 class="texto">GO</h1>
      </section>`);
    break;

    default:
        document.write(`        
        <section class="container">
        <div class="semaforo">
           <div class="circle"></div>
           <div class="circle"></div>
           <div class="circle"></div>
        </div>
      </section>`);
        break;
};
document.write('<br>');

// Vamos a crear una calculadora que haga las operaciones básicas de suma, resta, multiplicación y división, en este caso usaremos el condicional SWITCH,  el usuario debe ingrear mediante prompt el primer numero, el operador y el segundo numero y el algoritmo pintara por pantalla los dos números el operador y  el resultado ejmp= "2 + 2 = 4".

let numOne = parseFloat(prompt('Introduce el primer número:'));
let operator = prompt('Introduce el operador: +,-,x o /');
let numTwo = parseFloat(prompt('Introduce el segundo número'));

switch (operator) {
  case '+':
    document.write(`<p>${numOne} + ${numTwo} = ${numOne+numTwo}</p>`);
    break;
  case '-':
    document.write(`<p>${numOne} - ${numTwo} = ${numOne-numTwo}</p>`);
  break;
  case 'x':
    document.write(`<p>${numOne} x ${numTwo} = ${numOne*numTwo}</p>`);
    break;
    case '/':
      document.write(`<p>${numOne} / ${numTwo} = ${numOne/numTwo}</p>`);
      break;
  default:
    document.write(``)
    break;
};

// Creemos un algoritmo para saber si un estudiante puede optar o no a una beca, para eso debera pasar  mediante prompt un total de 7 calificaciones, y se deberá imprimir por pantalla la cantidad de asignaturas aprobadas, la nota media y si puede optar o no a la beca, para saber si un estudiante puede optar a la beca deberá tener el mínimo de asignaturas aprobadas( solo puede tener dos reprobadas,  usar operador de asignación para esta operación), y una nota media superior a 6, PD:" la nota mínima para aprobar una asignatura  es de 5".
// if(subjectOne>=5){
//     passedSubjects++
// } OTRA MANERA DE HACER LO MISMO

let subjectOne = parseFloat(prompt('Introduce la primera nota:'));
let subjectTwo = parseFloat(prompt('Introduce la segunda nota:'));
let subjectThree = parseFloat(prompt('Introduce la tercera nota:'));
let subjectFour = parseFloat(prompt('Introduce la cuarta nota:'));
let subjectFive = parseFloat(prompt('Introduce la quinta nota:'));
let subjectSix = parseFloat(prompt('Introduce la sexta nota:'));
let subjectSeven = parseFloat(prompt('Introduce la séptima nota:'));

let passedSubjects = 0;
passedSubjects += subjectOne >=5? 1 : 0 ;
passedSubjects += subjectTwo >=5? 1 : 0 ;
passedSubjects += subjectThree >=5? 1 : 0 ;
passedSubjects += subjectFour >=5? 1 : 0 ;
passedSubjects += subjectFive >=5? 1 : 0 ;
passedSubjects += subjectSix >=5? 1 : 0 ;
passedSubjects += subjectSeven >=5? 1 : 0 ;


let media = (subjectOne+subjectTwo+subjectThree+subjectFour+subjectFive+subjectSix+subjectSeven) / 7;
let beca = passedSubjects >=5 && media > 6;

document.write(`${beca ? 'Tu beca ha sido concedida' : 'Tu beca no ha sido concedida'}`);






