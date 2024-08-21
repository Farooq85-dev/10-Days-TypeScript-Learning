// Function Type Expressions
// The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions.
function greeter(fn) {
    return fn("Hello, World");
}
function printToConsole(s) {
    return s;
}
greeter(printToConsole);
// Generic Functions
function greet(arr) {
    return arr[0];
}
// greet([1, 2, 3, 5, 5]);
greet("Sd");
// Specifying Type Arguments
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
combine([10, 0.5, 55, 5, 5], [564544.1, 584, 4, 5, 4, 54]);
//Function overloads
// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);
// Overload Signatures and the Implementation Signature
// function fn(x: string): void;
// function fn() {
//   // ...
// }
// // Expected to be able to call with zero arguments
// fn();
