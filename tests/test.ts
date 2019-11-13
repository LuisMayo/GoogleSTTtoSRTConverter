import { convertGSTTToSRT } from "../lib/convertGSTTToSRT";
import { expect } from "chai";
import * as fs from 'fs';

describe('completeFunctionTests', function () {
    it('convertv1Complete', function () {
        let result = convertGSTTToSRT(getv2TrimmedMock());
        expect(result).equal(getResponse());
    });
    it('convertv2Trimmed', function () {
        let result = convertGSTTToSRT(getv2TrimmedMock());
        expect(result).equal(getResponse());
    });
});

function getv1Complete() {
    return fs.readFileSync('./mocks/v2Complete.json', { encoding: 'UTF-8' });
}


function getv2TrimmedMock() {
    return fs.readFileSync('./mocks/v2Trimed.json', { encoding: 'UTF-8' });
}

function getResponse() {
    return fs.readFileSync('./mocks/response.txt', { encoding: 'UTF-8' });
}
