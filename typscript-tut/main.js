"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Day ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Gabriel");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
console.log();
console.log(m1.employeeName);
m1.greet();
m1.delegateWork();
// Access Modifiers
