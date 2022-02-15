const prompt = require('prompt-sync')({sigint: true});


let greet = JSON.parse(prompt("Enter an array: "));

console.log(greet);

console.log("This is type: " + typeof (greet));


console.log(`First Character in Array is: ${greet[0]}`);

