// Tutorial 5
// Explicit types
let character: string;
let age: number;
let isLoggenin: boolean;
 
//arrays
let ninjas: string[] = [];
ninjas.push("yoshi");

//union types
let mixed: (string|number|boolean)[] = [];
mixed.push(20);
mixed.push("hello");
console.log(mixed);

let uid: string|number;
uid = "123";
uid = 123;

//object
let ninhaOne: object;
ninhaOne = {name: "yoshi", age: 30};

let ninhaTwo: {
    name: string;
    age: number;
    beltColor: string;
};

ninhaTwo = {name: "mario", age: 20, beltColor: "black"};




/*
let character = 'mario';
let age = 30;
let isBlackBelt = false;

//character =30;

const circ = (diameter: number) => {
    return diameter * Math.PI;
} 

console.log(circ(7.5));


console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input =>{
    console.log(input);
})
 */
