const http = require('http')
const server = http.createServer((req, res)=>{
  console.log(res)
})


const port = 3000;
server.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})