"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const CsvFileReader_1 = require("./CsvFileReader");
const csv_reader = new CsvFileReader_1.CsvFileReader('./../football.csv');
const dataReader = new MatchReader_1.MatchReader(csv_reader);
dataReader.load();
console.log(dataReader.matches);
let manUnitedWins = 0;
for (const match of dataReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.matchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.matchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
