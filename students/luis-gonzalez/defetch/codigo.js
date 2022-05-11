
// //1.-Hello world fetch. Realizar una llamada GET a la siguiente URL (https://bootcamp.free.beeceptor.com/hello-mock) que tiene formato JSON. Pintar el valor de su única propiedad en un p.

// async function respuesta(){
//     const r =  await fetch ('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88');
//     const rd = await r.json();
//     console.log(rd);
// }
// respuesta()



// async function mock(){
//     const r = await
//     fetch ('https://deluis.free.beeceptor.com/my/api/path');
//     const rd =await r.json();
//     console.log(rd);
// }
// mock()

//================HACERLO CON .then=======================================

/*
//2.-Jugando con Arrays. Realizar una llamada GET a la siguiente URL (https://bootcamp.free.beeceptor.com/square-divs) y pintar los divs de los colores de fondo que indica nuestro servidor.

//Datos:
//Entrada:UN ARRAY en el servidor.

 //Operación:
 //traer el array de objeto con un fetch.
 //aplicando un forEach recorrrer el array que se debe pintar en bloques de colores en el dom

 //Salida:
 //bloques de colores.

 async function pintarr(){
    
    const viejo = await fetch ('https://otrodeluis.free.beeceptor.com/otromas');
    const nuevo = await viejo.json();
    //console.log(nuevo)
   
    //nuevo.forEach(el =>console.log(el));
     nuevo.forEach((e)=>{
//console.log(nuevo)

let bloque = document.createElement('div');

bloque.style.background =e.color;
document.body.appendChild(bloque);

     });
 
    }
    pintarr()

*/





















































 // async function respuesta(){
//     const r =  await fetch ('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88');
//     const rd = await r.json();
//     console.log(rd);
// }
// respuesta()