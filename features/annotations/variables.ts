let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['green', 'red'];

class Car {}

let car: Car = new Car();

// when to use annotation.
// 1. function that returns the any type

const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

// 2. when we declare a var on one line
// initalize it later
let words = ['red', 'green'];
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. when we want a var to have a type that can't be inferred.
let numbers = [-10, -1, 12];
let numberAboveZero;
