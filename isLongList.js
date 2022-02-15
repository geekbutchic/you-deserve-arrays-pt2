//isLongList.js: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10

const prompt = require('prompt-sync')({sigint: true});

let greet = JSON.parse(prompt("Enter an array: "));

console.log(greet);

console.log(`This is type: ${typeof(greet)}`);

if (greet.length >= 10) {
    prompt("True: At least index of 10 or longer!")
} else {
    prompt("False: Not longer than 10!")
}

