var chai = require('chai');
var expect = require('chai').expect;
var word = require('../index');

describe('Sanitize', function() {

    //before(function() {
      //  console.log('Start')
    //});

   // after(function() {
    //    console.log('Emd')
   // });


    it('returns lowercase of a string', function() {
        var inputWord = 'HELLO WORLD';
        var outputWord = word.sanitize(inputWord);

        expect(outputWord).to.equal('hello world');
        expect(outputWord).to.not.equal('HELLO WORLD');
        expect(outputWord).to.be.a('string');
        expect(outputWord).to.not.be.a('number');
        expect(outputWord).to.contain('hello');
    });
    it('removes any hyphen', function() {
        var inputWord = 'HELLO-WORLD';
        var outputWord = word.sanitize(inputWord);

        expect(outputWord).to.equal('hello world');
    });
});

describe('Tokenize', function() {
    it('returns an array of words', function() {
        var sentence = 'hello world';
        var tokenizedSentence = word.tokenize(sentence);

        expect(tokenizedSentence ).to.include.members(['hello', 'world']);
    })
});

describe('Github info', function() {
    it('returns repo info from Github', function(done) {
        word.info(function(reply) {
            console.log(reply);
            expect(reply.language).to.not.equal('Python');
            done();
        });


    })
});
