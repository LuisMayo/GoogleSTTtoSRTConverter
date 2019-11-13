import { convertGSTTToSRT } from "../lib/convertGSTTToSRT";
import { expect } from "chai";
import * as fs from 'fs';

describe('V1vsV2Diff', function () {
    it('detects v2 only nanos', function () {
        let result = convertGSTTToSRT.prototype.determineIfv2( {"startTime": {"nanos": 200000000}});
        expect(result).equal(true);
    });
    it('detects v2 only seconds', function () {
        let result = convertGSTTToSRT.prototype.determineIfv2( {"startTime": {"seconds": 3}});
        expect(result).equal(true);
    });
    it('detects v2 complete', function () {
        let result = convertGSTTToSRT.prototype.determineIfv2( {"seconds": "1", "nanos": 500000000});
        expect(result).equal(true);
    });
    it('detects v1', function () {
        let result = convertGSTTToSRT('29.800s');
        expect(result).equal(false);
    });
});

describe('V1vsV2Diff', function () {
    it('detects v2 only nanos', function () {
        let result = convertGSTTToSRT.prototype.determineIfv2( {"startTime": {"nanos": 200000000}});
        expect(result).equal(true);
    });
    it('detects v2 only seconds', function () {
        let result = convertGSTTToSRT.prototype.determineIfv2( {"startTime": {"seconds": 3}});
        expect(result).equal(true);
    });
    it('detects v2 complete', function () {
        let result = convertGSTTToSRT.prototype.determineIfv2( {"seconds": "1", "nanos": 500000000});
        expect(result).equal(true);
    });
    it('detects v1', function () {
        let result = convertGSTTToSRT('29.800s');
        expect(result).equal(false);
    });
});

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
