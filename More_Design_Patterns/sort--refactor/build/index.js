"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// characters 
console.log("======== Numbers collection ==========");
const numArray = new NumbersCollection_1.NumbersCollection([10, -3, 23, 3, 4, 5, 7, 2, 1]);
numArray.sort();
console.log(numArray.data);
console.log("========character collection ==========");
const character = new CharactersCollection_1.CharactersCollection('Xaayb');
character.sort();
console.log(character.data);
console.log("======== LinkedList collection ==========");
//linkedList
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-10);
linkedList.add(4);
linkedList.sort();
linkedList.print();
// Note  =>
// 1) Typeof - number, string,boolean, symbol
// 2) instanceof  - every other value that is created with a constructor function
