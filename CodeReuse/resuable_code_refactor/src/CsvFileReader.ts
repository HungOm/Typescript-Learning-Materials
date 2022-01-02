import fs from 'fs';
import path from 'path';
import { matchResult } from './MatchResult';
import { dateStringToDate } from './utils';
// import { matchResult } from './MatchResult';

// tuple type 
type MatchData = [Date,string,string,number,number,matchResult,string]

export class  CsvFileReader{
    data:MatchData[]= [];
    constructor(public filename:string){

    }

    read():void{
        this.data =fs.readFileSync(path.resolve(__dirname,this.filename),{
            encoding:'utf-8',
        })
        
        .split('\n')
        .map((row:string):string[]=>row.split(','))
        .map((row:string[]):MatchData=>{
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5]as matchResult,
                row[6]
            ]
        })
    }
}