const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("i spend", amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('yoshi', 'work on yoshi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// Tutorial 11 the DOM & type casting
// const anchor = document.querySelector('a')!;
// // if(anchor){
// //     console.log(anchor);
// // }
// console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Its a call back function. when there is a submit => using e.preventDefault
form.addEventListener('submit', (e) => {
    e.preventDefault;
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
