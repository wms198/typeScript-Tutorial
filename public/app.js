import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
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
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// Its a call back function. when there is a submit => using e.preventDefault
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
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
let tup = ['ryu', 25, true];
// let student: [string, number];
// student = ['chun-li', 2332];
// Generics
// const addUID = <T extends object>(obj: T) => {
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let genreic_test1 = addUID({ name: "yoshi", age: 40 });
//let genreic_test2 = addUID({age: 40});
//let dovTwo = addUID('hello');
// with interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'name of the wind' }
};
const docTwo = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
};
// const docFour: Resource<string[]> = {
//     uid:2,
//     resourceType: ResourceType.PERSON,
//     data: ['milk', 'milk']
// }
console.log(docOne, docTwo);
