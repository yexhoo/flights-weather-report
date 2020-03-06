const util = require("util")
const rest = require("./rest")
const constants = require("./constants")

exports.update = (airPorts) => {
    const entries = airPorts.entries();
    return get(entries)
}

const get = (airPorts) => {
    for (let airport of airPorts) {
        if (!airport[1].weather) {
            const url = util.format(constants.WEATHER_ENDPOINT, airport[1].latitude, airport[1].longitude)
            const response = rest.get(url)
            if (response.data) { airport[1].weather = response.data }
        }
    }
    return airPorts
}