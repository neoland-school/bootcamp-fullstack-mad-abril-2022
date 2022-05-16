// 5. Crea un documento HTML con un body vacío,  ahora crea un objeto de tipo city 
// que contenga {imagen, nombre de la ciudad, descripción}, 
// repite el proceso con varias ciudades de tu elección y con ello crea un array de ciudades, 
// ahora vamos a darle vida en nuestro html:(hard)

let arrayCities = [

    {
        id: 'madrid',
        name: 'Madrid',
        date: '02-05-2022',
        image: 'https://media.gettyimages.com/photos/skyline-of-madrid-with-metropolis-building-and-gra-picture-id170131240?s=2048x2048',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
        id: 'lima',
        name: 'Lima',
        date: '02-05-2022',
        image: 'https://media.istockphoto.com/photos/antique-iron-pool-of-the-main-square-of-lima-peru-picture-id1075516922?s=612x612',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
        id: 'london',
        name: 'London',
        date: '02-05-2022',
        image: 'https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
        id: 'new-york',
        name: 'New York',
        date: '02-05-2022',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/2560px-New_york_times_square-terabass.jpg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    }

]

function createCityCards (city) {

    const cardContairnerCity = document.createElement('div')
    cardContairnerCity.className = 'card-container'
    cardContairnerCity.id = `${city.id}`

    const imageTextCity = document.createElement('div')
    imageTextCity.className = 'image-text'

    const cityImage = document.createElement('img')
    cityImage.className = 'image'
    cityImage.src = `${city.image}`

    const textImageCity = document.createElement('p')
    textImageCity.className = 'text'
    textImageCity.textContent = 'NEW'

    const dateNameCity = document.createElement('div')
    dateNameCity.className = 'date-name'

    const logoShare = document.createElement('div')
    logoShare.className = "logo-share"

    const date = document.createElement('p')
    date.className = 'date'
    date.textContent = `${city.date}`

    const cityName = document.createElement('h1')
    cityName.className = 'city-name'
    cityName.textContent = `${city.name}`

    const descriptionButton = document.createElement('div')
    descriptionButton.className = 'description-button'

    const descriptionCity = document.createElement('p')
    descriptionCity.className = 'description'
    descriptionCity.textContent = `${city.description}`

    const readMoreButton = document.createElement('button')
    readMoreButton.className = 'read-more-button'
    readMoreButton.textContent = 'Read More'

    document.body.appendChild(cardContairnerCity)
    cardContairnerCity.appendChild(imageTextCity)
    imageTextCity.appendChild(cityImage)
    imageTextCity.appendChild(textImageCity)
    cardContairnerCity.appendChild(dateNameCity)
    dateNameCity.appendChild(logoShare)
    dateNameCity.appendChild(date)
    dateNameCity.appendChild(cityName)
    cardContairnerCity.appendChild(descriptionButton)
    descriptionButton.appendChild(descriptionCity)
    descriptionButton.appendChild(readMoreButton)
}

// Crea una función llamada addCities  que reciba  un array  de ciudades como parámetro y lo añada al DOM.

    function addCities(array) {
        array.forEach(e => createCityCards(e) )
    }

    addCities(arrayCities)

// Crea una función llamada removeCity que reciba una ciudad como parámetro y borre del DOM la ciudad correspondiente.

    // function removeCity(city) {
    //     const elemento = document.getElementById(`${city.id}`)
    //     elemento.remove()

    //     arrayCities = arrayCities.filter(c => c.id !== city.id);
    // }

    // removeCity(arrayCities[1])


// Crea una función llamada removeAllCity la cual eliminará todas las ciudades de la web.
// (editado)

    // function removeAllCity(array) {
    //     array.forEach(e => removeCity(e))
    // }

    // removeAllCity(arrayCities)
    




