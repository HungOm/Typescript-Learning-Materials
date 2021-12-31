export class NumbersCollection{
    constructor(public data:number[]){
    }

    length():number{
        return this.data.length
    }

    compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex]>this.data[rightIndex];

    }

    swap(leftIndex: number, rightIndex: number): void {
        this.data[leftIndex] = this.data[leftIndex] + this.data[rightIndex];
        this.data[rightIndex] = this.data[leftIndex] - this.data[rightIndex];
        this.data[leftIndex] = this.data[leftIndex] - this.data[rightIndex];
      }
}