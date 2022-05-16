// First line of code
export {}
let message = "Welcome Back";
console.log(message);

// variable types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Gabriel";

let sentence: string = `My name is ${name},
I am a beginner in Typescript`;

console.log(sentence);

// More types
let n: null = null;
let u: undefined = undefined;

// Declaring arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["chris", 33];

enum Color { Red, Green, Blue };
let c: Color = Color.Blue;
console.log(c);

// any variable type
let myVariable: any = 10;

// unknown variable type
let myVariable1: unknown = 10

function hasName(obj: any): obj is { name: string } {
    return !! obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable1)) {
    console.log(myVariable1.name)
}

//(myVariable as string).toUpperCase();

// Functions
function add(num1: number, num2: number = undefined): number {
    if (num2) return num1 + num2;
    else return num1;
}

console.log(add(5));
console.log(add(5, 10));

// Interfaces
interface Person {
    firstName: string;
    lastName?: string;
};

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: "Gabriel",
    lastName: "Nweke"
}

fullName(p);