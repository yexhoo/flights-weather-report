const util = require("util")
const rest = require("./rest")
const constants = require("./constants")
const cache = require("./cache")

exports.updateAirports = (airPorts) => {

    airPorts = this.cachedAirports(airPorts)
    let entries = airPorts.entries();

    for (let airport of entries) {
        if (!airport[1].weather) {

            const iata = airport[0]
            const url = util
                .format(constants.WEATHER_ENDPOINT, airport[1].latitude, airport[1].longitude)

            const response = rest.get(url)

            if (response.data) {
                const entry = airPorts.get(iata)
                entry.weather = response.data.weather[0]
                airPorts.set(iata, entry)
            }
        }
    }
    cache.save(airPorts)

    return airPorts
}

exports.updateTickets = (tickets, airPorts) => {

    const list = [], values = tickets.values()
    for (let ticket of values) {

        ticket.originWeather = airPorts.get(ticket.originIata).weather
        ticket.destinationWeather = airPorts.get(ticket.destinationIata).weather
        list.push(ticket)
    }

    return list
}

exports.cachedAirports = (airPorts) => {

    const cached = cache.get()
    cached.airPorts.forEach(airport => {
        airPorts.set(airport.iata, airport)
    });

    return airPorts
}