import {printSquare} from './test-io.js';



it('Given a positive number, program should exit printing its square', () => {
    printSquare();
    process.stdin.write('2\n');
    process.stdout.on('data', chunk => console.log(chunk))
})