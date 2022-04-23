# Sentencias Condicionales

Nos permiten bifurcar el flujo de nuestro código y en función de una condición podemos elegir un camino de código u otro.

## if-else-if

### Sintaxis

```js

// primera versión: solo if
    if(_condicion_){
/* BLOQUE DE CODIGO SOLO SI SE CUMPLE LA CONDICION */
    }

// segunda versión: if-else

    if(_condicion_){
   /* BLOQUE DE CODIGO SOLO SI SE CUMPLE LA CONDICION */ 
    }else{
  /* BLOQUE DE CODIGO SOLO SI NO SE CUMPLE LA CONDICION */
    }

// ultima version: if-else-if

    if(_condicion_1_){
    /* BLOQUE DE CODIGO SOLO SI SE CUMPLE LA CONDICION 1 */ 
    }else if(_condicion_2_){
    /* BLOQUE DE CODIGO SOLO SI SE CUMPLE LA CONDICION 2 */ 
    }else{
    /* BLOQUE DE CODIGO SOLO SI NO SE CUMPLE NINGUNA CONDICION PREVIA */ 
    }

```

Ejemplo real

```js

// calcular la nota en String sobre mi nota numérica

    const score = 6.3; //la salida tiene que ser BIEN
    let output;

    if(score < 5){ // false
        output = 'INSUFICIENTE';
    }else if(score >=5 && score <6){ // true && false = false
        output = 'SUFICIENTE';
    }else if(score >=6 && score <7){// true && true = true
        output = 'BIEN';
    }else if(score >=7 && score <9){
        output = 'NOTABLE';
    }else{
        output = 'SOBRESALIENTE';
    }

    console.log(output); // se muestra 'BIEN'

```

## Switch

Sirven para distinción de casos donde se compara el valor concreto de una variable.

### Sintaxis Switch

```js

    switch(_var_a_comparar_){
        case _valor_: {
            /*CODIGO A EJECUTAR EN CASO QUE _var_a_comparar_ sea igual a _valor_*/
            break; // así impedimos que JS ejecute los casos que haya debajo de este
        }
        case _valor_2_: {

        }
        ...
        default: {
            /* CODIGO A EJECUTAR SI _var_a_comparar_ no es igual a ninguno de los valores del case */
        }
    }

```

Ejemplo real

```js
// escuchar la opcion elegida por el usuario
/**
 * Paginas disponibles: HOME, LOGIN, REGISTER, CONTACTO
 */
    const option = 'LOGIN'; // Suponemos que esta variable viene de una selección del usuario

    switch(option){
        case 'HOME': {
            navegarAHome(); // esto ahora no existe, pero en un futuro puede
            break;
        }
        case 'LOGIN': {
            navegarALogin();
            break;
        }
        case 'REGISTER': {
            navegarARegistro();
            break;
        }
        case 'CONTACTO': {
            navegarAContacto();
            break;
        }
        default: {
            navegarANotFound();
        }
    }


// version equivalente con if-else
    if(option === 'HOME'){
        navegarAHome();
    }else if(option === 'LOGIN'){
        navegarALogin();
    }else if(option === 'REGISTER'){
        navegarARegistro();
    }else if(option === 'CONTACTO'){
        navegarAContacto();
    }else{
        navegarANotFound();
    }

```