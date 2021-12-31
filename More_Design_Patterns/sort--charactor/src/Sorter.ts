
interface Sortable{
    length:number;
    compare(leftIndex:number,rightIndex:number):boolean;
    swap(leftIndex:number,rightIndex:number):void;  
}

export class Sorter {
    constructor(public collection:Sortable) {
    }
    sort(): void {
      const {length}  = this.collection;
  
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