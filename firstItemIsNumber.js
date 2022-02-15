const prompt = require("prompt-sync")({ sigint: true });

let greet = JSON.parse(prompt("Enter an array: "));

console.log(greet);

if (greet[0] === "number") {
    console.log(`This is type: ${typeof(greet)}`)
} 

