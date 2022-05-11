# Bucles (loop)

Es una estrucutra de código que nos ayuda a repetir un bloque de instrucciones tantas veces como nosotros queramos.

## bucle for (for loop)

### Sintaxis

```js

/**
 * 3 fases:
 *  - inicialización: Se ejecuta antes de emepzar a dar vueltas al bucle. Muy util para declarar las variables que controlan el bucle
 *  - condicion de salida: Se ejecuta ANTES de empezar cada vuelta del bucle. Si la condicion es falsa, terminamos el bucle
 *  - actualización: Se ejecuta DESPUES de cada vuelta del bucle y es un buen sitio para actualizar las variables de control del bucle
 * 
 */
    for(let i=0; i<=7 ; i++){
        /* CODIGO QUE SE QUIERE REPETIR */
    }

```

## Ejemplo de la beca

Creemos un algoritmo para saber si un estudiante puede optar o no a una beca, para eso debera pasar  mediante prompt un total de 7 calificaciones, y se deberá imprimir por pantalla la cantidad de asignaturas aprobadas, la nota media y si puede optar o no a la beca, para saber si un estudiante puede optar a la beca deberá tener el mínimo de asignaturas aprobadas( solo puede tener dos reprobadas,  usar operador de asignación para esta operación), y una nota media superior a 6, PD:" la nota mínima para aprobar una asignatura  es de 5".

```js

    let passedSubjects = 0;
    let subjectScoreAcc = 0;

    for(let i=0; i<=6 ; i++){
        const nextSubjectScore = parseFloat(prompt('Nota'));
        passedSubjects += nextSubjectScore>=5 ? 1 : 0;
        subjectScoreAcc += nextSubjectScore;
    }

    const averageScore =  subjectScoreAcc / 7;
    const hasGrant = passedSubjects >=5 && averageScore > 6;

    document.write(`<p>${hasGrant ? 'Tu beca ha sido concedida' : 'No cumples los requisitos para la beca'}</p>`);


```

Ejemplo js.

Pinta los primeros 100 numeros. (Suponemos que empezamos por el 0)

```js
// pinta 100 veces el 1
    for(let i=0; i<100; i++){
        console.log(i);
    }

```