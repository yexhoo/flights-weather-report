const expect = require("chai").expect
const extractor = require("../src/extractor")
const weather = require("../src/weather")

describe('Weather', () => {

    let testFile, resources = __dirname.concat("/resources/files/");

    it('Chek weather by airports', () => {
        testFile = resources.concat('check-weathers.csv')
        const content = extractor.readFile(testFile)
        const tickets = extractor.tickets(content)
        const airports = extractor.airPorts(tickets)
        const weathers = weather.update(airports)
    });
});