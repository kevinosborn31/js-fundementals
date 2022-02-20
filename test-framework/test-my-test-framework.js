const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);
const {expect, spy} = chai;

const {
  describe: programDescribe,
  it: programIt,
  expect: programExpect,
} = require('./testing.js');

const resetSpies = () => {
  spy.restore();
  spy.on(console, 'log');
  spy.on(console, 'error');
};

describe ('testing framework', () => {
  describe('expect', () => {  
    describe('toBe', () => {
      it('non-equal values throw errors', () => {
        expect(() => {programExpect(1).toBe(2)}).to.throw('expected 1 to be 2');
      });
    });
  });
  
  describe('it', () => {
    beforeEach(() => {
      resetSpies();
    });
  
    describe('passing test case', () => {
      const runPassingTestCase = () => {
        programIt('Passing Test Case', () => {
          programExpect(1).toBe(1);
        });
      }
  
      it('logs the correct success text', () => {
        runPassingTestCase();
        
        expect(console.log).to.have.been.called.exactly(2);
        expect(console.log).on.nth(1).to.be.called.with('beginning test case Passing Test Case');
        expect(console.log).on.nth(2).to.be.called.with('successfully completed test case Passing Test Case');
      });
    });
  });
});