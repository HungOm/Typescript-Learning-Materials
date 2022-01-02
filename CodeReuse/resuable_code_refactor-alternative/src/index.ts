
import { MatchReader } from './MatchReader';
import { matchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';


const csv_reader = new CsvFileReader('./../football.csv');
const dataReader = new MatchReader(csv_reader);
dataReader.load();
console.log(dataReader.matches)

let manUnitedWins = 0;
for(const match of dataReader.matches){

if(match[1] ==='Man United' && match[5]===matchResult.homeWin){
    manUnitedWins++;
}else if(match[2]==='Man United'&& match[5]===matchResult.awayWin){
    manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);