"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const matches = fs_1.default.readFileSync(path_1.default.resolve(__dirname, './../src/football.csv'), {
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => row.split(','));
const homeWin = 'H';
const awayWin = 'A';
let manUnitedWins = 0;
for (const match of matches) {
    if (match[1] === 'Man United' && match[5] === homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
