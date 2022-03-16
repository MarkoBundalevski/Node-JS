const path = require("path");
const fs = require("fs");
const fsProm = require("fs/promises");
const fileName = "homework.text";

async function insertTextRecord(newText){

    fs.writeFile(path.join(__dirname, "homework", "homework.txt"));
    newText = "Hello from out first Node homework";
}

function readFile(){
    return fs.readFileSync(fileName, {encoding : 'utf-8'})
}

function appendFile(text){
    fs.appendFile(fileName, text, function(param){
        if(!param){
            console.log("Error!");
            return;
        }
    })
}

module.exports = {
    insertTextRecord,
    readFile,
    appendFile
}