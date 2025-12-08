function foo(a, b) {
  return a * b;
}

const bar = foo.bind(null, 2);
console.log(bar(2));
/*-------*/
var name = 'John';
var user = {
  name: "Peter",
  printMessage() {
    console.log(`Hello, ${this.name}!`);
  }
};
var printMessage = user.printMessage;
printMessage();
/*-------*/
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
};
/*-------*/
"use strict";
const details = {
  message: 'Hello!',
}
function getMessage() {
  return this.message;
}
console.log(getMessage.call(details));
/*-------*/
for (var i = 0; i < 10; i++) {
  //...
};
console.log(i);
/*-------*/
console.log(message);
var message = 'Hello';
/*-------*/
const details = {
  name: 'John!',
}
function getMessage(message) {
  return `${message} ${this.name}`;
}
console.log(getMessage.apply(details, ['Hello']));
/*-------*/
function foo() {
  return { bar: 1 };
}
console.log(typeof foo().bar);
/*-------*/
let name = 'John';
function printName() {
  console.log(name)
}
setTimeout(() => {
  let name = "Peter";
  printName();
}, 1000);
/*-------*/
let f = function g() { return 23; };
console.log(typeof g());
/*-------*/
var a = 1, b = function a(x) { x && a(--x); };
console.log(a);
/*-------*/
printMessage();
function printMessage() {
  console.log('Hello!');
}
/*-------*/
function getThis() {
  return this;
}
console.log(getThis());
/*-------*/
"use strict";
function getThis() {
  return this;
}
console.log(getThis());
/*-------*/
(
  function (a) {
    arguments[0] = 10;
    return a;
  }
)(5);
/*-------*/
let name = 'John';
function printName() {
  let name = "Peter";
  console.log(name);
}
printName();
/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/

/*-------*/