const AIR_LINE = 2
const FLIGHT_NUM = 3
const ENDPOINT_TOKET = 'a065225a805cdb89b19e56d08925f0a0'
const WEATHER_ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?lat=%s&lon=%s&appid=${ENDPOINT_TOKET}`
const CACHE_FILE = "cache.json" 
const OUTPUT_FILE = "output.json"

const HEADERS = [
    "origin",
    "destination",
    "airline",
    "flight_num",
    "origin_iata_code",
    "origin_name",
    "origin_latitude",
    "origin_longitude",
    "destination_iata_code",
    "destination_name",
    "destination_latitude",
    "destination_longitude"]

const ticket = (line) => {
    return {
        "origin": line[0],
        "destination": line[1],
        "airline": line[2],
        "flightNum": line[3],
        "originIata": line[4],
        "originName": line[5],
        "originLatitude": line[6],
        "originLongitude": line[7],
        "originWeather": "",
        "destinationIata": line[8],
        "destinationName": line[9],
        "destinationLatitude": line[10],
        "destinationLongitude": line[11],
        "destinationWeather": ""
    }
}

const airPort = (iata, latitude, longitude) => {
    return {
        "iata": iata,
        "latitude": latitude,
        "longitude": longitude,
        "weather": null
    }
}

module.exports = {
    HEADERS: HEADERS,
    AIR_LINE: AIR_LINE,
    FLIGHT_NUM: FLIGHT_NUM,
    ticket: ticket,
    airPort: airPort,
    WEATHER_ENDPOINT: WEATHER_ENDPOINT,
    CACHE_FILE: CACHE_FILE,
    OUTPUT_FILE: OUTPUT_FILE
}