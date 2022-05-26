import fs from 'fs/promises';

export const fileLS = async path => {
    try {
        const files = await fs.readdir(path, {withFileTypes: true});
        // devolvemos un array de SOLO archivos (filter) y SOLO su nombre (map)
        return files.filter(f => f.isFile()).map(f => f.name);
    } catch (err) {
        // distinguimos los casos del error
        switch(err.code){
            case 'ENOENT': throw new Error('NON EXISTING');
            case 'ENOTDIR': throw new Error('NO DIRECTORY');
            default: throw new Error('GENERIC EXCEPTION');
        }
    }
}
