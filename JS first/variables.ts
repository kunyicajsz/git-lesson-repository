'use strict';

// my favourite number
let favouritenumber: number = 11;
console.log ("My favouritenumber is: " + favouritenumber);
// swap variables
let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

console.log(numberToSwap1);
console.log(numberToSwap2);

let Temp = numberToSwap1;
numberToSwap1 = numberToSwap2;
numberToSwap2 = Temp;

console.log("after swap");
console.log(numberToSwap1);
console.log(numberToSwap2);
// Print the Body mass index (BMI) based on these values

let massInKg: number = 81.2;
let heightInM: number = 1.78;
let BMI;
BMI= massInKg/(heightInM*heightInM);

console.log("BMI index:");
console.log(Math.round(BMI * 100)/100);

// Define several things as a variable, then print their values

let myName: string = "Andras Paldi";
let myAge: number = 34;
let height: number = 1.75;
let amIMarried: boolean = false;

console.log("My name is: ", myName);
console.log("I`m : ", myAge);
console.log("I am ", height, "metres tall");
console.log("am I married?", amIMarried);

// variable mutations

let a: number = 3;
a= a+10;
console.log(a);

let b: number = 100;
b= b-7;
console.log(b);

let c: number = 44;
c=c*2;
console.log(c);

let d: number = 125;
d=d/5;
console.log(d);

let e: number = 8;
e=e*e*e;
console.log(e);

let f1: number = 123;
let f2: number = 345;

f1 < f2;
console.log(f1 > f2);

let g1: number = 350;
let g2: number = 200;
console.log(g1*2 > g2);

let h: number = 1357988018575474;
console.log(h%11);

if (h % 11 === 0) {
    console.log("is dividable with 11");
} else {
    console.log("is not dividable by 11");
}    

let i1: number = 10;
let i2: number = 3;