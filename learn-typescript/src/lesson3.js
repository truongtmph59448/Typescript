"use strict";
// 2 cach viet function
function sayHello() {
    console.log("Hello");
}
// chay function
sayHello();
// cach 2: arrow function
const sayHello2 = () => {
    console.log("Hello");
};
sayHello2();
function sumNumbers(a, b) {
    return a + b;
}
const result = sumNumbers(5, 3);
console.log(result);
