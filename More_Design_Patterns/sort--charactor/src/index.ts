import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";


const numArray = new NumbersCollection([10, -3, 23, 3, 4, 5, 7, 2, 1]);
const character = new CharactersCollection('Xaayb')
const sorter = new Sorter(numArray);
sorter.sort();
console.log(sorter.collection);
const sortCharacter = new Sorter(character);
sortCharacter.sort()
console.log(sortCharacter.collection)

// Note  =>
// 1) Typeof - number, string,boolean, symbol
// 2) instanceof  - every other value that is created with a constructor function
