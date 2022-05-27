// paso 1: importar readline
import readline from 'readline';

// paso 2: crear el objeto de lectura (el que conecta con el stream(tuberia))
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

// Paso 3: Interactuar con el usuario
const menu = `
    Bienvenido a tu banco NeoBank:
        1. Sacar dinero
        2. Consultar saldo
        3. Retirar dinero
        4. Vaciar cuenta
        5. Salir
    ¿Que opcion quiere realizar? `
// 3.a: Opción de hacer una pregunta y escuchar la respuesta en un callback
rl.question(menu, res => {
    switch(res){
        case '1': console.log('Llamar a la función Sacando dinero...'); break;
        case '2': console.log('Llamar a la función Consultar Saldo...'); break;
        case '3': console.log('Llamar a la función Retirar Dinero...'); break;
        case '4': console.log('Llamar a la función Vaciar Cuenta...'); break; 
        case '5': process.exit(0);
        default: console.log('Operacion no reconocida, vuelva a introducir una opción')
    }
});

// 3.b Otra opción es escuchan el event `line`

// rl.write('Escribo cosas'); Esto añade datos a la ENTRADA DEL USUARIO
console.log('Pregunto al usuario'); // con esta opción el cursos para meter información se encuentra en la siguiente linea
// opción SIN salto de linea
process.stdout.write('Preguntando sin salto de linea');
rl.on('line', input => {
    console.log(`Escuchando evento. Has introducido: ${input}`);
});


