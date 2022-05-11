/*  Vamos a crear ciudades (podéis elegir las ciudades que queráis). 
Una ciudad se pinta como se muestra en la imagen. Por tanto:
1. Definir las propiedades que deben tener mis ciudades para poder ser pintadas en nuestro sistema. (Esto lo podéis hacer en un comentario)


2.Crear 4 objetos de ciudades que tengan la estructura definida y darle valores concretos (Por ejemplo Madrid, Valencia, Lima, ...). Podéis elegir vuestras ciudades favoritas.
 Crear una lista con las 4 ciudades.
 Pintar en el HTML las 4 ciudades.*/

/*
 Definir las propiedades que deben tener mis ciudades para poder ser pintadas en nuestro sistema. (Esto lo podéis hacer en un comentario)
 **/

 const amsterdam = {
  name:  'Amsterdam',
  last_visit: '2 weeks ago',
  views: 424,
  comments: 123,
  rating:345,
  comment: "Conocida por su patrimonio artístico, su elaborado sistema de canales y sus casas angostas con fachadas de dos aguas.",
  img: 'https://a.cdn-hotels.com/gdcs/production166/d427/b65225f3-0135-4c38-bee6-ddcb1e92f7eb.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',

 }


 const oporto = {
   name: 'oporto',
   last_visit: '1 week ago',
   views: 234,
   rating: 1234,
   comments: 123,
   comment: "En el distrito medieval de la Ribeira, las calles angostas de adoquines están bordeadas de casas de mercaderes y cafés. ",
   img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/O_Porto_%28visto_da_Ponte_Dom_Luis_I%29.jpg',

 }

 const venecia = {
  name: 'Venecia',
  last_visit: '5 weeks ago',
  views: 234,
  rating: 1234,
  comments: 12,
  comment: "Venecia, la capital de la región de Véneto en el norte de Italia,",
  img: 'https://viajes.nationalgeographic.com.es/medio/2021/03/25/venecia_078bbcd8_800x800.jpg',
}

 const cityList = [amsterdam, venecia, oporto]; // 
/**Crear una lista */

function printinHTML(city){ 
  document.write(`
  <div class="card">
              <div class="card-imagen" id= ${city.name}>
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

printinHTML(oporto)

printinHTML(amsterdam)

printinHTML(venecia)




