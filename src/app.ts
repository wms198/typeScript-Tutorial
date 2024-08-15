// Tutorial 12 classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice( 'mario', 'work on mario website', 250);
const invTwo = new Invoice( 'yoshi', 'work on yoshi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = 'luigi';
invTwo.amount = 400;
console.log(invoices);

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

