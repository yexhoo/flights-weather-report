const jsonfile = require("jsonfile")
const constants = require("./constants")
const fs = require("fs")

exports.save = (airPorts) => {
    
    const cache = { airPorts: [] }
    
    for (e of airPorts.values()) { 
        cache.airPorts.push(e) 
    }
    
    jsonfile.writeFileSync(constants.CACHE_FILE, cache)
}

exports.get = () => {

    let cache = { airPorts: [] }

    if (fs.existsSync(constants.CACHE_FILE)) {
        cache = jsonfile
            .readFileSync(constants.CACHE_FILE)
    }

    return cache
} 