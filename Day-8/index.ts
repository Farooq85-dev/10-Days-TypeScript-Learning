/* ------ Type Aliases ------ */

/*In TypeScript, a type alias allows you to create a new name for an existing type.

Type aliases can be useful for:

Simplifying complex types.
Making code more readable.
Creating reusable types that can be used in many places in the codebase.
To define a type alias, you use the type keyword followed by the alias name and the type it represents.

Here’s the syntax for defining a type alias*/

// Type alias examples

// 1) Primitive Type Alias
type Name = string;
let firstName: Name;

// 2) Object Type Alias

type userType = {
  name: string;
  password: number;
  email: string;
};

const userData: userType = {
  name: "Muhammad Farooq",
  email: "famuhammad907@gmail.com",
  password: 1565165,
};

console.log(userData);

export {};
