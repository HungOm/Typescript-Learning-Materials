"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// import { dateStringToDate } from './utils';
// import { matchResult } from './MatchResult';
// intro to Generic data <TypeOfData>
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(path_1.default.resolve(__dirname, this.filename), {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => row.split(','))
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
