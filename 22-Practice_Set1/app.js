// core module
const path = require('path')

// External module
const express = require('express')
const app = express()

// Local module
const {userRouter} = require('./routes/user-routes')
const {hostRouter} = require('./routes/host-routes')
const rootPath = require('./utils/utils-path')

// middleware Function
app.use(express.urlencoded())

// EJS Function
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(userRouter)
app.use(hostRouter)
app.use(express.static(path.join(rootPath, 'public')))

const port = 3002;
app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})