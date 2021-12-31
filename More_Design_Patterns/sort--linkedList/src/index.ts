import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";



const linkedList = new LinkedList()
linkedList.add(500);
linkedList.add(10);
linkedList.add(-10);
linkedList.add(4)
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
// Note  =>
// 1) Typeof - number, string,boolean, symbol
// 2) instanceof  - every other value that is created with a constructor function
