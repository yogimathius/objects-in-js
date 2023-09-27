/**
 * Primitive Types
 * Are not objects
 * Are the lowest of implementation; can't be broken down into smaller pieces
 */

// 1) String

// console.log("Hello World!");

// 2) Number

// console.log(42);

// 3) Boolean

// console.log(false);

// 4) bigInt

// console.log(BigInt(9007199254740991));

// 5) undefined

// console.log(undefined);

// 6) null

// console.log(null);

// 7) symbol

// console.log(Symbol("foo"));

/**
 * Object types
 */

// 1) Array

/**
 * uses square brackets
 * ordered
 * list of things (data types) separated by a comma
 */

const arrayExample = [
  "hello world!",
  true,
  42,
  [],
  function helloWorld() {
    console.log("hellow world!");
  },
  undefined,
  null,
  Symbol("foo"),
];

// console.log(arrayExample[3]);

// 2) Function
// Function declaration

// function declaration's can be hoisted!! (executed before declaration)
addTwoNumbers(4, 6);
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

// function expression's cannot be hoisted
// addTwoNumbersConst(2, 4);

// const addTwoNumbersConst = (number1, number2) => {
//   return number1 + number2;
// };

// Function calling/execution
const result = addTwoNumbers(2, 4);
console.log("result from variable stored: ", result);
