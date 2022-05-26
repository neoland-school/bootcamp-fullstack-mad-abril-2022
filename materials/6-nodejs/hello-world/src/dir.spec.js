import { fileLS } from "./dir";
import fs from 'fs/promises';

const FOLDER_PATH = './test';
const NON_EXIST_FOLDER_PATH = './not_exist_92839481';

const createTestFolder = async () => await fs.mkdir(FOLDER_PATH);

const addFilesToTestFolder = async n => {
    /* Junio Version */
    /*
        for(let i=1; i<=n; i++){
            await fs.writeFile(`${FOLDER_PATH}/test_file_${i}.txt`, '');
        }
    */

    /* SENIOR VERSION */
    // devolvemos un array de promesas
    const filesPromises = Array(n)
                            .fill(0)
                            .map(async (_v,i) => await fs.writeFile(`${FOLDER_PATH}/test_file_${i+1}.txt`, ''));
    await Promise.allSettled(filesPromises); // esperamos todas las promesas a la vez
}

const addDirToTestFolder = async () => await fs.mkdir(`${FOLDER_PATH}/test_folder`);

const cleanTest = async () => await fs.rm(FOLDER_PATH, { recursive: true, force: true });

beforeEach(() => createTestFolder()); // antes de cada test preparo el test folder

afterEach(() => cleanTest()); // despues de cada test elimino la carpeta de pruebas

it('Given an existing directory with child files, it should return its files list',async () => {
    // fase 1
    await addFilesToTestFolder(3);
    // fase 2
    const r = await fileLS(FOLDER_PATH);
    // fase 3
    expect(r).toEqual(['test_file_1.txt','test_file_2.txt', 'test_file_3.txt']);
});

it('Given a non existing directory, it should throw a NON EXISTING exception', async () => {
    //fase 2
    await expect(async () => await fileLS(NON_EXIST_FOLDER_PATH))
           .rejects
           .toThrowError(new Error('NON EXISTING'));
});

it('Given an empty directory, it should return an empty list', async () => {
    // fase 2
    const r = await fileLS(FOLDER_PATH);
    // fase 3
    expect(r).toEqual([]);
});

it('Given a directory with child files and directories, it should return only the list of files', async () => {
    // fase 1
    await addFilesToTestFolder(2);
    await addDirToTestFolder();
    // fase 2
    const r = await fileLS(FOLDER_PATH);
    // fase 3
    expect(r).toEqual(['test_file_1.txt','test_file_2.txt']);
});

it('Given a file, it should return a NO DIRECTORY exception',async () => {
    // fase 1
    await addFilesToTestFolder(1);
    // fase 2 y 3
    await expect(async() => await fileLS(`${FOLDER_PATH}/test_file_1.txt`))
            .rejects
            .toThrowError(new Error('NO DIRECTORY'))
});
