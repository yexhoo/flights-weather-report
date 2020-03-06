const fs = require('fs');
const constants = require("./constants")

exports.readFile = (filePath) => fs.readFileSync(filePath)
    .toString()
    .split("\n")
    .map((line) => line.replace(/['"]+/g, '').split(","))
    .filter((line) => line.length && !this.find(line, constants.HEADERS))

exports.find = (superset, subset) => superset.some(r => subset.includes(r))

exports.tickets = (source) => {

    const content = new Map();
    for (const line of source) {
        if (line[constants.AIR_LINE] && line[constants.FLIGHT_NUM]) {

            const key = line[constants.AIR_LINE] + line[constants.FLIGHT_NUM]
            if (!content.has(key)) {
                content.set(key, constants.ticket(line))
            }
        }
    }

    return content
}

exports.airPorts = (tickets) => {

    const airPorts = new Map();
    const elements = tickets.values();
    for (const e of elements) {
        if (!airPorts.has(e.originIata)) {
            airPorts.set(e.originIata,
                constants.airPort(e.originIata, e.originLatitude, e.originLongitude))
        }

        if (!airPorts.has(e.destinationIata)) {
            airPorts.set(e.destinationIata,
                constants.airPort(e.destinationIata, e.destinationLatitude, e.destinationLongitude))
        }
    }

    return airPorts
}