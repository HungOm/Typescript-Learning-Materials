// import fs from 'fs';
// import path from 'path';
// // import { matchResult } from './MatchResult';
// // import { dateStringToDate } from './utils';
// // import { matchResult } from './MatchResult';


// // intro to Generic data <TypeOfData>
// export abstract class  CsvFileReader<T>{
//     data:T[]= [];
//     constructor(public filename:string){

//     }
//     abstract mapRow(row: string[]):T


//     read():void{
//         this.data =fs.readFileSync(path.resolve(__dirname,this.filename),{
//             encoding:'utf-8',
//         })
        
//         .split('\n')
//         .map((row:string):string[]=>row.split(','))
//         .map(this.mapRow)
// }



// }
import fs from 'fs';
import path from 'path';
import { matchResult } from './MatchResult';
import { dateStringToDate } from './utils';
// import { matchResult } from './MatchResult';

// tuple type 
// type MatchData = [Date,string,string,number,number,matchResult,string]

export class  CsvFileReader{
    data:string[][]= [];
    constructor(public filename:string){

    }

    read():void{
        this.data =fs.readFileSync(path.resolve(__dirname,this.filename),{
            encoding:'utf-8',
        })
        
        .split('\n')
        .map((row:string):string[]=>row.split(','))
    }
}