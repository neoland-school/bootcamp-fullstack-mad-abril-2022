// Vamos a crear ciudades (podéis elegir las ciudades que queráis). Una ciudad se pinta como se muestra en la imagen. Por tanto:
// a.-Definir las propiedades que deben tener mis ciudades para poder ser pintadas en nuestro sistema. (Esto lo podéis hacer en un comentario)
// b.-Crear 4 objetos de ciudades que tengan la estructura definida y darle valores concretos (Por ejemplo Madrid, Valencia, Lima, ...). Podéis elegir vuestras ciudades favoritas.
// c.-Crear una lista con las 4 ciudades.
// d.-Pintar en el HTML las 4 ciudades.




//DATOS
//Ciudades:
//Madrid, Zaragoza, Guayana
//Caracteristicas: Nombre, pais, Area, Población, Clima, Descripción, imagen.

// Crear un objeto para cada ciudad.


const madrid = {
    nombre: 'Madrid',
    pais:'España',
    area:6779,
    poblacion:3305408,
    clima: 'Mediterraneo continental',
    descripcion: 'Madrid es un municipio y una ciudad de España. La localidad, con categoría histórica de villa,9​ es la capital del Estado10​ y de la Comunidad de Madrid.',
    imagen:'https://static9.depositphotos.com/1056393/1201/i/600/depositphotos_12016749-stock-photo-panoramic-view-of-gran-via.jpg'
    }
    
    const zaragoza = {
        nombre: 'Zaragoza',
        pais:'España',
        area:	97378,
        poblacion:675301,
        clima: 'Mediterraneo continental',
        descripcion: 'Zaragoza es una ciudad y un municipio de España, capital de la provincia homónima y de la comunidad autónoma de Aragón. Perteneciente a la Comarca Central, tiene un régimen legal especial como capital de Aragón.',
        imagen:'https://a.cdn-hotels.com/gdcs/production10/d1442/77b32160-68ce-11e8-8a0f-0242ac11000c.jpg?impolicy=fcrop&w=800&h=533&q=medium'
        }
    
        const guayana = {
            nombre: 'Ciudad Guayana',
            pais:'Venezuela',
            area:		560,
            poblacion:820780,
            clima: 'tropical',
            descripcion: 'Ciudad Guayana es una ciudad del estado Bolívar, en Venezuela. En el año 2020 contaba con una población de 820 780 habitantes,2​ siendo la sexta ciudad más poblada de Venezuela.',
            imagen:'https://elucabista.com/wp-content/uploads/2018/02/aliviadero_del_embalse_macagua.jpg'
            }
    
            const cartagena = {
                nombre: 'Cartagena de Indias',
                pais:'Colombia',
                area:6091,
                poblacion:1028736,
                clima: 'Semiarido calido',
                descripcion: '<b>Cartagena de Indias, oficialmente Distrito Turístico y Cultural de Cartagena de Indias abreviado Cartagena de Indias, D. T. y C., es la capital del departamento de Bolívar, al norte de Colombia.',
                imagen:'https://www.newsdigitales.com/wp-content/uploads/2020/12/Cartagena_Colombia.jpg'
                };
    
    
                let listCity = [madrid, zaragoza, guayana, cartagena];
                
    //console.log(typeof listCity[3]);
    
    function cards(para){
    
        return para.map(v=>{

            document.write(`<div class="grande">`);
            document.write(`<div class="foto">
        <img src="${v.imagen}"/>
            </div>
            `);
        
            document.write(`<div class="centro">`); 
            document.write(`<div>
            <h1>${v.nombre}</h1>
            <h4>${v.pais}</h4>
            
            <p><b>Descripción:</b> ${v.descripcion}</p>
            </div>
            `)   
            document.write(`</div>`);
        
            document.write(`<div class="pie"> 
            
            <div class="part">Area: ${v.area}Km</div>
            <div class="part">Población: ${v.poblacion} Personas</div>
            <div class="part">Clima: ${v.clima}</div>
          
            </div>`);
                
    
    })
    
    }
    cards(listCity)
    document.write(`</div`);