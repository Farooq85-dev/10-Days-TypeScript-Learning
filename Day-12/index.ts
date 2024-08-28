/* ------ Type Assertions ------ */

// Type assertions in TypeScript, which allows you to assign a new type to a value.
// Type assertions instruct the TypeScript compiler to treat a value as a specified type. In TypeScript, you can use the as keyword or <> operator for type assertions.

// Type assertion using as keyWord
let el = document.createElement("div") as HTMLDivElement;

// Type assertion using <>
let ele = <HTMLDivElement>document.createElement("div");

console.log(typeof el);

// Summary
// Type assertion allows you to assign a new type to a value.
// Use the as keyword or <> operator to perform a type assertion.
