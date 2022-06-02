import fs from 'fs/promises';

export const FILE_PATH = './data/tasks.json';


export const readTasks = async () => {
    const tasksStr = await fs.readFile(FILE_PATH, {encoding: 'utf-8'});
    return JSON.parse(tasksStr); // paso 1
}