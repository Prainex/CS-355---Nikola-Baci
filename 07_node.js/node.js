
// const crypto = require('crypto');
// // // Asynchronously generate a random string
// crypto.randomBytes(11, (err, buf) => {  
//   if (err) throw err;
//   console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
// });

// // // Asynchronously generate a UUID (Universally Unique Identifier)
// console.log(crypto.randomUUID());

// // //Store a password securely
// const password = 'Password123';
// const salt = 'uniqueSaltValue'; //Unique for every user
// const keyLength = 11; // Length of the derived password (should be longer)
// crypto.scrypt(password, salt, keyLength, (err, derivedKey) => {
//   if (err) throw err;
//   console.log('Derived key (hex):', derivedKey.toString('hex'));
// });


//--------------------------FS------------------------------------
// const fs = require("fs");

// //Create input.txt file and write Hello CS355!! 
// const data = "Hello world!!";
// fs.writeFile("input.txt", data, "utf8", (err) => {
//     if(err) throw err;    
//     else console.log("File written.");
// });

// // // //Read input.txt file and print the data
// fs.readFile("./input.txt", "utf8", (err, data) => {
//     if(err) throw err;
//     else console.log(data);
// })

// //How to make it not asynchronous
// fs.writeFile("input.txt", data, "utf8", (err) => {
//     if(err) throw err;    
//     console.log("File written.");
//     fs.readFile("./input.txt", "utf8", (err, data) => {
//         if(err) throw err;
//         else console.log(data);
//     });
// });

// //Opposite
// fs.readFile("./input.txt", "utf8", (err, data) => {
//     if(err) throw err;
//     console.log(data);
//     fs.writeFile("input.txt", data, "utf8", (err) => {
//         if(err) throw err;    
//         else console.log("File written.");
//     });
// });


// //Create a folder and explore the conetent of it
// fs.mkdir("./directory", (err) => {
//     if(err) console.log("Failed to create folder.");
//     else {
//         for(let i = 10; i <= 15; i++){
//             fs.writeFileSync(`./directory/${i}.txt`, `File ${i}`, (err) => {
//                 if(err) console.log(`Error writing file ${i}`);
//             })
//         } 
//         displayDir();
//     }
// })

// function displayDir(){
//     fs.readdir("./directory", (err, files) => {
//         if(err) throw err;
//         for(let file of files) {
//             console.log(file);
//         }
//     })
// }


//------------------------DNS-----------------------------
// const dns = require("dns");

// const domain = "google.com"
// dns.resolve(domain, (err, address) => {
//     if(err) throw err;
//     else console.log(`IP of ${domain}: ${address}`);
// })

// const domains = ["google.com", "amazon.com", 
//                  "ebay.com", "cuny.edu"];
// for(let domain of domains) {
//     dns.resolve(domain, (err, address) => {
//         if(err) console.log(`Error on ${domain}`);
//         else console.log(`IP of ${domain}: ${address}`);
//     });
// }


//-----------------------URL------------------------------
const url = require("url");
let urlObj = new URL("https://www.google.com/?q=%22How%20to%20learn%20js?%22")
console.log(urlObj);
console.log(urlObj.searchParams.get("q"));