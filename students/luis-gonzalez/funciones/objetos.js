/*
//1.-Crear un objeto que tenga dos propiedades ('demo'  de tipo string)  y ('hello' de tipo boolean). Los valores serán 'hola' para demo y true para 'hello'.

let obj ={
    demo: 'hola',
    hello:true
}
document.write(obj.demo);
document.write(obj.hello)
//=======================================
*/

/*
//2.-Cambiar el valor de 'hello' a false.

let obj2 ={
    demo: 'hola',
    hello:true
}
obj2.hello=false;
document.write(obj2.hello);

//=======================================
*/

/*
//3.-Crear un objeto que tenga dos propiedades , entre ellas una  de tipo number, Imprime por pantalla el objeto y luego imprime por pantalla solo la propiedad de tipo number. Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects.(easy).
const obj3 = {
  prop1: 18,
  prop2: "listo",
  prop3: true,
  prop4: ["a", "b", "c"],
  prop5: null,
  prop6: undefined,
  prop7: (valores = { color: "verde", longitud: 245 }),
  prop8: function pago(a,b) {
   let sum= a + b;
   document.write(sum);
  }  
};

document.write(`<p>${obj3.prop1}</p>`);
document.write(`<p>${obj3.prop2}</p>`);
document.write(`<p>${obj3.prop3}</p>`);
document.write(`<p>${obj3.prop4}</p>`);
document.write(`<p>${obj3.prop5}</p>`);
document.write(`<p>${obj3.prop6}</p>`);
document.write(`<p>${obj3.prop7.color}</p>`);
//document.write(`<p>${obj3.prop8.pago(1,2)}</p>`);

//=======================================
*/


//4.-Crea una función que dado un string con una hora (ej: 14:36:57) devuelva un objeto con la propiedad hora, minutos y segundos e imprimelo por pantalla.(medium)

let str= '17:20:15';
/*
function hora(h){
    let hor = h.split(":");
    let objeto ={
        hora:hor[0],
        min:hor[1],
        sec:hor[2],
        
    }
    return objeto
}
*/

function hora(){
    let arrar =  str.split(':')
let nuevo  = Object.assign({hora:arrar[0], minutos:arrar[1], segundos:arrar[2]})
console.log(nuevo);

 document.write(Object.entries(nuevo));
 };
 hora()





//5.-Crea una función que imprima por pantalla el 'nombre: valor' de cada propiedad del objeto  (buscar mertodos de objeto ejmp Object Keys).(easy).

//6.-Copia en tu codigo el siguiente array de paises, y crea las sigueintes funciones que pinte en Cards  los paises.
// - Una funcion que pinta en cards los paises cuyo nombre en ingles y español son iguales.
// - Una funcion de devuelva los paises cuyo nombre temrine con una S.
// - Una funcion que encuentre el pais con el nombre mas largo.
