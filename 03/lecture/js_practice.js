// var
// let 
// const
// 3 ways to declare variables, but in web development we'll mostly be using let and const.

let name = "John Doe";
const age = 28;
let isValid = true; // False
let pi = 3.14;

//Typescript is just Javascript but it looks similar to c++ and java. It allows you to specify the variables
pi = "Jane Doe"; //Can create a lot of problems in production. This is where typescript comes in.

//Types of strings
let address = '123 Main St.'
let intro = `Hello there I am ${name}, 
                I am ${age} years young, 
                I live in ${address}`; //Template String 

let ssn = undefined;
let dob = null;

//if-else statements
if(isValid) {
    console.log("Yay, that is great!");
}// else if() {

// }
else{
    console.log("Man that sucks!");
}

// console.log(intro)

//for loop
for(let i = 0; i < 10; i++){
    console.log(`i is equal to ${i}`);
}

//while loop
let x = 0;
while(x < 10){
    console.log(`x=${x}`);
    x++;
}

//arrays
let arr1 = [];
let arr2 = Array();
let arr3 = ["Apples", "Bananas", "Peaches", "Pears"];

for (let i = 0; i < arr3.length; i++){
    console.log(arr3[i]);
}
console.log(arr3[2]);
console.log(arr3.length);

let obj = {
    name: "John Doe",
    favdinks: ["coffee", "redbull", "matcha"],
    isValid: false
}

console.log(obj.favdinks[2]);

obj.age=23;
console.log(obj)

function addition(a, b){
    return a+b+1;
}

console.log(addition(1, 2));

let subtraction = addition;
console.log(subtraction(1, 2));