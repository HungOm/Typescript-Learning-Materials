import { OutPutTarget } from "../summary";


export class ConsoleReport implements OutPutTarget{
    print(report:string):void{
        console.log(report)
    }
}