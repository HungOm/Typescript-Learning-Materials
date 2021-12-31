"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length - 1 - x; y++) {
                const [currentIndex, nextIndex] = [y, y + 1];
                if (this.compare(currentIndex, nextIndex)) {
                    this.swap(currentIndex, nextIndex);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
