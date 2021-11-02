'use strict';
export { };

//third element
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers[2]);
//compare lenghts

let firstList: number[] = [1, 3, 5];
let secondList: number[] = [2, 4];

if (firstList.length > secondList.length) {
    console.log("the first list is longer");
} else {
    console.log("the second list is longer");
}

//sum of elements

let numbers2: number[] = [54, 23, 66, 12];

console.log(numbers2[2] + numbers2[3]);

// swap elements

let names: string[] = [`Arthur`, `Boe`, `Chloe`];
let temp: string = names[0];
names: names[0] = names[1];
names: names[1] = temp;

console.log(names);

