// 1. Vamos a crear una app de cajero de banco, que nos va a permitir 
// hacer la siguientes funcionalidades, podremos revisar nuestro 
// estado de cuenta, agregar dinero, retirar dinero y limpiar nuestro saldo, 
// todos estos datos debemos pasarlo por parámetros (process.argv.slice(2)), 

// nuestro saldo inicial deberá estar en un archivo aparte  y el monto 
// será de 0 en caso de que no exista el archivo, nuestras funciones 
// deberán estar en otro archivos js y  deberán ser   importadas en un index.js, 

// donde  serán parte de un switch case dependiendo de lo q intrduzca el usuario 
// deberá llevarte a una funcion u otra, las funciones seran las siguientes:

import { getBalance, addBalance, substractionBalance, cleanBalance } from './funtionalities.js'

switch (process.argv[2]){
    case 'get':
        console.log(await getBalance())
        break;
    case 'add':
        addBalance(process.argv[3]);
        break;
    case 'substraction':
        substractionBalance(process.argv[3]);
        break;
    case 'clean':
        cleanBalance(process.argv[3]);
        break;

    default:
        console.log('choose a correct option');
}







