// En un documento html vacio, crea un H2, luego ponle un texto 
// y luego una clase que cambie de color, 
// usando los métodos del objeto Document.


                // const div = document.createElement("div");   
                // div.textContent = "Hola a todos";
let etiquetas = document.createElement("h2");  //creo elemento
etiquetas.textContent = "Titulo H2";  //Añado texto
etiquetas.style = "color: green";   //Añado estilo color
document.body.appendChild(etiquetas);   //imprime en el hijo del body

            


// El h2 creado previamente mételo dentro 
// de un div usando los métodos del objeto Document.(easy)

let div = document.createElement("div");
div.appendChild(etiquetas)
document.body.appendChild(div);


// Elimina el div anterior con el metodo indicado desde javascript,  
// ahora crea un nuevo  div el cual tendrá dentro un enlace a  Google 
// con un target _blank, un párrafo y una  lista de marca de coches 
// ('SEAT', FORD Y CITROEN), usar metodos del objeto Document (create element....)

/*
1-elimina el div anterior
2- crea un nuevo div, a, target_blank, p, array
*/

document.querySelector("div");  //selecciono div
div.remove();                   //borro div


let newDiv = document.createElement("div"); // creo el contenedor div

let link = document.createElement("a");        //creo el enlace
    link.setAttribute("href","https://www.google.es/");     //le doy un atributo href con valor google.com
    link.setAttribute("target", "blank");   //le doy un atributo target con valor blank, (abrir en nueva pestaña)
    link.textContent = "Enlace";        //le pongo texto

let parrafo = document.createElement("p");
    parrafo.textContent = "Hola"; 
    
let cars = document.createElement("ul");  //creo una lista desordenda
    

    let seat = document.createElement("li");    //elementos de li individuales
    seat.textContent = "SEAT";              //texto de ese li individual
    let ford = document.createElement("li");
    ford.textContent = "FORD";
    let citroen = document.createElement("li");
    citroen.textContent = "CITROEN";  


        cars.appendChild(seat);
        cars.appendChild(ford);
        cars.appendChild(citroen);

        newDiv.appendChild(link);
        newDiv.appendChild(parrafo);

        newDiv.appendChild(cars);

            
        document.body.appendChild(newDiv);
    

    // var allParas = document.getElementsByTagName("li");

    
   
    
    // En un documento html crea un UL con un Atributo llamado "dom-demo" ,
    //  dentro del UL deben ir 4 LI,  tendrán una class llamada "item",
    //   dos de ellos tendrán además  otra class llamada "special", 
    //   un LI tendrá el atributo dom-demo  y por ultimo 
    //   el cuarto elemento debe tener un id llamado "cuarto_elemento". 
    //   El ejercicio será el siguiente:(medium)
/*
-crea un ul , con atributo dom-demo
- cuatro li class item
*/




    let element = document.createElement("ul");  //creo una lista desordenda
        element.setAttribute("dom-demo", ""); 
        
    let li1 = document.createElement("li"); 
    li1.setAttribute("class","item");
    li1.textContent = "BUENAS";
    
    let li2 = document.createElement("li"); 
    li2.setAttribute("class","item special");
    li2.textContent = "MUYBUENAS";

    let li3 = document.createElement("li"); 
    li3.setAttribute("class","item special");
    li3.setAttribute("dom-demo","");
    li3.textContent = "MAGNIFICAS";

    let li4 = document.createElement("li"); 
    li4.setAttribute("class","item");
    li4.setAttribute("id","cuarto_elemento");
    li4.textContent = "MARAVILLOSAS";

    element.appendChild(li1);
    element.appendChild(li2);
    element.appendChild(li3);
    element.appendChild(li4);

    document.body.appendChild(element);

    
  // Recuperar todos los li de la página y muéstralos por consola.

  const obtener = document.getElementsByTagName("li");
    console.log(obtener);

      // CODIGO FAIL
                // li1.getElementsByTagName(li);
                // li2.getElementsByTagName(li);
                // li3.getElementsByTagName(li);
                // li3.getElementsByTagName(li)


  // Recuperar todos los elementos con class "item" y muéstralos por consola.

    const getClass = document.getElementsByClassName("item");
    console.log(getClass);

  
// Recuperar el elemento con id="cuarto_elemento" y muéstralo por consola.

    const getId = document.getElementById("cuarto_elemento");
    console.log(getId);

  
// Recuperar los elementos que tengan atributo  dom-demo y muéstralo por consola (getAtribu....).

        // CODIGO FAIL
                     
                 // const gettClass = document.getElementsByClassName("item special");
                 // const align = document.getAttribute("dom-demo");


    // const atributo = li3.getAttribute("dom-demo"); //li3 es el nombre de variable donde se encuentra el atributo dom-demo
    // console.log(atributo);

    const dom = document.querySelectorAll("[dom-demo]");
    console.log(dom);


// Cambiar el texto de todos los elementos  que tengan la clase "special" 
// a "texto de la clase Special cambiado".

        
                const getClassSpecial = document.getElementsByClassName("special");
                getClassSpecial.textContent = "texto de la clase Special cambiado";
                console.log(getClassSpecial);
                
                // CODIGO FAIL
                        // const specialClass= document.querySelector("special");
                        // special.textContent = "texto de la clase Special cambiado.";
                        // console.log(specialClass);

                        // document.body.appendChild(element);


// Cambiar el tamaño de letra usando estilo en linea STYLE, 
// de los elemento con atributo  dom-demo.


    // let atributo2 = document.querySelectorAll("dom-demo");
    // console.log(atributo2);
    // let atributo2 = li3.getAttribute("dom-demo"); 
    // atributo2.style.fontSize = large;
    

    dom.forEach(v => v.style.fontSize = "4.9rem");
    
    


// Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.


let li5 = document.createElement("li"); 
    li5.setAttribute("id","CREADO_CUSTOM");
    li5.textContent = "Texto Nuevo";

    element.appendChild(li5);
    document.body.appendChild(element);
    
    

   
    // ejer 5 Crea un documento HTML con un body vacío,  ahora crea un objeto de tipo 
    // city que contenga {imagen, nombre de la ciudad, descripción}, 
    // repite el proceso con varias ciudades de tu elección y con 
    // ello crea un array de ciudades, ahora vamos a darle vida en nuestro html:(hard)


const html = document.createElement("hola.hmtl");
let city = {
        name: 'London', 
        country: 'England',
        moment: '4 weeks ago',
        description: 'Lorem ipsum',
        backgroundColor: '#FE0C70',
        img: 'https://neoland-school.slack.com/files/U024PKB36GL/F03CWBLTRT9/image.png'

};

let arrayCiudades = ['Salamanca','Madrid','Málaga'];

// cityList.forEach(city => printCityToHTML(city)); 


    // ejer 6 Crea una función llamada addCities  que reciba  un array  de 
    // ciudades como parámetro y lo añada al DOM.

    

    //  ejer 7 Crea una función llamada removeCity que reciba una ciudad como parámetro
    //  y borre del DOM la ciudad correspondiente.



    // ejer 8 Crea una función llamada removeAllCity la cual 
    // eliminará todas las ciudades de la web.