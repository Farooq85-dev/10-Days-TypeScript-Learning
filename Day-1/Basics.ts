// Note:- The type names String, Number, and Boolean (starting with capital letters) are legal, but refer to some special built-in types that will very rarely appear in your code. Always use string, number, or boolean for types.

//Assigning string type to variable
let userName: string = "Muhammad Farooq";
//Now, all the time only string type is assignable to userName. Otherwise, it will give errors.
userName = "Muhammad Faizan"; //Correct
// userName = 654; //In-Correct

//Assigning number type to variable
let userId: number = 1001;
//Now, all the time only number type is assignable to userName. Otherwise, it will give errors.
userId = 1002; //Correct
// userName = "Muhammad Faizan"; //In-Correct

//Assigning boolean  type to variable
let isUserVerifed: boolean = true;
//Now, all the time only boolean type is assignable to userName. Otherwise, it will give errors.
isUserVerifed = false; //Correct
// userName = 1003; //In-Correct

//Assigning string type to Array via Two ways
let userNames1: string[] = ["Muhammad Azam", "Muhammad Raza"];
let userNames2: Array<string> = ["Muhammad Haider", "Muhammad Ahsan"];

// Assigning [any] type to array
// let myItems1: string[] = ["Muhammad", true, 5285465, "45sd4sdsd"]; // error
// let myItems2: number[] = ["Muhammad", true, 5285465, "45sd4sdsd"]; // error
// let myItems3: boolean[] = ["Muhammad", true, 5285465, "45sd4sdsd"]; // error
let myItems3: any[] = ["Muhammad", true, 5285465, "45sd4sdsd"]; // No error Because type is any.

//Assigning type to functions params
function hello(a: number, b: number) {
  return a * b;
}
hello(12, 32);

//Assigning type to functions return so that return value is always number
function getIds(a: number, b: number): number {
  return a * b;
}
hello(12, 32);
const arrowFn = (a: number, b: number): number => {
  return a * b;
};
hello(12, 32);

const hello1 = function (a: number, b: number): number {
  return a * b;
};

hello1(1, 65);

//Assigning type to object via two ways
const student1Data: {
  name: string;
  className: string;
  section: string;
  rollNo: number;
} = {
  name: "Muhammad Farooq",
  className: "WAM-10",
  section: "A",
  rollNo: 321,
};

//Creating a type for student2Data
type student2Type = {
  name: string;
  className: string;
  section: string;
  rollNo: number;
};

const student2Data: student2Type = {
  name: "Muhammad Faizan",
  className: "WAM-11",
  section: "B",
  rollNo: 3211,
};
