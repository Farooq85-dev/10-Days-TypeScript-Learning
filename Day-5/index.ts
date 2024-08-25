// Enums, void, Never
// Enums are used to group items

const home = "HOME";
const about = "ABOUT";
const contact = "CONTACT";
const certificates = "CERTIFICATES";
// instead of this we will use enums

enum navbarItmes {
  home = "HOME",
  about = "ABOUT",
  contact = "CONTACT",
  certificates = "CERTIFICATES",
}

console.log(navbarItmes.about);

// Never
// TypeScript introduced a new type "  never  ", which indicates the values that will never occur.
function Hello(): never {
  while (true) {}
}

function sayHi(): void {
  console.log("Hi!");
}
