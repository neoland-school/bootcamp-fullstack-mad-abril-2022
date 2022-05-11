## Bucles


# for loop

### sintaxis

for(x;x;x){

}

for (fase inicial se ejecuta una vez;
fase de condicion va en expresion booleana indica la condición para que el bucle continue;
fase de actualización suma cosas a la variable de control)
{
aqui bloque de codigo q se quiere repetir
}

    for(let i=0; i<=7; i++){
        aqui codigo q se quiere repetir
    }


pinta los primeros 100 numeros:
// si empiezo en 1 seria 100 el otro
// i++ suma uno a la primera variable

    for(i=0; i<101; i++){
        console.log(i); // en la primera vuelta i ===0, en la segunda i ===1  etc etc
    }

si incremento de dos en dos, solo me pinta los pares, he de empezar por par.

    for(i=0; i<100; i+=2){

        console.log(i);
    }



