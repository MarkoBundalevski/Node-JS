const operations = require("./operations.js");

operations.writeText("Hello from our first Node homework");
operations.appendFileSync("\nFINISHED!");
console.log(operations.readFile());