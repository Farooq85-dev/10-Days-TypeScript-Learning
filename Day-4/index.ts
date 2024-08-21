// Object Types

// function greet1(person: { name: string; age: number }) {
//   return "Hello " + person.name;
// }
// greet1({ name: "sdsd", age: 3263 });

// Defining type to obejct usng type aliases
type ptType1 = {
  name: string;
  id: string;
};

function greet2(pt: ptType1) {}

// Defining type of object using interface

interface ptType2 {
  readonly name: string;
  password: number;
}

function greet3(pt: ptType2) {
  return;
}

// readonly

interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'.`);
}
// But we can't re-assign it.
// obj.prop = "hello"; // error because it is only readable

// Intersection Types

/*interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to combine existing object types.
 */

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type final = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: "blue", radius: 42 });

// oops
draw({ color: "red", radius: 45562 });
