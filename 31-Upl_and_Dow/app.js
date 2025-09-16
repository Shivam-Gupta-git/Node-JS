const path = require('path')

// External module
const express = require('express')
const { default: mongoose } = require('mongoose');
const session = require('express-session')
const mongoDBStore = require('connect-mongodb-session')(session)
const multer = require('multer')
const DB_Path = "mongodb+srv://root:shivam123@shivamgupta.yettrq8.mongodb.net/airbnb?retryWrites=true&w=majority&appName=shivamgupta"


const app = express();

// Local module
const {storeRouter} = require('./routes/storeRouter')
const {hostRouter} = require('./routes/hostRouter')
const {authRouter} = require('./routes/authRouter')
const rootPath = require('./utils/utilPath')
const errorController = require('./controllers/errorController');



// EJS Function
app.set('view engine', 'ejs')
app.set('views', 'views')

//  Generate a random number
const randomString = (length) => {
  const character = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for(let i = 0; i < length; i++){
    result += character.charAt(Math.floor(Math.random() * character.length));
  }
  return result
}

// Multer
const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, 'uploads/')
  },
  filename: (req, file, cd) => {
    cd(null, randomString(10) + '-' + file.originalname)
  }
}) 
const fileFilter = (req, file, cd) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' ){
    cd(null, true)
  }else{
    cd(null, false)
  }
}
const multerOptions = {
  storage,
  fileFilter
}

// middleware Function
app.use(express.urlencoded())
app.use(multer(multerOptions).single('photo'))
app.use(express.static(path.join(rootPath, 'public')))
app.use('/uploads', express.static(path.join(rootPath, 'uploads')))
app.use('/host/uploads', express.static(path.join(rootPath, 'uploads')))
app.use('/homelist/uploads', express.static(path.join(rootPath, 'uploads')))

// Session Store
const store = new mongoDBStore({
  uri: DB_Path,
  collection: 'sessions'
})

// this can be used for Session
app.use(session({
 secret: "shivam@543kumar",
 resave: false,
 saveUninitialized: true,
 store: store,
}));
app.use((req, res, next) => {
 req.isLoggedIn = req.session.isLoggedIn;
  next()
})


// Imports Routers
app.use(authRouter)
app.use(storeRouter)
app.use(hostRouter)

// app.use(" ", (req, res, next)=>{
//   if(req.IsLogedIn){
//     next()
//   }else{
//     res.redirect('/login')
//   }
// })



app.use(errorController.getErrorHandler);

const port = 3000;

mongoose.connect(DB_Path).then(()=>{
  app.listen(port, ()=>{
    console.log(`Surver running at http://localhost:${port}`)
  })
}).catch(err =>{
  console.log('Error while connected to mongoose', err)
}) 

// mongodb://localhost:27017