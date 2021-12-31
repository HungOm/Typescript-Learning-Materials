"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numArray = new NumbersCollection_1.NumbersCollection([10, -3, 23, 3, 4, 5, 7, 2, 1]);
const character = new CharactersCollection_1.CharactersCollection('Xaayb');
const sorter = new Sorter_1.Sorter(numArray);
sorter.sort();
console.log(sorter.collection);
const sortCharacter = new Sorter_1.Sorter(character);
sortCharacter.sort();
console.log(sortCharacter.collection);
// Note  =>
// 1) Typeof - number, string,boolean, symbol
// 2) instanceof  - every other value that is created with a constructor function
