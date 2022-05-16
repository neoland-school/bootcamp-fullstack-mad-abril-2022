/*
Vamos a crear ciudades (podéis elegir las ciudades que queráis). 
Una ciudad se pinta como se muestra en la imagen. Por tanto:

a.Definir las propiedades que deben tener mis ciudades para poder ser pintadas en nuestro sistema. 
(Esto lo podéis hacer en un comentario)
b.Crear 4 objetos de ciudades que tengan la estructura definida y darle valores concretos 
(Por ejemplo Madrid, Valencia, Lima, ...). 
c.Crear una lista con las 4 ciudades.
d.Pintar en el HTML las 4 ciudades.
*/

/*

Propiedades:
name:
country:
government:
img:
clima:
img:
population:
views:
*/



let Barcelona ={
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Barcelona_collage.JPG/270px-Barcelona_collage.JPG',
    lastVisited: '4 Days ago',
    cityName: 'Barcelona',
    description: `Barcelona is bla bla blaaaa bla blaaa blaaa.is bla bla blaaaa bla blaaa blaaais bla bla blaaaa bla blaaa blaaa
    is bla bla blaaaa bla blaaa blaaais bla bla blaaaa bla blaaa blaaais bla bla blaaaa bla blaaa blaaa`,
    views: 72204,
    comments: 23330,
    rating: 7,
    color:'#f24e4e'
    };


let Londres = {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/431px-London_Big_Ben_Phone_box.jpg',
    lastVisited: '1 year ago',  
    cityName: 'Londres',  
    description: `London is the capital city of the United Kingdom. 
                  It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre. 
                  London is also among the oldest of the world's great cities, with its history spanning nearly 
                  two millennia.`,
    views: 99104,
    comments: 230,
    rating: 4,
    color:'#e27c28'
    };



let Moscu = {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/St_Basils_Cathedral-500px.jpg/270px-St_Basils_Cathedral-500px.jpg',
    lastVisited: '10 years ago',
    cityName: 'Moscu', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    views: 67209,
    comments: 287,
    rating: 4.1,
    color: '#466d24'


    };


let Pekin = {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Church_of_the_Saviour%2C_Beijing.jpg/280px-Church_of_the_Saviour%2C_Beijing.jpg',
    lastVisited: ' last week ',
    cityName: 'Pekin', 
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    views: 12201,
    comments: 254,
    rating: 4.3,
    color: '#4949e3'

    };


const cityList = [Barcelona, Londres, Moscu, Pekin]; // Array de objetos

// pintar Pekín
function printHTML(city){
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

cityList.forEach(c => printHTML(c))





/*
<div class="city_container">
<div class="card">
<h1>${city.name}</h1>
<p>${city.country}</p>
<p>${city.government}</p>
<p>${city.views}</p>
<img src="${China.img}" />
<div class="circle" style="background-color:${China.population}"</div>
`);
    }

 printHTML(Pekín)    */
