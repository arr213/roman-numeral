// ***** TEST SUITE BELOW ***** //

var Promise = require("bluebird");
var chai = require("chai");
var expect = chai.expect;
var Mocha = require("mocha");
var mocha = new Mocha({ui: 'bdd'});

mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("Test suite", function() {
  
  describe("romanToDecimal", function() {
    it("should be a function", function() {
      expect(romanToDecimal).to.exist();
      expect(romanToDecimal).to.be.a('function');
    });
    it("should only accept strings", function() {
      expect(() => romanToDecimal('I')).to.not.throw(Error);
      expect(() => romanToDecimal(1)).to.throw(Error);
      expect(() => romanToDecimal(['I'])).to.throw(Error);
      expect(() => romanToDecimal({I: 1})).to.throw(Error);
    });
    it("should not accept empty string", function() {
      expect(() => romanToDecimal('')).to.throw(Error);
    });
    it("should not accept strings with invalid letters", function() {
      expect(() => romanToDecimal('Hello World')).to.throw(Error);
    });
    it("should handle all 7 letters in roman numeral notation", function() {
      expect(romanToDecimal('I')).to.equal(1);
      expect(romanToDecimal('V')).to.equal(5);
      expect(romanToDecimal('X')).to.equal(10);
      expect(romanToDecimal('L')).to.equal(50);
      expect(romanToDecimal('C')).to.equal(100);
      expect(romanToDecimal('D')).to.equal(500);
      expect(romanToDecimal('M')).to.equal(1000);
    });
    it("should correctly add or subtract letter values", function() {
      expect(romanToDecimal('VIII')).to.equal(8);
      expect(romanToDecimal('IX')).to.equal(9);
      expect(romanToDecimal('MCMXCVIII')).to.equal(1998);
      
    });
  });
  
    describe("decimalToRoman", function() {
    it("should be a function", function() {
      expect(decimalToRoman).to.exist();
      expect(decimalToRoman).to.be.a('function');
    });
    it("should only accept numbers", function() {
      expect(() => decimalToRoman(1)).to.not.throw(Error);
      expect(() => decimalToRoman('I')).to.throw(Error);
      expect(() => decimalToRoman(['I'])).to.throw(Error);
      expect(() => decimalToRoman({I: 1})).to.throw(Error);
    });
    it("should only accept positive integers", function() {
      expect(() => decimalToRoman(-12)).to.throw(Error);
      expect(() => decimalToRoman(5/3)).to.throw(Error);
      expect(() => decimalToRoman(2.7)).to.throw(Error);
    });
    it("should not accept numbers over 4,000", function() {
      expect(() => decimalToRoman(57893)).to.throw(Error);
    });
    it("should handle all 7 letters in roman numeral notation", function() {
      expect(decimalToRoman(1)).to.equal('I');
      expect(decimalToRoman(5)).to.equal('V');
      expect(decimalToRoman(10)).to.equal('X');
      expect(decimalToRoman(50)).to.equal('L');
      expect(decimalToRoman(100)).to.equal('C');
      expect(decimalToRoman(500)).to.equal('D');
      expect(decimalToRoman(1000)).to.equal('M');
    });
    it("should correctly place additive and subtractive letters", function() {
      expect(decimalToRoman(8)).to.equal('VIII');
      expect(decimalToRoman(9)).to.equal('IX');
      expect(decimalToRoman(1998)).to.equal('MCMXCVIII');
      
    });
  });
});

mocha.run(function() {});