const path = require("path");
const fs = require("fs");
const fileName = "homework.txt";

function writeText(newText){
    fs.writeFileSync(path.join(fileName), newText);
}

function readFile(){
    return fs.readFileSync(fileName, {encoding : 'utf-8'})
}

function appendFileSync(text){
    fs.appendFileSync(fileName, text); 
}

module.exports = {
    writeText,
    readFile,
    appendFileSync,
}