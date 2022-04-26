/*Crea  un programa que dado dos números mediante prompt  imprima el mayor de ellos por pantalla.*/

document.write('<p>EJERCICIO 1</p>');

let num1 = parseInt(prompt('Introduce un numero'));
let num2 = parseInt(prompt('Introduce el segundo número'));

if(num1>num2){
    document.write(`es mayor ${num1}`);
}else if(num2>num1){
    document.write(`es mayor ${num2}`);
}

/*Mediante prompt introduce tu nombre y tu apellido e imprime por pantalla la ultima letra de tu
 nombre y la primera de tu apellido.*/
 document.write('<p>EJERCICIO 2</p>');

let nam = (prompt('Introduce tu nombre'));
let surname = (prompt('Introduce tu apellido'));


document.write(`La ultima letra del nombre es ${nam.charAt(nam.length-1)}`);
document.write('<p>.</p>');

document.write(`La ultima letra del nombre es ${surname.charAt(surname.length-1)}`);

/*Crea un programa que imprima por pantalla  un saludo en el idioma que le indiques, los idiomas 
serán ingles, español y francés,  el idioma debe ser pasado por prompt y el saludo por default será en ingles.*/
document.write('<p>EJERCICIO 3</p>');

let idiom = prompt('Elige un idioma: ingles, español, frances');

switch(idiom){
    case "español": {
    document.write('Hola qué tal')
    break;
    }
    case "frances": {
        document.write('Hola en frances')
    break;
    }
    default:{
        document.write('hello person in the world')
    }
}
/*Mediante Un solo !!!!! prompt introduce tu nombre y 
tu apellido e imprime por pantalla la ultima letra de tu nombre y la primera de tu apellido*/

document.write('<p>EJERCICIO 4</p>');

let fullName = (prompt('Introduce tu nombre y apellidos'));

let sepCharIndex = fullName.indexOf(' ');

document.write(`<p>Ultima del nombre: ${fullName.charAt(sepCharIndex-1)}</p>`);
document.write(`<p>Ultima del nombre: ${fullName.charAt(sepCharIndex+1)}</p>`)


/*Crea un programa donde incluyas una frase y este te diga si la frase incluye malas palabras,
debes elegir 4 malas palabras que tu programa debe buscar y de encontrarlo va pintar en pantalla
que la frase contiene malas palabras y de no ser así pintara que la frase esta limpia, debe dar
igual si introduces la frase con mayúsculas  o minisculas .*/

document.write('<p>EJERCICIO 5</p>');

let frase = prompt('introduce una frse');

if (frase.includes('cristiano')) {
    document.write('Escribe de nuevo la frase');
  } else if(frase.includes('eta')) {
      document.write('escribe de nuevo la frase');
  } else if(frase.includes('franco')) {
      document.write('Escribe de nuevo la frase');
  } else if (frase.includes('nazi')) {
      document.write('Escribe de nuevo la frase')
      } else {
          document.write(frase)
      }


/*Crea un algoritmo que te imprima por pantalla,  si tienes la edad suficiente para 
entrar a un local nocturno o no, el algoritmo debe usar operador ternario.*/

document.write('<p>EJERCICIO 6</p>');

let age = parseInt(prompt('¿Qué edad tienes?'));

let old = age >= 18 ? 'Enhorabuena eres mayor de edad' : 'lo siento no eres mayor de edad';

document.write(old)

/*Crea un algoritmo para determinar si un año es bisiesto o no, para esto el año que se pase por 
prompt deberá ser divisible entre 4 y no divisible entre 100, o ser divisible entre 400, del resto 
seria un año común, para este algoritmo usaremos operador ternario, pinta por pantalla el resultado.*/

document.write('<p>EJERCICIO 7</p>');

let year = parseInt(prompt('Introduce un año'));

if (year%4 ===0  && year%100 !==0 || year%400 ===0){
    document.write('Es un año bisiesto');
}else{
    document.write('No es un año bisiesto')
}
 /*La luz de trafico puede ser 'verde',   "ambar"  o "rojo". Crea un algoritmo que dado la luz de
  tráfico actual por prompt, pinte por pantalla  un semaforo  con la luz indicada y que indique si
   el coche puede pasar o debe parar.*/
 
/*let color = prompt('Qué color tiene el semaforo')

switch(color){
    case "verde": {
    document.write('Puedes pasar')
    break;
    }
    case "rojo": {
        document.write('STOP')
    break;
    }
    case "ambar": {
        document.write('Stop')
    }
}

*/



/*Vamos a crear una calculadora que haga las operaciones básicas de suma, resta, multiplicación y
 división, en este caso usaremos el condicional SWITCH,  el usuario debe ingrear mediante prompt el
  primer numero, el operador y el segundo numero y el algoritmo pintara por pantalla los dos números 
  el operador y  el resultado ejmp= "2 + 2 = 4".

  n1 = parseInt(prompt('Introduce el primer numero'));
  n2 = parseInt(prompt('Introduce el segundo numero'));
  n3 = prompt('Introduce un operador de +,-,*');
  
  
  switch (n3){
      case "-": {
          document.write(`Tu operación es ${n1-n2}`);
          break;
      }
  case "+": {
      document.write(`Tu operacion es ${n1+n2}`);
      break;
  }
  case "*":  {
      document.write(`Tu operacion es ${n1*n2}`);
      break;
  }*/
  
  /*Creemos un algoritmo para saber si un estudiante puede optar o no a una beca, para eso debera pasar
    mediante prompt un total de 7 calificaciones, y se deberá imprimir por pantalla la **cantidad de asignaturas**
     aprobadas, la nota media y si puede optar o no a la beca, para saber si un estudiante puede optar a la beca
      deberá tener el mínimo de asignaturas aprobadas( solo puede tener dos suspensas,  usar operador de asignación para esta operación), 
      y una nota media superior a 6, PD:" la nota mínima para aprobar una asignatura  es de 5".
  */
  
  let mates = parseFloat(prompt('Introduce tu nota de mates'));
  let lengua = parseFloat(prompt('Introduce tu nota de lengua'));
  let fisica  = parseFloat(prompt('Introduce tu nota de fisica'));
  
  
  
  if(mates>=5 && lengua >= 5 && fisica >=5 ){
      document.write('has aprobado todas')
  }
  
  let media = (mates + lengua + fisica) / 3;
  
  document.write(`<p>tu media es ${media}. </p>`);
  
  if ( media >6 ){
      document.write('Enhorabuena tienes beca');
  }else{
          document.write('No tienes beca')
  }