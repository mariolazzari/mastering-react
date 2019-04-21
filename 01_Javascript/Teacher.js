const Person = require("./Person");

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log(`${this.degree} ${this.name} is teaching.`);
  }
}

module.export = Teacher;
