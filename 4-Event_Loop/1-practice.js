const http = require('http')
const userHandelRequire = require('./1-practice_handler')
const server = http.createServer(userHandelRequire)

const port = 3000;
server.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})