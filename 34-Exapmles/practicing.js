/*-------- Example of non-blocking I/O ------*/
// console.log("start");
// setTimeout(() => {
// console.log("Middle");
// },2000)
// console.log(("end"));

/*----- Exapmle of V8 ------*/
// let a = 10;
// let b = 20
// let sum = a + b;
// console.log((sum));

/*----- Common Global Objects in Node.js -----*/
console.log("shivam");
global.name = "test";
console.log(global.name);

setTimeout(() => {
console.log("hello, I am here");
},2000)