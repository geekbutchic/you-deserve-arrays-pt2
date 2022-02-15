const prompt = require('prompt-sync')({sigint: true});

let greet = JSON.parse(prompt("Enter an array: "));

console.log(greet);

console.log(`This is type: ${typeof(greet)}`);

console.log(`Third index of position 3 or last index depending on char value you enter: ${greet[2] || greet[greet.length -1]}`);