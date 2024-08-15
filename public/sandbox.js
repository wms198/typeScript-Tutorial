"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid og ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
/*
// Tutorial Function
let greet: Function;

greet = () => {
    console.log("hello");
}

const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}
add(5, 10);

const minus = (a: number, b: number): number => {
    return a + b;
}
let result = minus(10, 7);

 // Tutorial 7 Workflow & tsconfig
 console.log("test");

 // Tutorial 6 Dynamic(any) Types
 let age: any = 25;
 age = true;
 console.log(age);

 let mixed: any[] = [];
 mixed.push(5);
 mixed.push("mario");
 mixed.push(true);

 let ninja: {name: any, age: any};
 ninja = {name: 25, age: "yoshi"};
 console.log(ninja);
 
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
