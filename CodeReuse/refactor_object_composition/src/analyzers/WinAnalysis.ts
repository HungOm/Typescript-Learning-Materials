import { MatchData } from "../MatchData";
import { Analyzer } from "../summary";
import { matchResult } from "../MatchResult";

export class WinAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === matchResult.homeWin) {
        wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === matchResult.awayWin
      ) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
