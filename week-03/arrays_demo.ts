let number : number [] = [1,2,3,100];
let arr1 : number [] = [];

//always define the arrays (as well). undefined cant be filled with anything
//let arr1 : number [] = [];
let arr2 : Array<number> = [];

arr1.push(1);
arr1.push(2);

console.log(arr1);

arr1.unshift(3);

console.log(arr1);

arr1[0] = 4;

console.log(arr1);

arr1.splice(3, 0, 4);

console.log(arr1);

arr1[4] = 5;

console.log(arr1);

arr1[arr1.length] = 6;

console.log(arr1);

for(let i: number = 0; i<= arr1.length - 1; i++) {

    console.log(`index is: ${i} and array number is: ${arr1[i]}`);
}

arr1.forEach(x => console.log(x));

for (let i in arr1) {
    console.log(i);
}

for (let i of arr1) {
    console.log(i);
} 

    const animals: string[] = [`cica`, `kutya`, `hod`, `elefant`];

    for (let i in arr1) {
        console.log(i);
    }

    for (let i of arr1) {
        console.log(i);
    }

    animals.sort();
    animals.map(x => x);

    console.log (animals);

    const [one, two, ...remaining] = [1, 2, 3, 4, 5, 6, 7];
    console.log(one);
    console.log(two);
    console.log(remaining);

const numberArr: number[] = [9, 4, 2, 11, 7];

console.log(numberArr.sort((a, b) => a-b));

