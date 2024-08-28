/* ------ Classes ------ */

class ApniFactory {
  name = "SMIT";
  address = "Karachi";

  getInfo() {
    return `My Factory name is ${this.name}. You can visit my factory on this address ${this.address}`;
  }
}

let f1 = new ApniFactory();
let f2 = new ApniFactory();
let f3 = new ApniFactory();
console.log(f1);
console.log(f2);
console.log(f3);

class MyPc {
  company = "HP";
  series = "XEON";
  model = 2012;
  OS = "Windows 11";

  //Methods
  turnOn() {
    console.log(`Pc is Turned on...`);
  }

  turnOff() {
    console.log(`Pc is Turned off...`);
  }
  restart() {
    console.log(`Pc is restarting...`);
  }
}

const pc = new MyPc();
pc.turnOn();

/* ------ Constructor ------ */
// It is by default method in class. That, allows you to create custom things.

class airPods {
  brand: string | null = null;
  version: string | null = null;
  constructor(brand: string, version: string) {
    this.brand = brand;
    this.version = version;
  }
}

class mobile {
  constructor(public brand: string, public version: string) {
    this.brand = brand;
    this.version = version;
  }
}

let m1 = new mobile("OPPO", "2012");
let m2 = new mobile("SAMSUNG", "2014");
console.log(m1);
console.log(m2);

/* ------ Access Modifiers ------ */

// Public
// Private
// Protected

//Ny default. Public is applied on any variable or function.
class publicDocuments {
  public name = "Muhammad Farooq";

  getName() {
    console.log(`My name is ${this.name}`);
  }
}

class privateDocuments {
  private name = "Khan";

  getName() {
    console.log(`My name is ${this.name}`);
  }
}

class protectedDocuments {
  protected name = "Zia";

  getName() {
    console.log(`My name is ${this.name}`);
  }
}

let h1Public = new publicDocuments();
let h1Private = new privateDocuments();
let h1Protected = new protectedDocuments();
h1Public;
// h1Public.name = "Dsdsdd" // Ok
h1Private;
// h1Private.name = "Dsdsdd" // error
h1Protected;
// h1Protected.name = "Dsdsdd" // error

/* ------ Readonly Property ------ */

class LaptopBag {
  constructor(public readonly name: string, public readonly email: string) {
    this.name = name;
    this.email = email;
  }
}

const l1 = new LaptopBag("HP", "2023");
l1;

/* ------ Getter & Setter In Classes ------ */

class HitseshChoudhary {
  constructor(public name: string) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set getName(value: string) {
    this.name = value;
  }
}

let hC1 = new HitseshChoudhary("HC");
console.log(hC1.getName);
