'use strict';
// if a is even increment output1 by one

let a: number = 24;
let output1: number = 0;

if (a % 2 === 0) {
    console.log("even");
    output1 = output1 + 1;
} 

console.log(output1);

// if b is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"

let b: number = 13;
let output2

if (b < 20) {
    output2 = 'Sweet!';
}
if (b < 10) {
    output2 = 'less!';
}
if (b > 20) {
    output2 = 'More!';
}

console.log(output2);

// if credits are at least 50

let c: number = 123;
let credits: number = 51;
let isBonus: boolean = false;

if (credits < 50 && isBonus === false) {
    c = c - 2;
}
if (credits > 50 && isBonus === false) {
    c = c -1;
}

if (isBonus = true) {
    c = c;
}

console.log (c);
console.log(isBonus);
