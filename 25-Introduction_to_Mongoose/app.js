const path = require('path')

// External module
const express = require('express')
const app = express();

// Local module
const {storeRouter} = require('./routes/storeRouter')
const {hostRouter} = require('./routes/hostRouter')
const rootPath = require('./utils/utilPath')
const errorController = require('./controllers/errorController');
const { default: mongoose } = require('mongoose');

// middleware Function
app.use(express.urlencoded())


// EJS Function
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(storeRouter)
app.use(hostRouter)
app.use(express.static(path.join(rootPath, 'public')))

app.use(errorController.getErrorHandler);

const port = 3000;
const DB_Path = "mongodb+srv://root:shivam123@shivamgupta.yettrq8.mongodb.net/airbnb?retryWrites=true&w=majority&appName=shivamgupta"
mongoose.connect(DB_Path).then(()=>{
  app.listen(port, ()=>{
    console.log(`Surver running at http://localhost:${port}`)
  })
}).catch(err =>{
  console.log('Error while connected to mongoose', err)
}) 