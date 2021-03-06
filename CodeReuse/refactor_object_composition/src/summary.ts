import { MatchData } from "./MatchData";
import { WinAnalysis } from "./analyzers/WinAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer{

    run(matches:MatchData[]):string

}

export interface OutPutTarget {
    print(report:string):void;
}


export class Summary{
    // static allow class to access without creating instance - e.g new Summary()
    static winAnalysisHtmlReport(team:string):Summary{
        return new Summary(
            new WinAnalysis(team ),
            new HtmlReport()
        )

    }
    constructor(
        public analyzer:Analyzer, 
        public OutPutTarget:OutPutTarget){}

    buildAndPrintReport(matches:MatchData[]):void{
        const output = this.analyzer.run(matches);
        this.OutPutTarget.print(output)
    }
}