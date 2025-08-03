const http = require('http')
const testingSyntax = require('./syntax')
const runtimeErrorHandle = require('./runtime')
const logicalErrorHandel = require('./logical')
const server = http.createServer((req, res)=>{
  console.log(req.url, req.method)
  // testingSyntax();
  // runtimeErrorHandle();
  // Error Handling.....
  logicalErrorHandel()
  return res.end();
});

const port = 3002;
server.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})