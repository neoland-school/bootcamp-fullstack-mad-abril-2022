
const n = parseInt(prompt('Introduzca un número'));

for (let i = 1; i <= n; i+=2) {
    document.write(`
        <div class="circle">
            ${i}
        </div>
    `);
}
