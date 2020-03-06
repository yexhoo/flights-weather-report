const fs = require('fs');
const constants = require("./constants")

exports.get = (filePath) => fs.readFileSync(filePath)
    .toString()
    .split("\n")
    .map((line) => line.replace(/['"]+/g, '').split(","))
    .filter((line) => line.length && !this.find(line, constants.HEADERS))

exports.find = (superset, subset) => superset.some(r => subset.includes(r))