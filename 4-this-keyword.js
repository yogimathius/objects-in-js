/**
 * If you want to access properties
 * FROM WITHIN THE SAME OBJECT
 * you can use the "this" keyword
 */

const person = {
  name: "bob",
  job: "builder",
  quote: `${this.name} says can we build it?`,
  introduce: function introduce() {
    console.log(`My name is ${this.name} and I work as a ${this.job}`);
  },
};

person.introduce();

console.log(person.quote);
