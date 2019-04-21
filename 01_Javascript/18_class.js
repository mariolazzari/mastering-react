// class
class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} is walking.`);
  }
}

const mario = new Person("Mario");
const maria = new Person("Maria");
mario.walk();
maria.walk();
