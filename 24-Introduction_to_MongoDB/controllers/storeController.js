const Favourite = require("../models/modelsFavourites");
const Home = require("../models/modelsHome");

exports.getIndex = (req, res, next) => {
  res.render("store/index", {
    PageTitle: "airbnb Home",
    currentPage: "Home",
  });
};
exports.getHomeslist = (req, res, next) => {
  Home.fetchAll().then((registrationHome) => {
    res.render("store/homeList", {
      registrationHome: registrationHome,
      PageTitle: "Homes List",
      currentPage: "Home List",
    });
  });
};
exports.getbookings = (req, res, next) => {
  res.render("store/booking", {
    PageTitle: "My Bookings",
    currentPage: "bookings",
  });
};
exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites().then(favourites => {
    favourites = favourites.map(fav => fav.houseId)
    Home.fetchAll().then((registrationHome) => {
      const favouriteHome = registrationHome.filter((home) =>
        favourites.includes(home._id.toString())
      );
      res.render("store/favourite-list", {
        favouriteHome: favouriteHome,
        PageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
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
      });
    }
  });
};

// For Favourites...
exports.postAddToFavouriteList = (req, res, next) => {
  const homeId = req.body.id;
  const favourite = new Favourite(homeId)
  favourite.save().then(result => {
    console.log('favourite Homes added', result)
    res.redirect("/favourites");
  }).catch(err => {
    console.log('Erroe while be in Favourite ', err)
    res.redirect("/favourites");
  })

};

// For Remove Favourite...
exports.postRemoveFavouriteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.removeFavouriteHomeById(homeId).then(result =>{
    console.log('Remove Favourite Element', result)
    res.redirect("/favourites");
  }).catch(err =>{
    console.log('error while be in remove favourite element', err)
    res.redirect("/favourites");
  })
};

