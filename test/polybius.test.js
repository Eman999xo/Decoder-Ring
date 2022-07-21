// Write your tests here!
const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("Polybius", () => {
    describe('Error Handling', () => {
        it("should output a string", () =>{
            const actual = polybius("Hello world")
            expect(actual).to.be.string;
        });

        it("should return false if decoding and the number of characters in the input string is odd", () => {
            const actual = polybius('342', false);
            expect(actual).to.be.false;
        });

    });

    describe("Encoding", () => {
        it("should maintain spaces throughout", () => {
            const expected = "3251131343 2543241341";
            const actual = polybius("Hello world");
            expect(actual).to.equal(expected);

        });
        it("should ignore capital letters", () => {
            const expected = "3251131343 2543241341";
            const actual = polybius("Hello world");
            expect(actual).to.equal(expected);
    
        });
        it('should encode I or J to 42', () => {
            const actual = polybius("ij");
            const expected = "4242";
            expect(actual).to.equal(expected);
        });
        it('should encode a message by changing each letter to number pairs', () => {
            const actual = polybius("Thinkful")
            const expected = "4432423352125413"
            expect(actual).to.equal(expected)
        });
    })
    
describe("Decoding", () => {
       
        it("should decode 42 to I/J", () => {
            const expected = "i/j";
            const actual = polybius('42',false);
            expect(actual).equal(expected);

        });
        it("should decode by changing each number pair into letters", () => {
            const actual = polybius("4432423352125413", false);
            const expected = "thi/jnkful";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces throughout", () => {
            const expected = "hello world";
            const actual = polybius("3251131343 2543241341",false);
            expect(actual).to.equal(expected)

        });
    })
    
});