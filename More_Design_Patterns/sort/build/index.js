"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const sorter = new Sorter_1.Sorter(new NumbersCollection_1.NumbersCollection([10, -3, 23, 3, 4, 5, 7, 2, 1]));
sorter.sort();
console.log(sorter.collection);
// Note  =>
// 1) Typeof - number, string,boolean, symbol
// 2) instanceof  - every other value that is created with a constructor function
