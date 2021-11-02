'use strict';
export { };

// swap elements

let names: string[] = [`Arthur`, `Boe`, `Chloe`];
let temp: string = names[0];
names: names[0] = names[1];
names: names[1] = temp;

console.log(names);

