const expect = chai.expect;

describe('index.js', () => {
  describe('driver', () => {
    it('sets a variable driver equal to bob', () => {
      expect(driver).to.equal('bob')
    })
  })

  describe('console.log()', () => {
    let spy;

    spy = sinon.spy(console, 'log');

    it('invokes console.log() with the string "this code was called"', () => {
      expect(spy.calledWithExactly('this code was called')).to.be.true;
    });

    it('invokes console.log() with the `driver` variable', () => {
      expect(spy.calledWithExactly('bob')).to.be.true;
    });

    it('invokes the console.log with the `driver` variable as the first argumnent and `is the driver variable name` as the second argument', () => {
      expect(spy.calledWithExactly('bob', 'is the driver variable name')).to.be.true;
    });
  });
});
