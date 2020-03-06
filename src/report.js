const extractor = require("../src/extractor")
const weather = require("../src/weather")
const validator = require("./validator")

exports.get = (filePath) => {

    validator.file(filePath)
    const content = extractor.readFile(filePath)

    let tickets = extractor.tickets(content)
    let airports = extractor.airPorts(tickets)

    airports = weather.updateAirports(airports)
    tickets = weather.updateTickets(tickets, airports)

    tickets.forEach(t => console.log(t))
}