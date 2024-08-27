/* ------ Difference B/W Type Interface And Type Alias ------ */

// 1) Syntax

// Best practice in both interface and type to start the name with Captital letter.

// Type Alias
type Farooq = {
  name: String;
};

// Type Interface
interface Muhammad {
  name: String;
}

// 2) Reuse-ability

// Mean same type of type alias gives error but type interface not give error.

type Faizan = {
  emial: string;
};

// error due to same type alias name
// type Faizan = {
//   password: string;
// };

interface UserData {
  name: string;
}

// No error however same type interface name
interface UserData {
  email: string;
  password: string;
}

// 3) Extend KeyWord

type Data1 = {
  name: string;
};

//error
// type Data2 extends data1 = {
//   email: string;
// };

interface Data3 {
  name: string;
}

// No error however same type interface name
interface Data4 {
  name: string;
}

interface Data4 extends Data3 {
  email: string;
}

let myData: Data4 = {
  name: "Muhammad Farooq",
  email: "famuhammad907@gmail.com",
};
console.log(myData);

export {};
