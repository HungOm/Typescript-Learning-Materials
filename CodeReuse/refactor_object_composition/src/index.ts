
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './summary';

import { HtmlReport } from './reportTargets/HtmlReport';

const csv_reader = MatchReader.fromCsv('./../football.csv');
csv_reader.load();


// const summary = new Summary(
//     new WinAnalysis('Man United'),
//     new HtmlReport()
// )
// static allow class to access without creating instance - e.g new Summary()
const summary = Summary.winAnalysisHtmlReport('Man United')
summary.buildAndPrintReport(csv_reader.matches)



