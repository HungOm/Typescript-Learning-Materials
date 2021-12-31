import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
const sorter = new Sorter(new NumbersCollection([10, -3, 23, 3, 4, 5, 7, 2, 1]));
sorter.sort();
console.log(sorter.collection);

// Note  =>
// 1) Typeof - number, string,boolean, symbol
// 2) instanceof  - every other value that is created with a constructor function
