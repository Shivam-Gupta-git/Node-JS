// Core module
const path = require('path')

// External module
const express = require('express');
const session = require('express-session')
const mongoDBStore = require('connect-mongodb-session')(session)
const DB_Path = "mongodb+srv://root:shivam123@shivamgupta.yettrq8.mongodb.net/Practice2?retryWrites=true&w=majority&appName=shivamgupta"
const app = express() 


// Local module
const roothPath = require('./utils/utils-path')
const {userRouter} = require('./routes/user-router')
const {hostRouter} = require('./routes/host-routr')
const {authRouter} = require('./routes/auth-router')
const { default: mongoose } = require('mongoose');


// EJS 
app.set('view engine', 'ejs')
app.set('views', 'views')


// Session Store
const store = new mongoDBStore({
  uri: DB_Path,
  collection: 'sessions'
})

// Middleware 
app.use(express.urlencoded())

// Session
app.use(session({
  secret:'shivam123',
  resave: false,
  saveUninitialized: true,
  store: store
}))
app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next()
})

// Imports
app.use(userRouter);
app.use(hostRouter);
app.use(authRouter);

app.use(express.static(path.join(roothPath, 'public')))



const port = 3002;
mongoose.connect(DB_Path).then(()=>{
  app.listen(port, ()=>{
    console.log(`Surver running at http://localhost:${port}`)
  })
}).catch(err =>{
  console.log('Error while connecting to mongoDb', err)
})