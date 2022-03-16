const path = require("path");
const fs = require("fs");
const fileName = "homework.text";

function insertTextRecord(newText){
    fs.writeFile(path.join(fileName, newText, function(parameter){
        if(parameter){
            console.log("Error!");
            return;
        }
    }));
}

function readFile(){
    return fs.readFileSync(fileName, {encoding : 'utf-8'})
}

function readJsonFile(){
    let jsonContent = fs.readFileSync("homework.json", {encoding : 'utf-8'});
    console.log(jsonContent);
    let jsonObject = JSON.parse(jsonContent);
    console.log(jsonObject);
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
    appendFile,
    readJsonFile
}