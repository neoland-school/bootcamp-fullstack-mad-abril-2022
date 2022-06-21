// 1. Hello world fetch. Realizar una llamada GET a la siguiente URL (https://bootcamp.free.beeceptor.com/hello-mock) que tiene formato JSON. Pintar el valor de su única propiedad en un p.

const printP = document.createElement('p')
printP.id = 'id-p'
document.body.appendChild(printP)

let selectP = document.getElementById('id-p')

fetch('https://bryanpf93.free.beeceptor.com/square-divs')
.then(r => r.json())
.then(d => selectP.append(JSON.stringify(d)))

// 2. 2.  Jugando con Arrays. Realizar una llamada GET a la siguiente URL (https://bootcamp.free.beeceptor.com/square-divs) y pintar los divs de los colores de fondo que indica nuestro servidor.

const coloresDivs = [
    {
    "color": "red",
    "value": "#f00"
    },
    {
    "color": "green",
    "value": "#0f0"
    },
    {
    "color": "blue",
    "value": "#00f"
    },
    {
    "color": "cyan",
    "value": "#0ff"
    },
    {
    "color": "magenta",
    "value": "#f0f"
    },
    {
    "color": "yellow",
    "value": "#ff0"
    },
    {
    "color": "black",
    "value": "#000"
    }
    ]


const divOne = document.createElement('div')
divOne.classList.add('divs')
divOne.id = 'div-one'
divOne.style.backgroundColor = ``
const divTwo = document.createElement('div')
divTwo.classList.add('divs')
divTwo.id = 'div-two'
const divThree = document.createElement('div')
divThree.classList.add('divs')
divThree.id = 'div-three'
const divFour = document.createElement('div')
divFour.classList.add('divs')
divFour.id = 'div-four'
const divFive = document.createElement('div')
divFive.classList.add('divs')
divFive.id = 'div-five'

document.body.appendChild(divOne)
document.body.appendChild(divTwo)
document.body.appendChild(divThree)
document.body.appendChild(divFour)
document.body.appendChild(divFive)

fetch('https://bryanpf93.free.beeceptor.com/square-divs')
.then(r => r.json())
.then(d => colorDiv.append(d))

const selectDivOne = document.getElementById('div-one')
selectDivOne.style.backgroundColor = coloresDivs[0]['value']
const selectDivTwo = document.getElementById('div-two')
selectDivTwo.style.backgroundColor = coloresDivs[1]['value']
const selectDivThree = document.getElementById('div-three')
selectDivThree.style.backgroundColor = coloresDivs[2]['value']
const selectDivFour = document.getElementById('div-four')
selectDivFour.style.backgroundColor = coloresDivs[3]['value']
const selectDivFive = document.getElementById('div-five')
selectDivFive.style.backgroundColor = coloresDivs[4]['value']

// let jsondata;
// async function requestLoremIpsum(){
// const r = await fetch('https://bryanpf99.free.beeceptor.com/square-divs-3');
// const d = await r.json()
// return d 
// }

console.log(requestLoremIpsum(jsondata))

const colorsDivs =  requestLoremIpsum('https://bryanpf99.free.beeceptor.com/square-divs-3')

console.log(colorsDivs)


let jsondata;    
fetch('https://bryanpf99.free.beeceptor.com/square-divs-3')
.then(u => u.json())
.then(d => jsondata=d)
console.log(jsondata)

