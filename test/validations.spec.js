const expect = require("chai").expect
const validator = require("../src/validator")
const extractor = require("../src/extractor")

describe('Light Distribution Validation Test', () => {

    let testFile, resources = __dirname.concat("/resources/files/");

    it('Invalid file name', () => {
        testFile = null
        expect(() => validator.file(testFile)).to.throw(Error, "Invalid file name")
    });

    it('File not found', () => {
        testFile = 'wrong-file-path.csv'
        expect(() => validator.file(testFile)).to.throw(Error, "File not found")
    });

    it('Empty File', () => {
        testFile = resources.concat('empty-file.csv')
        const content = extractor.get(testFile)
        expect(() => validator.data(content)).to.throw(Error, "Empty file")
    });

    it('Empty only headers', () => {
        testFile = resources.concat('only-headers.csv')
        const content = extractor.get(testFile)
        expect(() => validator.data(content)).to.throw(Error, "Empty file")
    });

    it('Some lines does not contain required data ', () => {
        testFile = resources.concat('required-values.csv')
        const content = extractor.get(testFile)
        expect(() => validator.data(content)).to.throw(Error, "Several lines does not contain required data")
    });

});