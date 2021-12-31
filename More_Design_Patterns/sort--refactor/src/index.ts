import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


// characters 
console.log("======== Numbers collection ==========")
const numArray = new NumbersCollection([10, -3, 23, 3, 4, 5, 7, 2, 1]);
numArray.sort();
console.log(numArray.data);

console.log("========character collection ==========")

const character = new CharactersCollection('Xaayb');
character.sort()
console.log(character.data)


console.log("======== LinkedList collection ==========")
//linkedList
const linkedList = new LinkedList()
linkedList.add(500);
linkedList.add(10);
linkedList.add(-10);
linkedList.add(4)
linkedList.sort();
linkedList.print();
// Note  =>
// 1) Typeof - number, string,boolean, symbol
// 2) instanceof  - every other value that is created with a constructor function
