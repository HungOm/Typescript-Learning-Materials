"use strict";
// import fs from 'fs';
// import path from 'path';
// // import { matchResult } from './MatchResult';
// // import { dateStringToDate } from './utils';
// // import { matchResult } from './MatchResult';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// import { matchResult } from './MatchResult';
// tuple type 
// type MatchData = [Date,string,string,number,number,matchResult,string]
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(path_1.default.resolve(__dirname, this.filename), {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => row.split(','));
    }
}
exports.CsvFileReader = CsvFileReader;
