
import { CsvFileReader } from './CsvFileReader';
import { matchResult } from './MatchResult';


const reader = new CsvFileReader('./../football.csv');
reader.read();

let manUnitedWins = 0;

for(const match of reader.data ){

if(match[1] ==='Man United' && match[5]===matchResult.homeWin){
    manUnitedWins++;
}else if(match[2]==='Man United'&& match[5]===matchResult.awayWin){
    manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);