// this keyword
const person = {
  name: "Mario",
  walk() {
    console.log(this);
  }
};

// return a reference of current object
person.walk();

// return a reference of global window object, undefined is strict mode enabled
const walk = person.walk;
walk(); // global object in node
