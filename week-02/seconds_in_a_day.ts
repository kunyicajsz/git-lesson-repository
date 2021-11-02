'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let secondsInADay: number = 86400;
let elapsedSeconds: number;
let remainingSeconds: number;

elapsedSeconds = (14*3600)+(34*60)+42;
remainingSeconds = secondsInADay - elapsedSeconds;

console.log("total elapsed seconds of the day ", elapsedSeconds);
console.log("total reamining seconds of the day ", remainingSeconds);

