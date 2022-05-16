# Objetos

En JS los objetos son un nuevo tipo de datos, que nos ayudan a representar conceptos de la vida real.

Ejemplo:
    Queremos representar la información de una persona.

Hasta ahora lo que haríamos sería crear tantas variables como características queramos representar.
Si queremos representar: nombre, apellidos, altura, peso, esMayorEdad

```js

const name='Alex';
const surname = 'Gonzalez';
const height = 1.8;
const peso = 89;
const isOverAge = true;

const name_1='Other';
const surname_1 = 'Other';
const height_1 = 1.8;
const peso_1 = 89;
const isOverAge_1 = true;
```

Para representar entidades y sus características de un elemento concreto (una persona concreta o un coche concreto), utilizamos la construcción de un tipo de datos llamado objeto.

```js
/* Creación e inicialización de una variable objeto (Create)*/
const alex = {
    name: 'Alex', 
    surname: 'Gonzalez',
    height: 1.8,
    weight: 89,
    isOverAge: true,
    demoObj: { // podemos incluso meter un objeto dentro de otro
        aa:'aa'
    },
    demoArr: [1,2,3], // el valor de la propiedad puede ser una lista
    demoFn: () => {} // podríamos meter una función. Esta es vacia pero puede ser cualquier funcion
};

const other = { // esto sería otra persona llamada other, bajo una misma variables
    name: 'Other',
    surname: 'demo apellido',
    height: 1,
    weight: 55,
    isOverAge: false
}
// cada propiedad tiene su tipo de datos, que puede ser primitivo o incluso un array, una funcion u otro objeto

// ¿Como accedo al nombre de la persona alex? (Read)
alex.name; // esto devuelve el valor de la propieda name en alex --> 'Alex'
other.name; // esto devuelve el valor de la propieda name en other --> 'Other'
alex['name']; // esto devuelve el valor de la propieda name en alex --> 'Alex'

// Si ya he creado el objeto. ¿Puedo añadirle más propiedades? --> SI
alex.nuevaProp = 'Esto es el valor de la nueva prop';
alex[`nuevaPropStr`] = 'Esto es el valor de la otra forma de crear una nueva prop';

// ¿Que pasa si el nombre de la propiedad existe? --> Actualizando el valor (Update)
alex.name='Nuevo valor'; // alex.name ya no vale 'Alex', a partir de aqui vale 'Nuevo valor'
alex['name']='Nuevo valor';

// ¿Como puedo eliminar una propiedad de un objeto?
delete alex.name; // esto elimina la propiedad name del objeto

```

```js

const seatLeon = {
    brand: 'Seat',
    model: 'Leon',
    fab: 2016,
    color: '#3433FF',
    img: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/01/seat-leon-2590117.jpg?itok=91wEEtNQ'
};

const teslaS = {
    brand: 'Tesla',
    model: 'S',
    fab: 2020,
    color: '#594939',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1200px-2018_Tesla_Model_S_75D.jpg'
};

const carList = [seatLeon, teslaS]; // Array de objetos

// ahora quiero filtrar la lista de coches y quedarme con los coches menores a 2020
carList.filter(c => c.fab < 2020); // El resultado es ==> [{marca: 'Seat', modelo:'Leon' ...}]

// ahora quiero filtrar por modelo: El modelo empiece por S
carList.filter(c => c.model.startsWith('S'));// El resultado es ==> [{marca: 'Tesla', modelo:'S', fab:2020 ...}]

carList.some(c => c.color === '#594939' && c.model==='S');

// pintar un teslaS
document.write(`
    <h1>${teslaS.model}</h1>
    <img src="${teslaS.img}" />
    <div class="circle" style="background-color:${teslaS.color};"/>
`);

// pintar un coche genérico
// car: Objeto de tipo coche
function printCarToHTML(car){ // dado un coche lo pinta en el HTML
    document.write(`
      <div class="car__container">
        <h1>${car.model}</h1>
        <p>${car.brand}</p>
        <img src="${car.img}" />
        <div class="circle" style="background-color:${car.color};"/>
      </div>
    `);
}

// quiero pintar toda la lista de coches
carList.forEach(c => printCarToHTML(c)); // pintar todos los coches de la lista

```