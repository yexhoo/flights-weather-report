const extractor = require("../src/extractor")
const weather = require("../src/weather")
const validator = require("./validator")
const jsonfile = require("jsonfile")
const path = require("path")

exports.get = (file) => {

    validator.file(file)
    const content = extractor.readFile(file)

    let tickets = extractor.tickets(content)
    let airports = extractor.airPorts(tickets)

    airports = weather.updateAirports(airports)
    tickets = weather.updateTickets(tickets, airports)

    // tickets.forEach(t => console.log(t))
    this.saveReport(file, tickets)
}

exports.saveReport = (file, tickets) => {

    const dirname = path.dirname(file)
    jsonfile
        .writeFileSync(path.join(dirname, "output.json"), { tickets: tickets }) 
} 