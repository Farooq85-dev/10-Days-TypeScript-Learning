// Enums, void, Never
// Enums are used to group items
var home = "HOME";
var about = "ABOUT";
var contact = "CONTACT";
var certificates = "CERTIFICATES";
// instead of this we will use enums
var navbarItmes;
(function (navbarItmes) {
    navbarItmes["home"] = "HOME";
    navbarItmes["about"] = "ABOUT";
    navbarItmes["contact"] = "CONTACT";
    navbarItmes["certificates"] = "CERTIFICATES";
})(navbarItmes || (navbarItmes = {}));
console.log(navbarItmes.about);
// Never
// TypeScript introduced a new type "  never  ", which indicates the values that will never occur.
function Hello() {
    while (true) { }
}
function sayHi() {
    console.log("Hi!");
}
