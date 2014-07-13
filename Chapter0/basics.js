
// Value
console.log(42);

// Expression
console.log("Javascript" + " " + "Allonge");

// identical values

console.log(2 === 2);

console.log("hello" !== "goodbye");

// Differents types
console.log(2 === "2");

console.log(true !== "true");

// Differents Values
console.log(true === false);

console.log(2 !== 5);

console.log("two" === "five");

// Same types
console.log(2 + 2 === 4);

console.log((2 + 2) === 4) === (2 !== 5);

// Same type, same value but not considered identical
console.log([2-1, 2, 2+1] === [1, 2, 3]);

console.log([1, 2, 3] === [1,2,3]);

console.log([1, 2, 3] === [1, 2, 3]);

// Array example
var ouroboros = [];
ouroboros[0] = ouroboros;
console.log(ouroboros);


console.log((function(){}));

console.log((function(){}) === (function(){}));

console.log((function(){})());

// undefineds
console.log(undefined === undefined);
console.log((function(){})() === (function(){})());
console.log((function(){})() === undefined);

//function

console.log((function(){return 0;})());