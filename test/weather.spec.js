const extractor = require("../src/extractor")
const weather = require("../src/weather")

describe('Weather', () => {

    let testFile, resources = __dirname.concat("/resources/files/");

    it('Chek weather by airports', () => {
        testFile = resources.concat('check-weathers.csv')
        const content = extractor.readFile(testFile)
        
        let tickets = extractor.tickets(content)
        let airports = extractor.airPorts(tickets)
        
        airports = weather.updateAirports(airports)
        tickets = weather.updateTickets(tickets, airports)
        
        tickets.forEach(t => console.log(t))
    });
});