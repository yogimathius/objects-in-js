/**
 * Objects
 * Store as many key:value pairs as you would like
 * DON'T HAVE AN ORDER
 * Just like arrays, we can store any data type inside an object
 * ALWAYS ACCESS VALUES USING THE KEY (don't have indexes to lookup)
 */

const objectExample = {
  first_name: "Mathius",
  pets: ["frisky", "jigs", "smokey"],
  today: "Sept 26, 2023",
  answerToTheUniverse: 42,
  functionExample: function helloWorld() {
    console.log("hello world!!!");
    return "returned from function";
  },
};

// console.log("object keys: ", Object.keys(objectExample));
// console.log("object values: ", Object.values(objectExample));
// console.log("object entries: ", Object.entries(objectExample));
const helloWorld = "hello world";
// console.log(helloWorld[0]);
// console.log(objectExample.first_name[0]);
/**
 * Why do we want to use objects instead of arrays???
 * There is a concept called Object Oriented Programming
 *
 */

const employeeArray = ["Mathius", "Lighthouse", "Instructor/mentor"];

const employeeObject = {
  first_name: "Mathius",
  company: "Lighthouse",
  position: "Instructor/mentor",
};

const employeeTwoObject = {
  first_name: "John",
  company: "Google",
  position: "CEO",
};

const employeeThreeObject = {
  first_name: "Jane",
  company: "Facebook",
  position: "CEO",
};

const employeeFourObject = {
  first_name: "Jill",
  company: "Netflix",
  position: "CEO",
};

const employeeFiveObject = {
  first_name: "Jason",
  company: "Amazon",
  position: "CEO",
};

const employeeSixObject = {
  firstName: "Jordan",
  company: "Apple",
  position: "CEO",
};

const employeesArray = [
  employeeObject,
  employeeTwoObject,
  employeeThreeObject,
  employeeFourObject,
  employeeFiveObject,
  employeeSixObject,
];

// console.log(employeesArray);

// Iterating over an array of objects
// for (let i = 0; i < employeesArray.length; i++) {
//   console.log("current employee iterating: ", employeesArray[i].first_name);
// }
