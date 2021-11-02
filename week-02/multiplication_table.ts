'use strict';

export function multiplicationTable() {
let number: number = 15;

    for (let i = 1; i <= 10; i++) 
        {let multiplication = i * number;
        console.log(`${number} * ${i} = ${multiplication}`);
}  }
multiplicationTable();