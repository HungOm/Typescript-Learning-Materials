"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, OutPutTarget) {
        this.analyzer = analyzer;
        this.OutPutTarget = OutPutTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.OutPutTarget.print(output);
    }
}
exports.Summary = Summary;
