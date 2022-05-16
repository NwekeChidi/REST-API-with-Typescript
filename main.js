"use strict";
exports.__esModule = true;
var message = "Welcome Back";
console.log(message);
// variable types
var isBeginner = true;
var total = 0;
var name = "Gabriel";
var sentence = "My name is ".concat(name, ",\nI am a beginner in Typescript");
console.log(sentence);
// More types
var n = null;
var u = undefined;
// Declaring arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["chris", 33];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
// any variable type
var myVariable = 10;
// unknown variable type
var myVariable1 = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable1)) {
    console.log(myVariable1.name);
}
//(myVariable as string).toUpperCase();
// Functions
function add(num1, num2) {
    if (num2 === void 0) { num2 = undefined; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5));
console.log(add(5, 10));
;
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Gabriel",
    lastName: "Nweke"
};
fullName(p);
