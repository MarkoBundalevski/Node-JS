const path = require("path");
const fs = require("fs");
const fsProm = require("fs/promises");

async function insertTextRecord(newText){

    fs.writeFile(path.join(__dirname, "homework", "homework.txt"));
    newText = "Hello from out first Node homework";
}

module.exports = {
    insertTextRecord
}