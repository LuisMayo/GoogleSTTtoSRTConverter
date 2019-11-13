import { convertGSTTToSRT } from "../lib/convertGSTTToSRT";
import { expect } from "chai";
import * as fs from 'fs';

describe('convertTest', function() {
  it('convertv2Trimmed', function() {
    let result = convertGSTTToSRT(getv2TrimmedMock());
    expect(result).equal(getv2TrimmedResponse());
  });
});


function getv2TrimmedMock() {
    return fs.readFileSync('./mocks/v2Trimed.json', {encoding: 'UTF-8'});
}

function getv2TrimmedResponse() {
    return fs.readFileSync('./mocks/v2Trimed.response.txt', {encoding: 'UTF-8'});
}
