// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  let length = 0;
  for (let i of numbers) {
    length += 1;
  }
  return length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let mean = getSum(numbers) / getLength(numbers);
  return mean;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let min = numbers[0];
  for (let i of numbers) {
    if (i < min) {
      min = i;
    }
  }
  return min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let max = 0;
  for (let i of numbers) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  let min = getMin(numbers),
    max = getMax(numbers);
  const range = max - min;
  return range;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const evenNumbers = [];
  for (let i of numbers) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const oddNumbers = [];
  for (let i of numbers) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}

document.addEventListener("DOMContentLoaded", function () {
  const total = document.getElementById("total");
  const sum = document.getElementById("sum");
  const mean = document.getElementById("mean");
  const small = document.getElementById("small");
  const large = document.getElementById("large");
  const range = document.getElementById("range");
  const even = document.getElementById("even");
  const odd = document.getElementById("odd");
  total.textContent = `You have given ${getLength(numbers)} numbers.`;
  sum.textContent = `The sum of your numbers is ${getSum(numbers)}.`;
  mean.textContent = `The mean of your numbers is ${getMean(numbers)}.`;
  small.textContent = `The smallest of your numbers is ${getMin(numbers)}.`;
  large.textContent = `The largest of your numbers is ${getMax(numbers)}.`;
  range.textContent = `The range of your numbers is ${getRange(numbers)}.`;
  even.textContent = `The even numbers you gave are ${getEvens(numbers)}.`;
  odd.textContent = `The odd numbers you gave are ${getOdds(numbers)}.`;
});
