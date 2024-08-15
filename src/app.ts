// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log("i spend", amount);
        return amount;
    }
};
const greetPerson = (person: IsPerson) =>{
    console.log('hello ', person.name);

}
greetPerson(me);

console.log(me);

import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice( 'mario', 'work on mario website', 250);
const invTwo = new Invoice( 'yoshi', 'work on yoshi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv =>{
    console.log(inv.client, inv.amount, inv.format());
});

// Tutorial 11 the DOM & type casting
// const anchor = document.querySelector('a')!;

// // if(anchor){
// //     console.log(anchor);
// // }

// console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector('#type')! as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;

// Its a call back function. when there is a submit => using e.preventDefault
form.addEventListener('submit', (e: Event) => {
    e.preventDefault;

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );

})

