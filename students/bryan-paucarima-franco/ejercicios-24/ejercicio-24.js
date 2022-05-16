// Vamos a crear ciudades (podéis elegir las ciudades que queráis). Una ciudad se pinta como se muestra en la imagen. Por tanto:
// Definir las propiedades que deben tener mis ciudades para poder ser pintadas en nuestro sistema. (Esto lo podéis hacer en un comentario)

// . Las propiedades seran: 
//      - name
//      - img
//      - description
//      - distance
//      - views
//      - comments
//      - rating





// Crear 4 objetos de ciudades que tengan la estructura definida y darle valores concretos (Por ejemplo Madrid, Valencia, Lima, ...). Podéis elegir vuestras ciudades favoritas.

const madrid = {
    id: 'madrid',
    name: 'Madrid',
    img: 'https://media.gettyimages.com/photos/skyline-of-madrid-with-metropolis-building-and-gra-picture-id170131240?s=2048x2048',
    description: 'España, también denominado Reino de España,es un país soberano transcontinental, miembro de la Unión Europea, constituido en Estado social y democrático de derecho y cuya forma de gobierno es la monarquía parlamentaria. Su territorio, con capital en Madrid, está organizado en diecisiete comunidades autónomas, formadas a su vez por cincuenta provincias; y dos ciudades autónomas.',
    distance: '1 day ago',
    views: '51602',
    comments: '329',
    rating: '4.5',
    color_v_c_r: 'red'
}

const london = {
    id: 'london',
    name: 'London',
    img: 'https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE',
    description: 'Enim donec eu auctor habitant litora bibendum, tempor quam lobortis cursus montes. Vehicula turpis proin venenatis pharetra dapibus ac mus sapien, fusce congue varius pellentesque aliquam iaculis dignissim platea, magna vel penatibus neque arcu sociosqu duis. Penatibus mollis blandit aptent inceptos donec netus dictumst facilisis, eleifend nibh quam nullam ligula primis ullamcorper.',
    distance: '2 days ago',
    views: '52040',
    comments: '421',
    rating: '4.4',
    color_v_c_r: 'blue'
}

const lima = {
    id: 'lima',
    name: 'Lima',
    img: 'https://media.istockphoto.com/photos/antique-iron-pool-of-the-main-square-of-lima-peru-picture-id1075516922?s=612x612',
    description: 'Litora blandit laoreet odio parturient cras luctus massa metus lacinia consequat aliquam, morbi dictumst sociis fusce interdum curae dapibus bibendum neque faucibus. Id nulla purus ligula hac est ultrices molestie, accumsan torquent quisque orci cursus cubilia. Magna nec netus ad nam diam donec nulla turpis bibendum vehicula feugiat non, fringilla montes quis dignissim enim convallis.',
    distance: '4 days ago',
    views: '53123',
    comments: '314',
    rating: '4.8',
    color_v_c_r: 'green'
}

const newYork = {
    id: 'new-york',
    name: 'New York',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/2560px-New_york_times_square-terabass.jpg',
    description: 'Faucibus neque imperdiet cras montes tellus at vulputate, bibendum fusce convallis pulvinar iaculis suscipit mi, penatibus ad eu rhoncus lacinia sed. Molestie porta nibh nec habitant integer ridiculus sollicitudin gravida massa, in viverra scelerisque aliquam fermentum volutpat mus. Nisi habitasse curabitur porttitor montes dictum faucibus, dignissim sollicitudin bibendum sociis semper.',
    distance: '5 days ago',
    views: '62123',
    comments: '612',
    rating: '4.9',
    color_v_c_r: 'brown'
}
// Crear una lista con las 4 ciudades.

const cities = [madrid, london, lima, newYork]

// Pintar en el HTML las 4 ciudades.

const printCity = (city) => {
    return `
    <div class = "city_container" id="${city.id}">
        <div class = "imagen">
        <img src = "${city.img}" style = "width: 398px ; height:270px ; border-top-left-radius: 45px ; border-top-right-radius: 45px"/>
        </div>
        <div class = "info">
            <h3 class = "distance" style = "color:${city.color_v_c_r}"> ${city.distance}</h3>
            <h1 class = "name"> ${city.name}</h1>
            <p class = "description"> ${city.description}</p>
        </div>
        <div class = "city_v_c_r" style = "background-color:${city.color_v_c_r}">
            <div class = "city_item">
                <p> ${city.views}</p>
                <p>VIEWS</p>
            </div>
            <div class = "city_item">
                <p> ${city.comments}</p>
                <p>COMMENTS</p>
            </div>
            <div class = "city_item">
                <p> ${city.rating}</p>
                <p>RATING</p>
            </div>
        </div>
    </div>
    `;
}

const printCities = () => {
    return cities.map(c => printCity(c));
}

document.write(`<div class="cities">${printCities().join('')}</div>`)