let city =  [
  {name:'Cracovia',comment:'Cracovia, ciudad del sur de Polonia cercana a la frontera con la República Checa, es conocida por su centro medieval bien conservado y su barrio judío. ', img:'https://www.cracovia.es/wp-content/uploads/2014/04/plaza-del-mercado-cracovia-002.jpg'},
  {name:'Roma',comment:'Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial.', new:'new', img: 'https://phantom-elmundo.unidadeditorial.es/c1778957d185783dae39f6a2f9f5a5ff/f/jpg/assets/multimedia/imagenes/2021/01/21/16112216320811.jpg'},
  {name:'Oporto',comment:'Oporto es una ciudad costera en el noroeste de Portugal, conocida por sus imponentes puentes y la producción del oporto.',new:'new', img: 'https://viajeronomada.com/wp-content/uploads/2019/10/quehacerenoporto.jpg'},
  {name:'Paris',comment:'La conocida como ciudad de la luz. Entre las atracciones ideales para familias destacan el Jardín de plantas de París y el Museo Nacional de Historia Natural.', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'}
]

;


const div_container = document.createElement("div");
document.body.appendChild(div_container);
div_container.classList.add("item", "special") 

const input = document.createElement("input");//INPUT
div_container.appendChild(input);
input.id = "input";

const buscar = document.createElement("button");//boton buscar
div_container.appendChild(buscar)
buscar.textContent="BUSCAR"
buscar.id = "buscar";
const limpiar = document.createElement("button");//boton limpiar
div_container.appendChild(limpiar)
limpiar.textContent="LIMPIAR"
limpiar.id = "limpiar";

//DIV CONTENEDOR DE LAS CARDS
div_container.id = "app";
const app= document.getElementById("app")
const div = document.createElement("div");
div.classList.add("container") 

//Funcion para crear card de cada ciudad

city.forEach ((city) => {
  const div_card= document.createElement("div");
  div_card.classList.add('card');
  div_card.id = `${city.name}`;
  const h3 = document.createElement("h3") ;
  div_card.appendChild(h3)
  h3.textContent = 'NEW';
  const h2 = document.createElement("h2")  //nombre ciudad
  div_card.appendChild(h2)
  h2.textContent = `${city.name}`;
  const img =document.createElement("img")
  div_card.appendChild(img)
  img.src  = `${city.img}`;
  div.appendChild(div_card);
  const date = document.createElement("p")
  div_card.appendChild(date)
  date.textContent= "31.01.2022";
  date.setAttribute("class", "date");
  const p = document.createElement("p") //descripction
  div_card.appendChild(p)
  p.textContent = (` ${city.comment}`)
  const button= document.createElement("button")
  div_card.appendChild(button)
  button.textContent="Read More"

})

app.appendChild(div);

//eliminar UNA ciudad//

function removeCity(city){
return city.remove()
}

///eliminar todas las ciudades///

function removeAll(){
  return div.remove()
}


