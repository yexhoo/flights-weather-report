const extractor = require("../src/extractor")
const weather = require("../src/weather")
const validator = require("./validator")
const jsonfile = require("jsonfile")
const path = require("path")
const constants = require("./constants")

exports.get = (file) => {

    console.log("File validations ...")
    validator.file(file)
    const content = extractor.readFile(file)

    console.log("Tickets extraction ...")
    let tickets = extractor.tickets(content)

    console.log("Airports extraction ...")
    let airports = extractor.airPorts(tickets)

    console.log("Airports weather fetching ...")
    airports = weather.updateAirports(airports)

    console.log("Tickets weather updating ...")
    tickets = weather.updateTickets(tickets, airports)

    console.log("Output report file writing ...")
    this.saveReport(file, tickets)
}

exports.saveReport = (file, tickets) => {

    const dirname = path.dirname(file)
    jsonfile.writeFileSync(path.join(dirname, constants.OUTPUT_FILE), { tickets: tickets })
}