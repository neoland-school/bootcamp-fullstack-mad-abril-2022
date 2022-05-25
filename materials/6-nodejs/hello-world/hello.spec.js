import {add, palindrome, demoPromise, writeHelloInFile, readHelloFromFile, removeHello} from './hello.js';

it('Hello world testing with jest', () => {
    // aquí va el código que queremos testar
    // fase 1: preparar el entorno de pruebas
    // fase 2: ejcucion del codigo a testear
    // fase 3: comprobar el resultado   
    expect(1).toBe(1);
});


it('Given two numbers returns its add', () => {
    // fase 1
    const a = 4;
    const b = 44;
    // fase 2
    const result = add(a,b);
    // fase 3
    expect(result).toBe(48);
});

it('Given two negative numbers returns a negative num with its add', () => {
    // fase 1
    const a = -10;
    const b = -11;
    // fase 2
    const r = add(a,b);
    // fase 3
    expect(r).toBeLessThan(0);
    expect(r).toBe(-21);
});

it('Given a not number param should return NaN', () => {
    const a = 'hola';
    const b = 44;
    const r = add(a,b);
    expect(r).toBeNaN();
});

it('Given more than two params should return its add', () => {
    const a=4,b=5,c=10, d=14;
    const r = add(a,b,c,d);
    expect(r).toBe(33);
});

it('Given more than two params and one of them is not a Number should return NaN', () => {
    const a=true,b=5,c=10, d=14;
    const r = add(a,b,c,d);
    expect(r).toBeNaN();
})


it('Given "radar" string should be palidrome', () => {
    const r = palindrome('radar');
    expect(r).toBe(true);
});

it('Given "hola" string should not be palidrome', () => {
    const r = palindrome('hola');
    expect(r).toBe(false);
});


it('Given a palindrome sentence with uppercase an accent should detect the palidrome', () => {
    const r = palindrome('Dábale arroz a la zorra el abad');
    expect(r).toBe(true);
});


it('Example testing async code', async () => {
    // const r = demoPromise();
    // r.then(d => expect(d).toBe('Hola'))
    const d = await demoPromise();
    expect(d).toBe('Hola');
});


describe('Demo File System' , () =>{

    afterEach(async () => {
        // debo eliminar el archivo para asegurarme que no existe 
        try {
            await removeHello()
        }catch(err){}
        
    });

    it('Calling writeHelloInFile it should write "Hello" in the hello.txt file', async () => {
        // fase 2
        await writeHelloInFile();
        // fase 3
        const r = await readHelloFromFile();
        expect(r).toBe('Hello');
    })
    
    it('Reading hello.txt Given a hello.txt file into os fs, "Hello" should be returned', async () => {
        await writeHelloInFile(); // escribo primero para asegurarme que cumplo mi precondicion
        // fase 2
        const r = await readHelloFromFile();
        expect(r).toBe('Hello');
    })
    
    it('Reading hello.txt, When no hello.txt file in os, "Not Found" should be returned', async () => {
        // fase 2
        const r = await readHelloFromFile();
        expect(r).toBe('Not Found');
    })
});

