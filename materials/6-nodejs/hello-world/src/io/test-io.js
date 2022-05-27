import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export const printSquare = () => {
    rl.question('Introduzca número:', n => console.log(n**2));
}

