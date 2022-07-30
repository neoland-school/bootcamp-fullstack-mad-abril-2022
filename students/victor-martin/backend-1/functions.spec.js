import { CreateFile } from "./functions";
import { ReadFile } from "./functions";

describe('Demo hello.json', () => {

    it('Create file, it should return its file read ', async () => {
            //fase 1
            await CreateFile();
            // fase 2
            const r = await ReadFile ();
            //fase 3
            expect(r).toBe('');
    })
    
    })



