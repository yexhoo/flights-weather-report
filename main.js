const report = require("./src/report")

const build = () => {
    if (process.argv.length === 2) { throw new Error("Input files is required") }
    report.get(process.argv[2])
};

build();