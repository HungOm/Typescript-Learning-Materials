"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinAnalysis_1 = require("./analyzers/WinAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    constructor(analyzer, OutPutTarget) {
        this.analyzer = analyzer;
        this.OutPutTarget = OutPutTarget;
    }
    // static allow class to access without creating instance - e.g new Summary()
    static winAnalysisHtmlReport(team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.OutPutTarget.print(output);
    }
}
exports.Summary = Summary;
