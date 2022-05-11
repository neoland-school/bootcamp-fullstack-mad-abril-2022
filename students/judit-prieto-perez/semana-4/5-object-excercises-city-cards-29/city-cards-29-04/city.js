/* 
 Crea un documento HTML con un body vacío,  ahora crea un objeto de tipo city que contenga {imagen, nombre de la ciudad, descripción}, 
 repite el proceso con varias ciudades de tu elección y con ello crea un array de ciudades, ahora vamos a darle vida en nuestro html:
 (hard)*/

 const lisboa =  {
    name: 'Lisboa',
    id: 'lisboa',
    comment: "Venecia, la capital de la región de Véneto en el norte de Italia, abarca más de 100 islas pequeñas en una laguna del mar Adriático.",
    img: 'https://a.cdn-hotels.com/gdcs/production166/d427/b65225f3-0135-4c38-bee6-ddcb1e92f7eb.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
  
   }
  
  const oporto =
  
   {
     name: 'Oporto',
     id: 'oporto',
     comment: "Nueva York incluye 5 distritos que se ubican donde el río Hudson desemboca en el océano Atlántico.",
     img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/O_Porto_%28visto_da_Ponte_Dom_Luis_I%29.jpg',
  
   }
  
   const roma =
  {
    name: 'roma',
    id: 'roma',
    comment: "Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que",
    img: 'https://viajes.nationalgeographic.com.es/medio/2021/03/25/venecia_078bbcd8_800x800.jpg',
  }


  const cracovia =
  {
    name: 'cracovia',
    id: 'cracovia',
    comment: "Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que",
    img: 'https://viajes.nationalgeographic.com.es/medio/2021/03/25/venecia_078bbcd8_800x800.jpg',
  }

  const cityList = [roma, cracovia, oporto]; 

console.log(cityList)
/*
Funcion que elimine una ciudad: 

let city_remove = prompt('Qué ciudad quieres eliminar')

function removeCity (city){

const remove = array_cities.findIndex( item => item.id === city );

 return array_cities.splice( remove, 1 );
}

console.log(removeCity(city_remove))

   /*Dato que entra: String (nombre de ciudad)
   Dato que sale: undefined
//    

 function remove(a){
  a.remove()
  return a.remove
}
 
 /*Crea una función llamada removeAllCity la cual eliminará todas las ciudades de la web.*/

function removeAllCity(){
  div.remove()//Elimino TODAS
  return div.remove()
}

/*const demoId = document.querySelector('#oporto');

const item = document.getElementsByClassName("oporto");
  console.log(item)


  let city_remove = prompt('Qué ciudad quieres eliminar')
function removeCity (city){

*/  
  



  function printinHTML(city){ 
    document.write(`
    <div class="card ${city.name}">
                <div class="card-imagen">
                <img class="thumb" src= ${city.img}>
                 </div>
      <div class="card-body">
                <p class="visit">${city.last_visit}</p>
                <h2>${city.name}</h2>
                <p>${city.comment}</p>
              </div>
                <div class="card-footer">
                <div class="item">
              <div class="">${city.views}</div>
             <div>VIEWS</div>
  </div>
  <div class="item">
      <div class="">${city.comments}</div>
      <div>COMMENTS</div>
  </div>
  <div class="item">
          <div class="">${city.rating}</div>
         <div>RATING</div>
      </div>
      </div>
  
  </div>
  
  
  
    `);
  }
  
  
  printinHTML(cracovia)
  
  printinHTML(oporto)
  
  printinHTML(roma)
  
  