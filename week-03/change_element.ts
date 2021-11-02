'use strict';
export {}

let numbers: number [] = [1,2,3,8,5,6]

let numbersChanged = numbers.map(function(e, i) {
    if (i === 3) {
        return 4;
    } else {
        return e;
    }
});
console.log(numbersChanged);