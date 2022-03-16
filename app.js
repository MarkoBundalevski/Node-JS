const path = require("path");
const fs = require("fs");
const operations = require("./operations.js");

if (!fs.existsSync(path.join(__dirname, "homework"))) {
    fs.mkdir(path.join(__dirname, "homework"));
}

operations.insertTextRecord("Hello from our first Node homework");
console.log(operations.readFile());
operations.readJsonFile();
operations.appendFile("\nFINISHED!");