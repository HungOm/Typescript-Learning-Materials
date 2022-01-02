
import { MatchReader } from './MatchReader';
import { matchResult } from './MatchResult';


const reader = new MatchReader('./../football.csv');
reader.read();

const DateOfFirstMatch = reader.data[0][0];
console.log(DateOfFirstMatch)

let manUnitedWins = 0;
for(const match of reader.data ){

if(match[1] ==='Man United' && match[5]===matchResult.homeWin){
    manUnitedWins++;
}else if(match[2]==='Man United'&& match[5]===matchResult.awayWin){
    manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);