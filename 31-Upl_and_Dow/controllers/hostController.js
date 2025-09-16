const Home = require("../models/modelsHome");
const fs = require('fs')

exports.getAddHomes = (req, res, next) => {
  res.render("host/addHomes", {
    PageTitle: "Add Home to airbnb",
    currentPage: "Add Home",
    editing: false,
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};
exports.postAddedHomes = (req, res, next) => {
  const { houseName, price, location, rating,  description } = req.body;
  console.log(houseName, price, location, rating, description)
   
  if(!req.file){
   return res.status(422).send('No image provided')
  }
  const photo = req.file.path
  const home = new Home({
    houseName,
    price,
    location,
    rating,
    photo,
    description,
  });
  home.save().then(() => {
    console.log("Home Saved Sucessfully");
  });

  res.render("host/addedHomes", {
    PageTitle: "Home Added Successfully",
    currentPage: "Home Added",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.getHostHomesList = (req, res, next) => {
  Home.find().then((registrationHome) => {
    res.render("host/host-home-list", {
      registrationHome: registrationHome,
      PageTitle: "Host Home List",
      currentPage: "Host Home List",
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
  });
};
exports.getEditHomes = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId).then((home) => {
    if (!home) {
      return res.redirect("host/host-home-list");
    }
    res.render("host/addHomes", {
      PageTitle: "Edit Your Home",
      currentPage: "Host Home List",
      editing: editing,
      home: home,
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
  });
};
exports.postEditHomes = (req, res, next) => {
  const { id, houseName, price, location, rating, description } =
    req.body;
  Home.findById(id)
    .then((home) => {
      home.houseName = houseName;
      home.price = price;
      home.location = location;
      home.rating = rating;
      home.description = description;

      if(req.file){
        fs.unlink(home.photo, (err)=>{
          if(err){
            console.log('error while deleting file', err)
          }
        })
        home.photo = req.file.path
      }

      home
        .save()
        .then((result) => {
          console.log("Home Updated", result);
        })
        .catch((err) => {
          console.log("error while updating", err);
        });
      res.redirect("/host-home-list");
    })
    .catch((err) => {
      console.log("error while finding home", err);
    });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log(homeId);
  Home.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host-home-list");
    })
    .catch((error) => {
      console.log("error while deleting", error);
    });
};
