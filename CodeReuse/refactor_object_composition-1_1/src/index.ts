
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './summary';

import { HtmlReport } from './reportTargets/HtmlReport';

const csv_reader = new CsvFileReader('./../football.csv');
const dataReader = new MatchReader(csv_reader);
dataReader.load();

const summary = new Summary(
    new WinAnalysis('Man United'),
    new HtmlReport()
)

summary.buildAndPrintReport(dataReader.matches)



