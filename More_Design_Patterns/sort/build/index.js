"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        let sorted = this.collection;
        const { length } = this.collection;
        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length - 1 - x; y++) {
                const [currentIndex, nextIndex] = [y, y + 1];
                if (sorted[currentIndex] > sorted[nextIndex]) {
                    this.swap(currentIndex, nextIndex, sorted);
                }
            }
        }
        this.collection = sorted;
    }
    swap(a, b, arr) {
        arr[a] = arr[a] + arr[b];
        arr[b] = arr[a] - arr[b];
        arr[a] = arr[a] - arr[b];
    }
}
const sorter = new Sorter([10, -3, 23, 3, 4, 5, 7, 2, 1]);
sorter.sort();
console.log(sorter.collection);
