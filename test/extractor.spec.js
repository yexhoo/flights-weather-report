const expect = require("chai").expect
const extractor = require("../src/extractor")

describe('Extractor', () => {

    let testFile, resources = __dirname.concat("/resources/files/");

    it('Get tickets', () => {
        testFile = resources.concat('duplicates.csv')
        const content = extractor.readFile(testFile)
        expect(extractor.tickets(content).size).to.equal(1)
    });

    it('Get airports', () => {
        testFile = resources.concat('airports.csv')
        const content = extractor.readFile(testFile)
        const tickets = extractor.tickets(content)
        expect(extractor.airPorts(tickets).size).to.equal(10)
    });
});