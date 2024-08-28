/* ------ Classes ------ */
var ApniFactory = /** @class */ (function () {
    function ApniFactory() {
        this.name = "SMIT";
        this.address = "Karachi";
    }
    ApniFactory.prototype.getInfo = function () {
        return "My Factory name is ".concat(this.name, ". You can visit my factory on this address ").concat(this.address);
    };
    return ApniFactory;
}());
var f1 = new ApniFactory();
var f2 = new ApniFactory();
var f3 = new ApniFactory();
console.log(f1);
console.log(f2);
console.log(f3);
var MyPc = /** @class */ (function () {
    function MyPc() {
        this.company = "HP";
        this.series = "XEON";
        this.model = 2012;
        this.OS = "Windows 11";
    }
    //Methods
    MyPc.prototype.turnOn = function () {
        console.log("Pc is Turned on...");
    };
    MyPc.prototype.turnOff = function () {
        console.log("Pc is Turned off...");
    };
    MyPc.prototype.restart = function () {
        console.log("Pc is restarting...");
    };
    return MyPc;
}());
var pc = new MyPc();
pc.turnOn();
/* ------ Constructor ------ */
// It is by default method in class. That, allows you to create custom things.
var airPods = /** @class */ (function () {
    function airPods(brand, version) {
        this.brand = null;
        this.version = null;
        this.brand = brand;
        this.version = version;
    }
    return airPods;
}());
var mobile = /** @class */ (function () {
    function mobile(brand, version) {
        this.brand = brand;
        this.version = version;
        this.brand = brand;
        this.version = version;
    }
    return mobile;
}());
var m1 = new mobile("OPPO", "2012");
var m2 = new mobile("SAMSUNG", "2014");
console.log(m1);
console.log(m2);
/* ------ Access Modifiers ------ */
// Public
// Private
// Protected
//Ny default. Public is applied on any variable or function.
var publicDocuments = /** @class */ (function () {
    function publicDocuments() {
        this.name = "Muhammad Farooq";
    }
    publicDocuments.prototype.getName = function () {
        console.log("My name is ".concat(this.name));
    };
    return publicDocuments;
}());
var privateDocuments = /** @class */ (function () {
    function privateDocuments() {
        this.name = "Khan";
    }
    privateDocuments.prototype.getName = function () {
        console.log("My name is ".concat(this.name));
    };
    return privateDocuments;
}());
var protectedDocuments = /** @class */ (function () {
    function protectedDocuments() {
        this.name = "Zia";
    }
    protectedDocuments.prototype.getName = function () {
        console.log("My name is ".concat(this.name));
    };
    return protectedDocuments;
}());
var h1Public = new publicDocuments();
var h1Private = new privateDocuments();
var h1Protected = new protectedDocuments();
h1Public;
// h1Public.name = "Dsdsdd" // Ok
h1Private;
// h1Private.name = "Dsdsdd" // error
h1Protected;
// h1Protected.name = "Dsdsdd" // error
/* ------ Readonly Property ------ */
var LaptopBag = /** @class */ (function () {
    function LaptopBag(name, email) {
        this.name = name;
        this.email = email;
        this.name = name;
        this.email = email;
    }
    return LaptopBag;
}());
var l1 = new LaptopBag("HP", "2023");
l1;
/* ------ Getter & Setter In Classes ------ */
var HitseshChoudhary = /** @class */ (function () {
    function HitseshChoudhary(name) {
        this.name = name;
        this.name = name;
    }
    Object.defineProperty(HitseshChoudhary.prototype, "getName", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    return HitseshChoudhary;
}());
var hC1 = new HitseshChoudhary("HC");
console.log(hC1.getName);
