
import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('./../football.csv');
reader.read();

// use enum to tell other engineers that this are closely relative objects 
enum matchResult {
    homeWin='H',
    awayWin='A',
    draw ="D"
};

let manUnitedWins = 0;

for(const match of reader.data ){

if(match[1] ==='Man United' && match[5]===matchResult.homeWin){
    manUnitedWins++;
}else if(match[2]==='Man United'&& match[5]===matchResult.awayWin){
    manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);