const userHandelRequire = ((req, res)=>{
console.log(req.url, req.method)
// Event Loop Sequence.......

console.log('1. Start of Script')

// Microtask queue (Promise)
Promise.resolve().then(()=> console.log('2. Misrotask 1'))

// Timer queue
setTimeout(()=> console.log('3. Timer 1'), 0)

// I/O queue
const fs = require('fs')
fs.readFile('user-details .txt', ()=> console.log('4. i/o Operation'))

// check queue
setImmediate(()=> console.log('5. immediate 1'))

// close queue
process.on('exit', (code)=>{
  console.log('6. Exit event')
})

console.log('7. End of Script')
return res.end();

})
module.exports = userHandelRequire;