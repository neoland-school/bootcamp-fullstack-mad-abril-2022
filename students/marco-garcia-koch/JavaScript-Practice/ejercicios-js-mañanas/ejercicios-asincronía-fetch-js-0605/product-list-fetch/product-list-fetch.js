
// / EJER3- Listado de productos. Vamos a crear una página que pinte un listado de productos de telefonía movil. 
// Lo primero que tenemos que aprender es a leer la documentación de un API 
// (la url de acceso a la información que queremos de un servidor). 
// La docu se encuentra en la siguiente URL (https://dummyjson.com/docs/products). 

// Realizar lo siguiente:
// - Identificar la URL donde se encuentra la información que queremos pintar (listado de productos 30 primeros).
// - Realizar la llamada en nuestra aplicación
// - Para cada producto pintar una card como la que se muestra en la imagen.


/**
 * Function that gets data from the DB via fetch
 * 
 * input: none
 * output: array of objects
 * 
 * 1- Fetch from the given link.
 * 2- Transform the result from fetch to json. We get an object. Among other key-value pairs, 
 *    it contains and array of objects (products).
 * 3- Go through each product object and call the function to print the card.  
 */

async function getDatafromDB () {
    const request = await fetch('https://dummyjson.com/products/category/smartphones');
    const data = await request.json();
        data.products.forEach(p => generateAndPrintCard(p));
        getProductPriceOverFivehundred(data);
        averagePriceOfProducts(data);
        getHighRating(data)
    }

getDatafromDB()

/**
 * Function that generates and prints a product card
 * 
 * input: object (single product)
 * output: undefined
 * 
 * 1- Receives an object that contains a product
 * 2- Creates all the elements of the card
 * 3- Apply dinamic content from the object in the elements where object information is needed
 * 3- Appends all the elements in the correct order 
 */

function generateAndPrintCard (product) {

    const main = document.createElement('main');
    main.classList.add('card-container');

    const mainImg = document.createElement('img');
    mainImg.classList.add('card-image');
    mainImg.src = product.images[1];

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
            
    const titleContainer = document.createElement('section');
    titleContainer.classList.add('title-container');
    const productTitle = document.createElement('p');
    productTitle.classList.add('title');
    productTitle.textContent = product.title;         
    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fa-regular');
    heartIcon.classList.add('fa-heart');

    const category = document.createElement('span');
    category.classList.add('category');
    category.textContent = product.category;

    const ratingContainer = document.createElement('section');
    ratingContainer.classList.add('rating-container');
    let ratingStar = document.createElement('i');
    ratingStar.classList.add('fa-solid');
    ratingStar.classList.add('fa-star');
    const qtyRating = document.createElement('p');
    qtyRating.classList.add('qty-ratings');
    qtyRating.textContent = '245';

    const priceContainer = document.createElement('section');
    priceContainer.classList.add('price-container');
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = product.price;
    const prevPrice = document.createElement('p');
    prevPrice.classList.add('prev-price');
    prevPrice.textContent = Math.ceil(product.price + (product.price*0.5));
    const discount = document.createElement('p');
    discount.classList.add('discount');
    discount.textContent = product.discountPercentage;
            
    const featuresList = document.createElement('ul');
    featuresList.classList.add('list');
    const featureOne = document.createElement('li');
    featureOne.classList.add('feature');
    featureOne.textContent = product.description;

    const addCartButton = document.createElement('button');
    addCartButton.classList.add('add-cart-button');
    addCartButton.textContent = 'Add to cart';

    document.body.appendChild(main);
    main.appendChild(mainImg);
    main.appendChild(detailsContainer);
    detailsContainer.appendChild(titleContainer);
    titleContainer.appendChild(productTitle);
    titleContainer.appendChild(heartIcon);
    detailsContainer.appendChild(category);
    detailsContainer.appendChild(ratingContainer);
    ratingContainer.appendChild(ratingStar);
    ratingContainer.appendChild(qtyRating);
    detailsContainer.appendChild(priceContainer);
    priceContainer.appendChild(price);
    priceContainer.appendChild(prevPrice);
    priceContainer.appendChild(discount);
    detailsContainer.appendChild(featuresList);
    featuresList.appendChild(featureOne)
    detailsContainer.appendChild(addCartButton);
}


