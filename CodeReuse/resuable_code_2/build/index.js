"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('./../football.csv');
reader.read();
// use enum to tell other engineers that this are closely relative objects 
var matchResult;
(function (matchResult) {
    matchResult["homeWin"] = "H";
    matchResult["awayWin"] = "A";
    matchResult["draw"] = "D";
})(matchResult || (matchResult = {}));
;
let manUnitedWins = 0;
for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
