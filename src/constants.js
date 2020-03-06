const HEADERS = [
    "origin", "destination", "airline", "flight_num",
    "origin_iata_code", "origin_name", "origin_latitude", "origin_longitude",
    "destination_iata_code", "destination_name", "destination_latitude", "destination_longitude"]

const AIR_LINE = 2
const FLIGHT_NUM = 3

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
        "destinationIata": line[8],
        "destinationName": line[9],
        "destinationLatitude": line[10],
        "destinationLongitude": line[11]
    }
}

const airPort = (iata, latitude, longitude) => {
    return {
        "iata": iata,
        "latitude": latitude,
        "longitude": longitude,
        "weather": {}
    }
}

module.exports = {
    HEADERS: HEADERS,
    AIR_LINE: AIR_LINE,
    FLIGHT_NUM: FLIGHT_NUM,
    ticket: ticket,
    airPort: airPort
}