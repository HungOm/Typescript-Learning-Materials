"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const summary_1 = require("./summary");
const csv_reader = MatchReader_1.MatchReader.fromCsv('./../football.csv');
csv_reader.load();
// const summary = new Summary(
//     new WinAnalysis('Man United'),
//     new HtmlReport()
// )
// static allow class to access without creating instance - e.g new Summary()
const summary = summary_1.Summary.winAnalysisHtmlReport('Man United');
summary.buildAndPrintReport(csv_reader.matches);
