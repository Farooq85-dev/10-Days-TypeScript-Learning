// Object Types
function greet2(pt) { }
function greet3(pt) {
    return;
}
function doSomething(obj) {
    console.log("prop has the value '".concat(obj.prop, "'."));
}
function draw(circle) {
    console.log("Color was ".concat(circle.color));
    console.log("Radius was ".concat(circle.radius));
}
// okay
draw({ color: "blue", radius: 42 });
// oops
draw({ color: "red", radius: 45562 });
