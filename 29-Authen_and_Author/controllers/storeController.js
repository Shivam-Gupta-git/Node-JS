const Home = require("../models/modelsHome");
const User = require('../models/modelUser')
exports.getIndex = (req, res, next) => {
  res.render("store/index", {
    PageTitle: "airbnb Home",
    currentPage: "Home",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user
  });
};
exports.getHomeslist = (req, res, next) => {
  Home.find().then((registrationHome) => {
    res.render("store/homeList", {
      registrationHome: registrationHome,
      PageTitle: "Homes List",
      currentPage: "Home List",
      isLoggedIn: req.isLoggedIn,
      user: req.session.user
    });
  });
};
exports.getbookings = (req, res, next) => {
  res.render("store/booking", {
    PageTitle: "My Bookings",
    currentPage: "bookings",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user
  });
};

exports.getFavouriteList = async (req, res, next) => {
  const userId = req.session.user._id
  const user = await User.findById(userId).populate('favourites')
  res.render("store/favourite-list", {
    favouriteHome: user.favourites,
    PageTitle: "My Favourites",
    currentPage: "favourites",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user
  });
};

// For Home Details...
exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homelist");
    } else {
      // console.log('Home Details Found', home)
      res.render("store/home-details", {
        home: home,
        PageTitle: "Home Details",
        currentPage: "Home List",
        isLoggedIn: req.isLoggedIn
      });
    }
  });
};

// For Favourites...
exports.postAddToFavouriteList = async (req, res, next) => {
  const homeId = req.body.id;
  const userId = req.session.user._id
  const user = await User.findById(userId)
  if(!user.favourites.includes(homeId)){
   user.favourites.push(homeId)
   await user.save()
  }
   res.redirect("/favourites");
  }

// For Remove Favourite...
exports.postRemoveFavouriteHome = async (req, res, next) => {
  const homeId = req.params.homeId;
  const userId = req.session.user._id;
  const user = await User.findById(userId)
  if(user.favourites.includes(homeId)){
    user.favourites = user.favourites.filter(fav => fav != homeId)
    await user.save();
  }
  res.redirect("/favourites");
};
