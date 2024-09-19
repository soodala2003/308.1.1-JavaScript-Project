//Part 1: Math Problems
// The initial numbers that must be verified.
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
console.log(`The remainder is ${remainder}`)
console.log(`All four numbers is less than 25: ${isLess25}`)



