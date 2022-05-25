// const os = require('os'); // Una forma de importar, llamada CJS o CommonJS. Forma original de NodeJS
import os from 'os'; // forma de importar utilizando ESM (EcmaScript Modules). Forma moderna
import dns from 'dns/promises';
import fs from 'fs/promises';

console.log('Hello World NodeJS'); // 1

// setInterval(() => console.log(`Intervalo: ${process.pid} ${process.ppid}`), 1000);

console.log(process.argv); // 2

// process.argv.length === 6 ==> Ejemplo de llamada: node hello.js true 0 hola "{\"demo\": false}"

console.log(`prioridad: ${os.getPriority()}`); 


console.log(process.argv.slice(2));

// function determinates if a string is an ip v4 address
// function isIPv4(str) {
//     const ip = str.split('.');
//     if (ip.length !== 4) {
//         return false;
//     }
//     for (let i = 0; i < ip.length; i++) {  
//         if (isNaN(ip[i]) || ip[i] < 0 || ip[i] > 255) {
//             return false;
//         }
//     }
//     return true;
// }

// if(isIPv4(process.argv[2])) {
//     dns.reverse(process.argv[2]).then(console.log);
// }else{
//     dns.lookup(process.argv[2], {all: true})
//     .then(console.log)
// }

export const add = (...numbers) => {
    if(numbers.some(n => typeof n !== 'number')) return NaN;
    return numbers.reduce((acc,v) => acc+v, 0);
}


export const palindrome = str => {
    const processedStr = str.toLowerCase()
                            .replaceAll(' ', '')
                            .replaceAll(/á|à|â|ä/g, 'a')
                            .replaceAll(/ó|ò|ô|ö/g, 'o')
                            .replaceAll(/í|ì|î|ï/g, 'i')
                            .replaceAll(/é|è|ê|ë/g, 'e')
                            .replaceAll(/ú|ù|û|ü/g, 'u');
    const reverseStr = processedStr.split('').reverse().join('');
    return reverseStr === processedStr;
}


export const demoPromise = () => Promise.resolve('Hola');

const FILE_PATH = './hello.txt';

export const writeHelloInFile = async () => {
    await fs.writeFile(FILE_PATH, 'Hello');
}

export const readHelloFromFile = async () => {
    try {
        const d = await fs.readFile(FILE_PATH, { encoding: 'utf-8'});
        return d;
    }catch(err){
        return 'Not Found';
    }
}

export const removeHello = async () => {
    await fs.rm(FILE_PATH);
}
