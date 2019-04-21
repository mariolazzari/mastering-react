// arrow functions do not redifine this keyword
const person = {
  walk() {
    console.log("this", this);
  },
  talk() {
    var that = this;
    setTimeout(function() {
      // logs global -> that "trick"
      console.log("this", that);
    }, 1000);
  },
  talk2: () =>
    setTimeout(() => {
      console.log("this", this); // reference to person obj
    }, 1000)
};

person.walk(); // returns person object
person.talk(); // returns {}
