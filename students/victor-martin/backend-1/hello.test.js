import Suma from './suma.js'
import WriteHelloInFile from './empty.js'
import fs from 'fs/promises';
import CreateFile from './functions.js'
import ReadHello from './functions.js'

// 1 Prepara el entorno para hacer testing y crea una funcion en 
// testing que devuelva un hola mundo.

it.skip('Hello world testing jest', () =>  {
    expect('hola mundo').toBe('hola mundo')
})

// 2. Crea una funcion que reciba dos números y devuelva su suma, 
// esta funcion debera estas testeada.

test.skip('sumar 1 + 2 es igual a 3', () => {
    expect(Suma(1, 2)).toBe(3);
  });

  // 3. Crea una funcion que cree un archivo vacío con el nombre 
//   hello.json y hazle un test para ver si funciona.

test.skip(WriteHelloInFile, () => {
    expect().toBe();
  });




//   const addFilesToTestFolder = asyncfor(let i=1:; ix=; i++){
//   await fs.writeFile(`${FOLDER_PATH}/test_fi,e_${i}.txt`,'')
//   }
//   //SENIOR VERSION
//   //devolvemos en array de promesas

//     const filesPromises = Array(n)
//                     .fill(0)
//                     .map(async (_v_i) => await fs.writeFile(`${FOLDER_PATH}/test_file_${i}.txt`))

//   const CleanTest = async () => await fs.rmdir(FOLDER_PATH);

//   beforeEach(() => createTestFolder());
//   afterEach(() => cleanTest());

//   it.skip('Given an existing directory with child files, it should return its files list',() => {
//     //fase 1
//     await addFilesToTestFolder(3);
//     // fase 2
//     const r = await fileLS (FOLDER_PATH);
//     //fase 3
//     expect(r).toEqual(['test_file_1.txt', 'test_file_2.txt', 'test_file_3.txt']);

//   });

//   run|debug
  
//   it.skip('Given an empty directory, it should return an empty list', async () => {
//     // fase2
//     const r = await fileLS(FOLDER_PATH);
//     //fase 3
//     expect(r).toEqual([]);
//   });

//   run|debug
  
//   it.skip('Given a file, it should return a NO DIRECTORY exception',  async() => {
//     //fase 1
//     await addFilesToTestFolder(1);
//     // fase2 y
//     espect(async() => await )    
//   });


// 4. Crea una funcion que escriba en un archivo hello.json los datos 
//  ({"name":"hello-world-nodejs","version":"1.0.0"} ). 
//  Construir 1 solo caso de prueba:

                                    //  test(WriteHelloInFile, () => {
                                    //    expect().toBe();
                                    //  });

// const filePath = './hello.json';
// const fd = (fs.open(filePath, a));

test.skip(CreateFile, () => {
  expect(CreateFile('')).toBe('');
});

