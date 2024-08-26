/* ------ Type Interfaces ------ */

interface UserType {
  name: string;
  email: string;
  password: string;
}

let userData1: UserType = {
  name: "Farooq",
  email: "farooq@gmail.com",
  password: "2215sdsd",
};

//Note:- If we create more than one interface with same name. Then, it merge all same interface. No error will be generated.
// For example

interface User {
  name: string;
}

interface User {
  email: string;
}
interface User {
  password: string;
}

let userData2: User = {
  name: "Farooq",
  email: "farooq@gmail.com",
  password: "2215sdsd",
};

export {};
