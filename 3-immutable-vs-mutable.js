/**
 * Primitive values
 * are IMMUTABLE
 */

var numberOfApples = 10;

// we pass primitive data types as a copy
function eatApples(applesAvailable, applesToEat) {
  // numberOfApples = applesAvailable - applesToEat;
  // console.log(applesLeft);
  // console.log(numberOfApples);
  return `
    I have ${applesAvailable} apples.
    I eat ${applesToEat} apples.
    Now I have ${applesAvailable - applesToEat} apples.
  `;
}

// console.log(eatApples(numberOfApples, 2));
// console.log("original apples after function called: ", numberOfApples);

/**
 * Object types
 * are MUTABLE
 */

const bob = {
  name: "Robert",
  job: "builder",
  quote: "can we build it?",
};

const amanda = {
  name: "Amanda",
  job: "programmer",
  quote: "can we program it?",
};

console.log(bob);

// we are passing the person object, by reference
function changeName(person) {
  person.name = "New Name!";
}

changeName(bob);

console.log(bob);
