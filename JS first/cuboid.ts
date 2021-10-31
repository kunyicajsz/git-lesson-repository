'use strict';

let a: number = 10;
let b: number = 20;
let c: number = 30;

let surfaceArea: number;
let volume: number;

volume = a*b*c;
surfaceArea = ((a*b)+(a*c)+(b*c))*2;

console.log("the volume of the cube is: ",volume);
console.log(surfaceArea);