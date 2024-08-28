/* ------ Type Literals ------ */

/*
When designing APIs, it's common to define the structure of the API in terms of specific literal values. For instance, an operation might return a specific integer status code, or a model member might be one of a few specific string values. It's also useful to pass specific literal values to decorators. TypeSpec supports string, number, and boolean literal values to cater to these needs.
  */

/* ------ String Literals ------ */

let name: "farooq";
// name = "farooq"; // Ok!
// name = "farooqi"; // error!

/* ------ Number Literals ------ */

let password: 1004;
// password = 1004; // Ok!
// password = 10045; // error!

/* ------ Boolean Literals ------ */
let isLogin: true;

// isLogin = true; // Ok!
// isLogin = false; // error!

export {};
