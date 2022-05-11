
// 1- Vamos a crear ciudades (podéis elegir las ciudades que queráis). 
// Una ciudad se pinta como se muestra en la imagen. Por tanto:
// Definir las propiedades que deben tener mis ciudades para poder ser pintadas en nuestro sistema. 
// (Esto lo podéis hacer en un comentario)
// Crear 4 objetos de ciudades que tengan la estructura definida y darle valores concretos 
// (Por ejemplo Madrid, Valencia, Lima, ...). Podéis elegir vuestras ciudades favoritas.
// Crear una lista con las 4 ciudades.
// Pintar en el HTML las 4 ciudades.


// las ciudade tendran las propiedades de imagen, ultima visita, nombre de la ciudad, descripción, visitas, 
// comentarios, puntuación y color que representa a la ciudad.

const london = {
    img: 'https://babylontours.es/wp-content/uploads/2016/09/london-441853_960_720.jpg',
    lastVisited: '4 Days ago',
    cityName: 'London',
    description: `London is the capital city of the United Kingdom. 
                  It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre. 
                  London is also among the oldest of the world's great cities, with its history spanning nearly 
                  two millennia.`,
    views: 51784,
    comments: 329,
    rating: 4.5,
    color: '#df3f7f'
};

const newyork = {
    img: 'https://www.tragaviajes.com/wp-content/uploads/Que-hacer-en-nueva-york-4.jpg',
    lastVisited: '1 week ago',
    cityName: 'New York',
    description: `New York is a city of diversity and dynamism. It is also a city of politics, economy and culture. 
                  It is even described as the economic and cultural capital of the world, and New York City 
                  is one of the most populous cities in the United States.`,
    views: 50684,
    comments: 230,
    rating: 4,
    color:'#e27c28'
};

const marrakech = {
    img: 'https://www.exoticca.com/es/blog/wp-content/uploads/2019/03/15-cosas-que-ver-en-Marrakech-y-en-sus-alrededores.jpg',
    lastVisited: '2 weeks ago',
    cityName: 'Marrakech',
    description: `Marrakech is also known as the city of luxury, thanks to its famous palaces, 5-star restaurants, 
                  luxury spas and hammams and charming riads (traditional houses) in the medina. Amongst others, 
                  there is the Mamounia and its enchanting gardens, the luxurious Royal Mansour hammam and 
                  the refined cuisine of Namaskar Palace.`,
    views: 43784,
    comments: 287,
    rating: 4.1,
    color: '#466d24'
};

const prague = {
    img: 'https://lp-cms-production.imgix.net/2021-08/shutterstockRF_300856853.jpg',
    lastVisited: '6 days ago',
    cityName: 'Prague',
    description: `Prague is known for its diverse architecture and museums, 
                  along with its abundant and cheap nightlife, and extensive shopping options. 
                  It is also famous for its hearty food and cheap beer, along with its well maintained 
                  UNESCO World Heritage city Centre.`,
    views: 38984,
    comments: 254,
    rating: 4.3,
    color: '#4949e3'
};

const cityList = [london, newyork, marrakech, prague];

function printCityInHTML (city) {
    document.write(`
    <div>
        <div class="card-container">
            <img class="city-image" src="${city.img}">
            <div class="title-visited__container">
                <p class="last-visit" style="color:${city.color};">${city.lastVisited}</p>
                <h1 class="title">${city.cityName}</h1>
            </div>
            <p class="description">${city.description}</p>
            <section class="footer" style="background-color:${city.color}; border-top: 1px solid ${city.color};">
                <div class="views-comments-rating__containers">
                    <p class="views">${city.views}</p>
                    <p class="views">VIEWS</p>
                </div>
                <div class="views-comments-rating__containers">
                    <p class="comments">${city.comments}</p>
                    <p class="comments">COMMENTS</p>
                </div>
                <div class="views-comments-rating__containers">
                    <p class="rating">${city.rating}</p>
                    <p class="rating">RATING</p>
                </div>
            </section>
        </div>
    </div>
    `);
}

cityList.forEach(c => printCityInHTML(c));