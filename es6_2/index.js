// variable
let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// scope let
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();

// const
function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");


// mutate an array declare with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  //s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace();

console.log(s);

// prevent object mutation
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  
  Object.freeze(MATH_CONSTANTS);

  try {
    // MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);


// use arrow func to write concise anonymous functions
const magic = () => new Date();
console.log(magic());

// write arrow functions with params
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// set default params for ur functions
const increment = (function() {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); 
console.log(increment(5)); 

// Rest operator with function params
const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4));

// use the spread Operator to evaluate arrays in-placeconst arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1]; // change this line
  arr1[0] = 'potato';
})();
console.log(arr2);

// use destructuring assignment to assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// use destructuring assignment to assign variables from NESTED objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const { tomorrow : { max : maxOfTomorrow }} = forecast; 

  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST)); 

// Use Destructuring Assignment to Assign Variables from Arrays
const [z1, x1, , y1] = [1, 2, 3, 4, 5, 6];
console.log(z1, x1, y1);


let a1 = 8, b1 = 6;
(() => {
  "use strict";
  [a1, b1] = [b1, a1]
})();
console.log(a1); 
console.log(b1); 

// Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
// dont do / remove 1 n 2 element and other elements put on arr
  const [ , , ...arr] = list; 

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); 
console.log(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
	// max and min 
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };

})();
console.log(stats); 
console.log(half(stats)); 

// Create Strings using Template Literals
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); 




const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
  }

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)


// Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => ( { name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male")); 

// Write Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// Use class Syntax to Define a Constructor Function
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)



function makeClass() {
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); 

// Use getters and setters to Control Access to an Object
class Book {
  constructor(author) {
  	// private variable using _ (underscore)
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}

function makeClass1() {
  class Thermostat {
    constructor(temp) {
  		// private variable using _ (underscore)
      this._temp = 5/9 * (temp - 32);
    }
    get temperature(){
      return this._temp;
    }
    set temperature(updatedTemp){
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass1();
const thermos = new Thermostat(76); 
// set dan get adalah properti jadi tidak perlu memakai ()
let temp = thermos.temperature; 
console.log(`Temperatur awal dari get: ${temp}`);
thermos.temperature = 26;
temp = thermos.temperature; 
console.log(`Temperatur akhir kita get dengan set nilai baru: ${temp}`);

// Understand the Differences Between import and require
// import { capitalizeString } from "./string_func"
// const cap = capitalizeString("hello!");

// console.log(cap);

// Use export to Reuse a Code Block
// const capitalizeString = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
// export { capitalizeString };
// export const foo = "bar";
// export const bar = "foo";


// Use * to Import Everything from a File
// as for save to another variable that contait all obj
// import * as capitalizeStrings from "capitalize_strings";


// Create an Export Fallback with export default
// export default function subtract(x,y) {return x - y;}

// Import a Default Export
// without curly braces {}
// import subtract from "math_functions";

// subtract(7,4);



