
// import os from 'os';
// import dns from 'dns';

// console.log('Hello world');


// //2. pintar el PID y el PPID 
// console.log(`Punto 2: ${process.pid} ${process.ppid}`);


// // 3. Crear un programa en NodeJS que imprima por pantalla 
// // //la versión del SO, la arquitectura, el nº de CPU's, la memoria libre, 
// // la ruta del directorio home y la lista de interfaces de red. 
// // De cada interfaz habrá que pintar nombre, dirección ipV4,  
// // dirección ipv6 y dirección MAC. Hint: Toda la información 
// // se obtiene del módulo OS de NodeJS. Cuidado con los tipos de datos.
// console.log(os.version());
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.networkInterfaces());

// console.log(Object.keys(os.networkInterfaces()));

// // let matrix = console.logObject.keys(os.networkInterfaces()));
// // console.log(matrix.forEach(e => e.address));

// let matrix = Object.keys(os.networkInterfaces());

// matrix.forEach(k => {

//     console.log(os.networkInterfaces()[k].forEach(e => {
//         console.log(`name:${k},mac: ${e.mac}, direccion: ${e.family}` )
//     }))
// })


// //Crear un programa en NodeJS que solicite el la IP versión 4 para el DNS (www.google.com) 
// // y la pinte por pantalla.
// //  Hint: Utilizar el módulo de DNS. Metodo lookup. ¿Es síncrono o asíncrono?

// // console.log(dnsPromises.lookup(www.google.com[, 0]));

// dnsPromises.lookup('www.google.com', options).then((result) => {
//     console.log('address: %j family: IPv%s', result.address, result.family);
    
//   });

// //   const options = {
// //     family: 4,
// //     hints: dns.ADDRCONFIG | dns.V4MAPPED,
// //   };
// //   dnsPromises.lookup('google.com', options).then((result) => {
// //     console.log('address: %j family: IPv%s', result.address, result.family);})


// //Los programas cuando los ejecutamos pueden recibir parámetros de entrada. Estos parámetros nos permiten configurar nuestra aplicación y se puede obtener su valor dentro del programa. 
// // Para obtener los parámetros de un programa utilizamos el array process.argv. 

// // console.log(process.argv[2]);
// console.log(process.argv.slice(2));


// // dns.lookup('www.google.com')
// // .then(console.log)
// dns.lookup(process.argv[2], {all: true})
//  .then(console.log)


// //  Para poder pasar un parámetro de entrada a un programa NodeJS, tendremos que 
// //  ejecutar el programa y con espaciós vamos pasando cada uno de los parámetros. 
// //  EJ: node hello-world.js 3 adios este programa node le mandamos dos parámetros 
// //  de entrada cuyo valor, en este caso, son "3" y "adios". 
// //  Construir un programa en NodeJS que pinte por consola el valor del primer 
// //  parámetro de entrada que se le pase.

// dns.reverse('185.199.108.153').then(console.log)
// //el reverse.then da una promesa y retorna un array

