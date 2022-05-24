// const os = require('os'); // Una forma de importar, llamada CJS o CommonJS. Forma original de NodeJS
import os from 'os'; // forma de importar utilizando ESM (EcmaScript Modules). Forma moderna

console.log('Hello World NodeJS'); // 1

// setInterval(() => console.log(`Intervalo: ${process.pid} ${process.ppid}`), 1000);

console.log(process.argv); // 2

// process.argv.length === 6 ==> Ejemplo de llamada: node hello.js true 0 hola "{\"demo\": false}"

console.log(`prioridad: ${os.getPriority()}`); 
