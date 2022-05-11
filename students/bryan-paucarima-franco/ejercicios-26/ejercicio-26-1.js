// // 1. En un documento html vacio, crea un H2, luego ponle un texto y luego una clase que cambie de color, usando los métodos del objeto Document.

const createH2 = document.createElement("h2")
createH2.textContent = "Hola mundo"
createH2.className = "color"
createH2.style.color = "red"

document.body.appendChild(createH2)

// // 2. El h2 creado previamente mételo dentro de un div usando los métodos del objeto Document.(easy)

const createDiv = document.createElement("div")
createDiv.appendChild(createH2)

document.body.appendChild(createDiv)


// // 3. Elimina el div anterior con el metodo indicado desde javascript,  ahora crea un nuevo  div el cual tendrá dentro un enlace a  Google con un target _blank, un párrafo y una  lista de marca de coches ('SEAT', FORD Y CITROEN), usar metodos del objeto Document (create element....).(easy)

createDiv.remove("div")

// Enlace
const enlace = document.createElement("a")
enlace.href = "https://www.google.com/"
enlace.target = "blank"
enlace.textContent = "Google"

// Parrafo
const section = document.createElement("p")
section.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum ridiculus, rhoncus proin torquent est laoreet lacus orci scelerisque tincidunt massa, cubilia ad auctor dapibus mollis fusce diam metus. Ornare volutpat mus ultricies donec at lacinia mollis, dis primis arcu pretium mattis sodales nibh scelerisque, risus penatibus eleifend accumsan nullam senectus. "

// Marcas de coche
const carBrandOne = document.createElement("li")
carBrandOne.textContent = "SEAT"
const carBrandTwo = document.createElement("li")
carBrandTwo.textContent = "FORD"
const carBrandThree = document.createElement("li")
carBrandThree.textContent = "CITROEN"

// Lista de marcas de coche
const listCar = document.createElement ("ul")
listCar.appendChild(carBrandOne)
listCar.appendChild(carBrandTwo)
listCar.appendChild(carBrandThree)

// Div que contiene el enlace, parrafo y la lista de coches
const divContainer = document.createElement("div")
divContainer.appendChild(enlace)
divContainer.appendChild(section)
divContainer.appendChild(listCar)

document.body.appendChild(divContainer)

// 4. En un documento html crea un UL con un Atributo llamado "dom-demo" , dentro del UL deben ir 4 LI,  tendrán una class llamada "item", dos de ellos tendrán además  otra class llamada "special", 
// un LI tendrá el atributo dom-demo  y por ultimo el cuarto elemento debe tener un id llamado "cuarto_elemento". El ejercicio será el siguiente:(medium)

const listOne = document.createElement("li")
listOne.textContent = "item1"
listOne.className = "item special"
const listTwo = document.createElement("li")
listTwo.textContent = "item2"
listTwo.className = "item special"
const listThree = document.createElement("li")
listThree.textContent = "item3"
listThree.className = "item"
listThree.setAttribute("dom-demo","")
const listFour = document.createElement("li")
listFour.textContent = "item4"
listFour.className = "item"
listFour.id = "cuarto_elemento"

const createList = document.createElement("ul")
createList.setAttribute("dom-demo","")
createList.appendChild(listOne)
createList.appendChild(listTwo)
createList.appendChild(listThree)
createList.appendChild(listFour)

document.body.appendChild(createList)

// . Recuperar todos los li de la página y muéstralos por consola.

console.log(listOne)
console.log(listTwo)
console.log(listThree)
console.log(listFour)

// . Recuperar todos los elementos con class "item" y muéstralos por consola.

const getItem = document.querySelectorAll(".item")
console.log(getItem)

// . Recuperar el elemento con id="cuarto_elemento" y muéstralo por consola.

const getFourElement = document.querySelector("#cuarto_elemento")
console.log(getFourElement)

// . Recuperar los elementos que tengan atributo  data-demo y muéstralo por consola (getAtribu....).

const getAtri = document.querySelectorAll("[dom-demo]")

console.log(getAtri)


// . Cambiar el texto de todos los elementos  que tengan la clase "special" a "texto de la clase Special cambiado".

const changeText = document.querySelectorAll(".special")
changeText.textContent = "texto de la clase special cambiado";
console.log(changeText)

// . Cambiar el tamaño de letra usando estilo en linea STYLE, de los elemento con atributo  data-demo.

getAtri.forEach(element => element.style.fontSize = "2rem");


// . Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.

const listFive = document.createElement("li")
listFive.id = "CREADO_CUSTO"
createList.appendChild(listFive)





