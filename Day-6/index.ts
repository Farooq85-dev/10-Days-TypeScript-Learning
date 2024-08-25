// Union
// TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.

let code: string | number;
code = 123; // OK
code = "ABC"; // OK
// code = true; // Error because we have only assigned string and number data type

function displayType(code: string | number) {
  if (typeof code === "number") {
    console.log("Code is number.");
  } else if (typeof code === "string") {
    console.log("Code is string.");
  }
}

displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
// displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of typ

let userPassword: string | number;
userPassword = "Muhammad Farooq";

userPassword = 123;

if (typeof userPassword === "string") {
  console.log("User Password is string.");
} else {
  console.log("User Password is Number.");
}

export {};
