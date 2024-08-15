import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice( 'mario', 'work on mario website', 250);
// const invTwo = new Invoice( 'yoshi', 'work on yoshi website', 300);


// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv =>{
//     console.log(inv.client, inv.amount, inv.format());
// });

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

// List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

// Its a call back function. when there is a submit => using e.preventDefault
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }

    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // );
list.render(doc, type.value, 'end');
});

// tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];

// let student: [string, number];
// student = ['chun-li', 2332];


// Generics

// const addUID = <T extends object>(obj: T) => {
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
} 

let genreic_test1 = addUID({name: "yoshi", age: 40});
//let genreic_test2 = addUID({age: 40});

//let dovTwo = addUID('hello');
// with interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }


// Enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'name of the wind'}
}

const docTwo: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi'}
}
// const docFour: Resource<string[]> = {
//     uid:2,
//     resourceType: ResourceType.PERSON,
//     data: ['milk', 'milk']
// }

console.log(docOne, docTwo);

