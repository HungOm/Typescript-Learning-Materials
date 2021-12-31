"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const length = this.collection.length();
        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length - 1 - x; y++) {
                const [currentIndex, nextIndex] = [y, y + 1];
                if (this.collection.compare(currentIndex, nextIndex)) {
                    this.collection.swap(currentIndex, nextIndex);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
