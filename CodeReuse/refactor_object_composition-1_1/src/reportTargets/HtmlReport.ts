import {OutPutTarget} from '../summary';
import fs from 'fs';
import path from 'path';


export class HtmlReport implements OutPutTarget{
    print(report:string):void{
        const html = `
        <div>
        <h1>Analysis Output</h1>
        <h1>${report}</h1>
        </div>
        `

        fs.writeFileSync(path.resolve(__dirname,'./../../report.html'),html)
    };

}