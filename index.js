/* Part 1: Math Problems */
// The initial numbers that must be verified
const n1 = 13;
const n2 = 17;
const n3 = 12;
const n4 = 8;

// Check one: all numbers are divisible by 5
const isDivisible5 = (n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0);
console.log(isDivisible5);

// Check two: the first number is larger than the last
const isFirstLargerLast = n1 > n4;
console.log(isFirstLargerLast);

// Check three: find the remainder
const remainder = (n2 - n1) * n3 % n4;
console.log(remainder);

// Check four: all numbers less than 25
const isLess25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(isLess25);

// Finally, log the results.
console.log(`All four numbers are not divisible by 5: ${isDivisible5}`);
console.log(`The first number is larger than the last number: ${isFirstLargerLast}`);
console.log(`The remainder is ${remainder}`);
console.log(`All four numbers is less than 25: ${isLess25}`);

/* Part 2: Practical Math */
const totalDis = 1500;
let mile55 = {mph: 55, mpg: 30};
let mile60 = {mph: 60, mpg: 28};
let mile75 = {mph: 75, mpg: 23};
const budget = 175;
const fuelCost = 3;

function gallons(miles) {
    return Math.round(totalDis/miles.mpg);
}

function cost(miles) {
    return Math.round(totalDis/miles.mpg * fuelCost);
}

function hours(miles) {
    return Math.round(budget/fuelCost * miles.mpg / miles.mph); 
}

console.log(`At 55 miles per hour:`);
console.log(`- You will need ${gallons(mile55)} gallons.`);
console.log(`- The cost of fuel will be $${cost(mile55)}.`);
console.log(`- The trip will take ${hours(mile55)} hours for the entire trip.`);

console.log(`At 60 miles per hour:`);
console.log(`- You will need ${gallons(mile60)} gallons.`);
console.log(`- The cost of fuel will be $${cost(mile60)}.`);
console.log(`- The trip will take ${hours(mile60)} hours for the entire trip.`);

console.log(`At 75 miles per hour:`);
console.log(`- You will need ${gallons(mile75)} gallons.`);
console.log(`- The cost of fuel will be $${cost(mile75)}.`);
console.log(`- The trip will take ${hours(mile75)} hours for the entire trip.`);

console.log(`Your budget will be enough at 55 miles and 60 miles driving: ${isEnough=budget>cost(mile55)}, ${isEnough=budget>cost(mile60)}`);
console.log(`However, your budget will not be enough at 75 miles driving: ${isEnough=budget>cost(mile75)}`);