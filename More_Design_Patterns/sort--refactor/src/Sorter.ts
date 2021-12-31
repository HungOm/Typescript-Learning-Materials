export abstract class Sorter {
  // abstract define something that will exist in the future, e.g => on child class 
  abstract compare(leftIndex:number,rightIndex:number):boolean
  abstract swap(leftIndex:number,rightIndex:number):void
  abstract length:number;


    sort(): void {
      const {length}  = this;
  
      for (let x = 0; x < length; x++) {
        for (let y = 0; y < length - 1 - x; y++) {
          const [currentIndex, nextIndex] = [y, y + 1];
            if (this.compare(currentIndex,nextIndex)) {
            this.swap(currentIndex,nextIndex)
          }
        }
      }
    }
  }