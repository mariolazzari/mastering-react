// var -> function scope
// let -> block scope

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i); => 5 with vat, error with let
}

sayHello();
