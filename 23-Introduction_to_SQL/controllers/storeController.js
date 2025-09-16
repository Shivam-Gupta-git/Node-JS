const Favourite = require('../models/modelsFavourites')
const Home = require('../models/modelsHome')

exports.getIndex = (req, res, next)=>{
  res.render('store/index', {
    PageTitle: 'airbnb Home',
    currentPage: 'Home'
  })
}
exports.getHomeslist = (req, res, next)=>{
  Home.fetchAll().then(([registrationHome])=>{
    res.render('store/homeList', {
      registrationHome: registrationHome,
      PageTitle: 'Homes List',
      currentPage: 'Home List'
    })
  })
}
exports.getbookings = (req, res, next)=>{
  res.render('store/booking', {
    PageTitle: 'My Bookings',
    currentPage: 'bookings'
  })
}
exports.getFavouriteList = (req, res, next)=>{
  Favourite.getFavourites(favourites =>{
    Home.fetchAll().then(([registrationHome])=>{
      const favouriteHome = registrationHome.filter(home => favourites.includes(home.id))
      res.render('store/favourite-list', {
        favouriteHome: favouriteHome,
        PageTitle: 'My Favourites',
        currentPage: 'favourites'
      })
    })
  })
}

// For Home Details...
exports.getHomeDetails = (req, res, next)=>{
  const homeId = req.params.homeId;
  Home.findById(homeId).then(([homes])=>{
    const home = homes[0]
    if(!home){
      console.log('Home not found')
      res.redirect('/homelist')
    }
    else{
      // console.log('Home Details Found', home)
      res.render('store/home-details', {
        home: home,
        PageTitle: 'Home Details',
        currentPage: 'Home List',
      })
    }
  })
}

// For Favourites...
exports.postAddToFavouriteList = (req, res, next)=>{
  console.log('came to favourities', req.body)
  Favourite.addFavourites(req.body.id, error => {
    if(error){
      console.log('Error will mark in favourite')
    }
    res.redirect('/favourites')
  })
}

// For Remove Favourite...
exports.postRemoveFavouriteHome = (req, res, next)=>{
  const homeId = req.params.homeId;
  Favourite.removeFavouriteHomeById(homeId, error => {
  if(error){
    console.log('error', error)
  }
  res.redirect('/favourites');
  // console.log(favouriteHomeId)
  })
}
