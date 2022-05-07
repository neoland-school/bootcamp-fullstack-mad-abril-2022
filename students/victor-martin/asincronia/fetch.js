// 1. Hello world fetch. Realizar una llamada GET a la siguiente 
// URL (https://bootcamp.free.beeceptor.com/hello-mock) 
// que tiene formato JSON. Pintar el valor de su única propiedad en un p.


// async function requestServidor(){
//     const r = await fetch('https://bootcamp.free.beeceptor.com/hello-mock');
//     const d = await r.JSON();

//     let parrafo = document.createElement('p');
//         parrafo.textContent=r;
//         document.body.appendChild(parrafo);
//     }


// async function requestServidor() {
//     const r = await
//         fetch('https://github-victor-martin.free.beeceptor.com/hello');
//     const ras = await r.json();

//     console.log(ras);

//     // let parrafo = document.createElement('p');
//     // parrafo.textContent = ras;
//     // document.body.appendChild(parrafo);
// }

// JSON.stringify(requestServidor());




// 2.  Jugando con Arrays. Realizar una llamada GET a la siguiente URL 
// (https://bootcamp.free.beeceptor.com/square-divs) 
// y pintar los divs de los colores de fondo que indica nuestro servidor.

/*
-realizar la llamada get a una URL
-
-pintar divs con una funcion los colores de fondo del servidor
 
*/








async function pintarr(){
    const viejo = await fetch ('https://otrodeluis.free.beeceptor.com/otromas');
    const nuevo = await viejo.json();
    //console.log(nuevo)
    //nuevo.forEach(el =>console.log(el));
     nuevo.forEach((e)=>{
    //console.log(nuevo)
    let bloque = document.createElement('div');
    bloque.style.background =e.color;
    bloque.style.witht = "100px";
    bloque.style.height = "100px";
    document.body.appendChild(bloque);
        });
        }
        pintarr()
    
    


    // function myFunction(item, index) {
    //    ros[0] = document.createElement('div');
    //    ros[0].style.width ="100px";
    //    ros[0].style.height = "100px";
    //    ros[0].style.backgroundColor= "#f00";



    // 3. Listado de productos. Vamos a crear una página que pinte un listado de 
    // productos de telefonía movil. Lo primero que tenemos que aprender es a leer 
    // la documentación de un API (la url de acceso a la información que queremos de un servidor).
    //  La docu se encuentra en la siguiente URL (https://dummyjson.com/docs/products). 
    //  Realizar lo siguiente:
/*
-array de productos
*/




    // --- Identificar la URL donde se encuentra la información que queremos pintar (listado de productos).
    //  (Aqui con los 30 primeros vale)

    // Realizar la llamada en nuestra aplicación

        fetch('https://dummyjson.com/products')  //listado de productos
        .then(res => res.json())
        .then(data => printCard(data.products[0]));
        // .then(console.log);

        fetch('https://dummyjson.com/products/search?q=phone')
        .then(res => res.json())
        .then(console.log);


// Para cada producto pintar una card como la que se muestra en la imagen.





let main = document.createElement("main");
main.classList.add("card__continer");
main.id("block");
document.body.appendChild(main);

// function printCard {
    
// }



