describe('convertTest', function() {
  it('convertv1', function() {
    let result = convertGSTTToSRT(getv1FullMock());
    expect(result).equal(null);
  });
});


function getv1FullMock() {
    return JSON.stringify(require('../mocks/v2Trimmed.json'));
}