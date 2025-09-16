const fs = require('fs');
// Define Two Variable
 let a = 10;
 let b = 20;

//  Basic Arthemitic operation 
let sum = a + b;
let product = a * b;

// Prepare data to write
let data = `Sum: ${sum} \nProduct: ${product}`
console.log(data)

// Write data to a local file 
fs.writeFile('output.txt', data, (err) => {
  if(err) throw err; 
  console.log('Data written to file')
})