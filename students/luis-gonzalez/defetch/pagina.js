

//3.-Listado de productos. Vamos a crear una página que pinte un listado de productos de telefonía movil. Lo primero que tenemos que aprender es a leer la documentación de un API (la url de acceso a la información que queremos de un servidor). La docu se encuentra en la siguiente URL (https://dummyjson.com/docs/products). Realizar lo siguiente:
// Identificar la URL donde se encuentra la información que queremos pintar (listado de productos). (Aqui con los 30 primeros vale)
// Realizar la llamada en nuestra aplicación
// Para cada producto pintar una card como la que se muestra en la imagen.

// Vamos a modificar ahora el ejercicio y antes de pintar la lista quiero que aparezca una sección que muestre la siguiente información:
// Mostrar en un p cuantos TELEFONOS cuestan más de 500€
// Mostrar  en otro p el precio medio de todos los productos
// Mostrar la lista de nombres con los productos que tengan un rating superior a 4.5
// Mostrar la lista de categorias de productos que existen



async function printCard(){

const traido =await fetch ('https://dummyjson.com/products/category/smartphones');
const generado = await traido.json();
console.log(generado);




}
printCard()

//let apartado = document.createElement('div')
//apartado.id = 'apartado';


    
    // let quiniento = document.createElement('p');

    // apartado.appendChild(quiniento)




//}





//document.body.appendChild(apartado);



/*
generado.products.forEach((e)=>{

    let extra = document.createElement('div');
    extra.className='extra';

    let card = document.createElement('div');
    card.className='card';

    let foto = document.createElement('div');
    foto.id='foto';
    let imagenes = document.createElement('img');
    imagenes.src=e.images[0];
    foto.appendChild(imagenes);
    card.appendChild(foto);

    let nombre = document.createElement('div');
    nombre.id="nombre";
    nombre.textContent = e.title
    card.appendChild(nombre);

    let clasificacion = document.createElement('clasificacion');
    clasificacion.id='clasificacion';
    clasificacion.textContent=`Valoración: ${e.rating} / 5`;
    card.appendChild(clasificacion);

    let precio = document.createElement('precio');
    precio.id='precio';
    precio.textContent=`Precio: ${e.price} €`;
    card.appendChild(precio);

    let descripcion = document.createElement('descripcion');
    descripcion.id='descripcion';
    descripcion.textContent=e.description;    
    card.appendChild(descripcion);

    let botonera = document.createElement('botonera');
    botonera.id='botonera';
    let boton = document.createElement('button');
    boton.textContent='add to cart';
    boton.id='boton'
    botonera.appendChild(boton);
    card.appendChild(botonera);
    

    extra.appendChild(card);
    document.body.appendChild(extra);

});

}
printCard()



//======================================================

/*
// Opcional: Si nos fijamos bien en la respuesta ahora mismo estaríamos pintando 30 productos, pero la respuesta nos dice que hay 100 disponibles. Leer el apartado Limit and skip products para entender como podríamos modificar la URL y que el servidor nos devuelva los 100 productos a pintar.

async function modificar (){


const original = await fetch ('https://dummyjson.com/products?limit=100&skip=10&select=title,price');
const modificado = await original.json();
//console.log(modificado)

modificado.products.forEach((e)=>{
    //console.log(e)

    
let tarjeta = document.createElement('div');
tarjeta.id='tarjeta'

let titulo = document.createElement('h5');
titulo.id='titulo';
titulo.textContent= e.title;
tarjeta.appendChild(titulo);

let numero =document.createElement('p');
numero.id='numero';
numero.textContent=`Identificación: ${e.id}`;
tarjeta.appendChild(numero);

let precio = document.createElement('p');
precio.id='precios'
precio.textContent=`Precio: ${e.price} €`;
tarjeta.appendChild(precio);

document.body.appendChild(tarjeta);

});
}

modificar ()
*/





