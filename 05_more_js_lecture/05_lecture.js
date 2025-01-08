let name = "John Doe";
const pi= 3.14159;
let random = `Hello my name is ${name}, 
            I know 5 digits of pi: ${pi}`;


// if(3 !== "3"){
//     console.log("3 is equal to 3"); //printed
// }
// if(3 === "3"){
//     console.log("3 is equal to 3"); //did not print
// }
// if(3 == "3"){
//     console.log("3 is equal to 3"); //printed
// }


// let i = 0;
// for (let i = 0; i< 10; i++){
//     console.log(i);
// }

// function add(a, b=10){  //putting =10 is a default value incase extra value doesn't get provided
//     return a + b;
// }   

// console.log(add(3)); //this will print 13
// console.log(add(3, 4)); //this will print 7

// function inc(a){
//     a = a+1;
//     return;
// }

// let a = 3;
// inc(a);
// console.log(a);

// let sub = (a, b) => { //These are called 'arrow functions'
//     return a-b;
// }

// let bus = (a, b) => a-b; //Same difference as the top function, but looks uglier.

// console.log(sub(3, 4)); //Returns -1
// console.log(bus(3, 4)); //Returns -1

// let echo = a => console.log(a);
// echo(7);

// let sayHallo = () => {
//     console.log("Hello World");
// }
// sayHallo();

// let arr = [1, 2, 3, 4, 5];
// let findMax = (array) => {
//     let max = array[0];
//     for(let i = 0; i < arr.length; i++){
//         if (max < array[i]){
//             max = array[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// let add2 = (a, b, c=10) => a+b+c;
// let add = (a, b) => a+b;
// let sub = (a, b) => a-b;
// let mul = (a, b) => a*b;

// let div = (a, b) =>{
//     if (b === 0) return 0;
//     else return a/b;
// }

// function performOp(a, b, opFunc){
//     return opFunc(a, b);
// }

// console.log(performOp(20, 2, mul));

// function sayHello(name, greeting) {
//     function greetingF(){
//         console.log(`${greeting} from ${name}`);
//     }
//     return greetingF;
// }

// let g = sayHello("Gimmi", "Hello, and Good Morning!");
// g();

// function sayHello(name, greeting){
//     let g = () => console.log(`${greeting} from ${name}`);
//     return g;
// }

// let e = sayHello("Gimmi", "Hello, and Good Morning!");
// e();

// function createMultiplier(multiplier){
//     return (num) => multiplier * num;
// }

// let double = createMultiplier(2);
// console.log(double(9));

// let triple = createMultiplier(3);
// console.log(triple(13));