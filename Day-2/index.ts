// Union Types

/* A union type is a type formed from two or more other types, representing values that may be any one of those types*/

// User Password may be in number or string format
let userPassword: string | number = 12345678;

// User Password may be in number or string format
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(100614);
printId("ak47");

// Promise Type

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

// type inference
const names = [15, 45];
names.forEach((name) => {
  console.log(name);
});

// Object Types
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Optional Properties
const prnitName = (firstName: string, lastName?: string) => {
  if (lastName !== undefined) {
    // OK
    console.log(lastName.toUpperCase());
  }
};
// Both OK
prnitName("Muhammad");
prnitName("Muhammad", "Azam");

// Type Aliases
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord1(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord1({ x: 100, y: 100 });

// Interfaces
// An interface declaration is another way to name an object type:
interface Point2 {
  x: number;
  y: number;
}
function printCoord2(pt: Point2) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });

//Differences Between Type Aliases and Interfaces

// Syntax Difference

type Animal = {
  name: string;
};

interface Animal1 {
  name: string;
}

//assigning object datat type to array
let userData: Array<object> = [
  {
    name: "Farooq",
    classNamne: "WAM-100",
  },
];

userData.forEach((items) => {
  console.log(items);
});

// Tuples
//A tuple is an array with fixed size and known datatypes.

const myPets: [string, string, boolean] = ["Cat", "Dog", true];
// myPets[0] = ""; // Correct because of tuple type
// myPets[0] = 498; // Incorrect because of tuple type
