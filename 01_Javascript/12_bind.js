// this keyword
const person = {
  name: "Mario",
  walk() {
    console.log(this);
  }
};

// return a reference of current object
person.walk();

// bind this to person object, because functions are objects too
const walk = person.walk.bind(person);
walk();
