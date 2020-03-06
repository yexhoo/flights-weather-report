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

    const lines = this.linesWithErros(content)
    if (lines.length) {
        throw new Error("Several lines does not contain required data")
    }
}

exports.linesWithErros = (content) => {

    const linesWithErros = []
    content.forEach(line => {
        if (line.length != constants.HEADERS.length || line.some((n) => (new String(n)))) {
            linesWithErros.push(line)
        }
    });

    return linesWithErros
}