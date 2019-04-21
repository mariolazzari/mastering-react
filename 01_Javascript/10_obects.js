// objects
const person = {
  name: "Mario",
  walk() {},
  talk() {}
};

person.talk();
const targetMember = "name";
person[targetMember] = "Mariarosa";
console.log(person);
