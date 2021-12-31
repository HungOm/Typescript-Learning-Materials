import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
    constructor(public collection:NumbersCollection) {
    }
    sort(): void {
      const length  = this.collection.length();
  
      for (let x = 0; x < length; x++) {
        for (let y = 0; y < length - 1 - x; y++) {
          const [currentIndex, nextIndex] = [y, y + 1];
            if (this.collection.compare(currentIndex,nextIndex)) {
            this.collection.swap(currentIndex,nextIndex)
          }
        }
      }
    }
  }