// 3.Listado de productos. Vamos a crear una página que pinte un listado de productos de telefonía movil. Lo primero que tenemos que aprender es a leer la 
// documentación de un API (la url de acceso a la información que queremos de un servidor). La docu se encuentra en la siguiente URL (https://dummyjson.com/docs/products). Realizar lo siguiente:
// . Identificar la URL donde se encuentra la información que queremos pintar (listado de productos). (Aqui con los 30 primeros vale)
// . Realizar la llamada en nuestra aplicación
// . Para cada producto pintar una card como la que se muestra en la imagen.
// . Opcional: Si nos fijamos bien en la respuesta ahora mismo estaríamos pintando 30 productos, pero la respuesta nos dice que hay 100 disponibles. Leer el apartado Limit and skip products para 
//   entender como podríamos modificar la URL y que el servidor nos devuelva los 100 productos a pintar.
// . Vamos a modificar ahora el ejercicio y antes de pintar la lista quiero que aparezca una sección que muestre la siguiente información:
//      . Mostrar en un p cuantos TELEFONOS cuestan más de 500€
//      . Mostrar  en otro p el precio medio de todos los productos
//      . Mostrar la lista de nombres con los productos que tengan un rating superior a 4.5
//      . Mostrar la lista de categorias de productos que existen

let listOfProducts;

async function fetchProducts(){
    const response = await fetch('https://dummyjson.com/products')
    const d = await response.json()

    listOfProducts = d.products;
    listOfProducts.forEach((product) => {
        createCardOfProfucts(product)
    })
     
    // fetch('https://dummyjson.com/products')
    //     .then(c => c.json())
    //     .then(d => {
    //         listOfProducts = d.products;
    //         listOfProducts.forEach((product) => {
    //             createCardOfProfucts(product)
    //         })
    //     })
}



function createCardOfProfucts(product) {
    const divContainer = document.createElement('div')
    const divCard = document.createElement('div')
    divCard.classList.add('div-card')
    const divImage = document.createElement('div')
    const image = document.createElement('img')
    image.classList.add('image')
    image.src = `${product.images[0]}`
    divImage.classList.add('div-image')
    const divText = document.createElement('div')
    divText.classList.add('div-text')
    const nameText = document.createElement('h2')
    nameText.textContent = `${product.title}`
    nameText.classList.add('name-text')
    const divDecoration = document.createElement('div')
    const textDecoration = document.createElement('span')
    textDecoration.textContent = 'DECORATION'
    textDecoration.classList.add('text-decoration')
    const divPuntuation = document.createElement('div')
    divPuntuation.classList.add('div-puntuation')
    const divStairs = document.createElement('div')
    const textPuntuation = document.createElement('p')
    textPuntuation.textContent = `${product.stock}`
    const divPrice = document.createElement('div')
    divPrice.classList.add('div-price')
    const textPrice = document.createElement('span')
    textPrice.textContent = `${((product.price) - (product.price) * (product.discountPercentage) / 100)}`
    textPrice.classList.add('text-price')
    const textPreviousPrice = document.createElement('span')
    textPreviousPrice.textContent = `${product.price}`
    textPreviousPrice.classList.add('text-previous-price')
    const textDiscountPrice = document.createElement('span')
    textDiscountPrice.textContent = `${product.discountPercentage}% Off`
    textDiscountPrice.classList.add('text-discount-price')
    const textList = document.createElement('ul')
    textList.classList.add('text-list')
    const textListOne = document.createElement('li')
    textListOne.textContent = `${product.description}`
    const buttonAddToCart = document.createElement('button')
    buttonAddToCart.textContent = 'Add to cart'
    buttonAddToCart.classList.add('button-add-to-cart')


    document.body.appendChild(divContainer)
    divContainer.appendChild(divCard)
    divCard.appendChild(divImage)
    divImage.appendChild(image)
    divCard.appendChild(divText)
    divText.appendChild(nameText)
    divText.appendChild(divDecoration)
    divText.appendChild(textDecoration)
    divText.appendChild(divPuntuation)
    divPuntuation.appendChild(textPuntuation)
    divText.appendChild(divPrice)
    divPrice.appendChild(textPrice)
    divPrice.appendChild(textPreviousPrice)
    divPrice.appendChild(textDiscountPrice)
    divText.appendChild(textList)
    textList.appendChild(textListOne)
    divText.appendChild(buttonAddToCart)
}

fetchProducts();
console.log(listOfProducts)



