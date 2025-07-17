const http = require('http')
const userRequestHandle = require('./user')
const server = http.createServer(userRequestHandle)


const port = 3000;
server.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})