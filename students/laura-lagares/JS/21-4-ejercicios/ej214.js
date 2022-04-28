// Crear una aplicación que imprima 50 p's con el texto hello world loops

let hello = 50;
for(let i=0; i < 50 ; i++){
document.write(`<p>Hello world loops</p>`)
}

// Crear una aplicación que imprima 37 p's con los textos numerados de la siguiente manera:
// 1 hello world loop
// 2 hello world loop
// 3 hello world loop
// ...
// 37 hello world loop

let numHello = 37;
for(let i=1; i<=37; i++){
    document.write(`<p>${i} Hello world loop</p>`)
}

// Crear una aplicación que solicite al usuario un número. Pintar tantos círculos como haya dicho el usuario. Dentro del círculo se encontrará centrado el número del círculo que es. Los círculos empiezan por 1 

let numero = parseInt(prompt('Introduce un número'));
for(let i=1; i<=numero; i++){
    document.write(`
    <div class="circle">
    <p>${i}</p>
    </div>
    `)
};


