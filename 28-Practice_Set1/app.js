// Core module
const path = require("path");

// External module
const express = require("express");
const app = express();

// Local module
const rootPath = require("./utils/util-path");
const { userRouter } = require("./routes/user-router");
const { hostRouter } = require("./routes/host-router");
const { default: mongoose } = require("mongoose");


// Middleware Functionality
app.use(express.urlencoded());

// EJS Functionality
app.set("view engine", "ejs");
app.set("views", "views");

// use Routers
app.use(userRouter);
app.use(hostRouter);

// Tailwind css Path
app.use(express.static(path.join(rootPath, "public")));

const port = 3000;

const DB_Path = "mongodb+srv://root:shivam123@shivamgupta.yettrq8.mongodb.net/project1?retryWrites=true&w=majority&appName=shivamgupta"
mongoose.connect(DB_Path).then(()=>{
  app.listen(port, () => {
    console.log(`surver running at http://localhost:${port}`);
  });
}).catch(err =>{
  console.log('Error while connencted to mongoose', err)
})