// function calculateRatingStars(product) {
//     const ratingContainer = document.querySelector('.rating-container');
    
//     const ratingStarEmpty = document.createElement('i');
//     ratingStarEmpty.classList.add('fa-solid');
//     ratingStarEmpty.classList.add('fa-star');
//     ratingStarEmpty.classList.add('star-empty');

//     const ratingStarFilled = document.createElement('i');
//     ratingStarFilled.classList.add('fa-solid');
//     ratingStarFilled.classList.add('fa-star');
//     ratingStarFilled.classList.add('star-filled');

//     for(let i=1; i <=5  ; i++) {
//         if(product.rating >= i) {
//             ratingContainer.appendChild(ratingStarFilled);
//             console.log(ratingContainer);
//         } else {
//             ratingContainer.appendChild(ratingStarEmpty);
//         }
//     }
// }




// Opcional: Si nos fijamos bien en la respuesta ahora mismo estaríamos pintando 30 productos, 
// pero la respuesta nos dice que hay 100 disponibles. Leer el apartado Limit and skip products para entender 
// como podríamos modificar la URL y que el servidor nos devuelva los 100 productos a pintar.

// Vamos a modificar ahora el ejercicio y antes de pintar la lista quiero que aparezca una sección 
// que muestre la siguiente información:
// - Mostrar en un p cuantos TELEFONOS cuestan más de 500€

/**
 * Function that gets displayed products and shows in a text how many of those are priced over 500$.
 * 
 * input: object
 * output: undefined
 * 
 * 1- Get the Promise object with all the data.
 * 2- Filter the products array to find those with price over 500$
 * 3- Prints in DOM how many products have price over 500$.
 */

function getProductPriceOverFivehundred (data) {
    const arr = data.products.filter(p => p.price > 500);

    const moreExpensive = document.querySelector('.expensive');
    moreExpensive.textContent = `Productos con un precio superior a 500$: ${arr.length}`
};


// - Mostrar  en otro p el precio medio de todos los productos

/**
 * Function that gets displayed products and shows in a text the average price.
 * 
 * input: object
 * output: undefined
 * 
 * 1- Get the Promise object with all the data.
 * 2- Go over the products array to sum up all the prices
 * 3- Prints in DOM the average price of all those products.
 */

function averagePriceOfProducts (data) {
    let counter = 0;
    data.products.forEach(p => counter += p.price);

    const averagePrice = document.querySelector('.average');
    averagePrice.textContent = `Precio medio: ${counter/data.products.length}`
};


// - Mostrar la lista de nombres con los productos que tengan un rating superior a 4.5

/**
 * Function that gets displayed products and shows in a text the name of the rated ones above 4.5 stars.
 * 
 * input: object
 * output: undefined
 * 
 * 1- Get the Promise object with all the data.
 * 2- Create an empty array to save products with rating over 4.5 stars
 * 3- Go over the products array to sum up all the prices
 * 3- Prints in DOM the average price of all those products.
 */

function getHighRating (data) {
    let arrName = [];
    data.products.forEach(p => p.rating > 4.5 ? arrName.push(p.title) : '');

    const hihgRating = document.querySelector('.high-rating');
    hihgRating.textContent = `Productos con +4.5 rating: ${arrName}`;
};


// - Mostrar la lista de categorias de productos que existen

/**
 * Function that gets all the product category existent in the DB.
 * 
 * input: ''
 * output: undefined
 * 
 * 1- Make a fetch to get all the available product categories.
 * 2- Prints in DOM the list of product catergories obtained from the data array.
 */

 async function getProductCategories () {
    const request = await fetch('https://dummyjson.com/products/categories');
    const data = await request.json();

    const categorylist = document.querySelector('.list-categories');
    categorylist.textContent = `Categorías de productos disponible: 
                                ${data}.`;
};

getProductCategories()