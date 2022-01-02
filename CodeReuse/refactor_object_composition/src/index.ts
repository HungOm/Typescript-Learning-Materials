
import { MatchReader } from './MatchReader';
import { Summary } from './summary';

const csv_reader = MatchReader.fromCsv('./../football.csv');
csv_reader.load();

// static allow class to access without creating instance - e.g new Summary()
const summary = Summary.winAnalysisHtmlReport('Man United')
summary.buildAndPrintReport(csv_reader.matches)



