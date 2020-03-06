const fs = require("fs")
const constants = require("./constants")

exports.file = (filePath) => {

    if (!filePath) {
        throw new Error("Invalid file name")
    }

    if (!fs.existsSync(filePath)) {
        throw new Error("File not found")
    }
}

exports.data = (content) => {

    if (!content.length || content[0] == '') {
        throw new Error("Empty file")
    }

    const linesWithErros = content
        .map(line => line.length != constants.HEADERS.length || line.some((n) => (new String(n))))

    if (linesWithErros.length) {
        throw new Error("Several lines does not contain required data")
    }
}