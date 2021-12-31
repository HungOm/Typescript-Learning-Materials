"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-10);
linkedList.add(4);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
// Note  =>
// 1) Typeof - number, string,boolean, symbol
// 2) instanceof  - every other value that is created with a constructor function
