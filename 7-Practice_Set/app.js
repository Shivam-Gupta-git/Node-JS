const http = require('http')
const { requireRequestHandel } = require('./handler')
const server = http.createServer(requireRequestHandel);

const port = 3000;
server.listen(port, ()=>{
  console.log(`Server runnning at http://localhost:${port}`)
})