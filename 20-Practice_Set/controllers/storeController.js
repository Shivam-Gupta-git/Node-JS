const Home = require('../models/modelsHome')

exports.getIndex = (req, res, next)=>{
  res.render('store/index', {
    PageTitle: 'airbnb Home',
    currentPage: 'Home'
  })
}
exports.getHomeslist = (req, res, next)=>{
  Home.fetchAll((registrationHome)=>{
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
  res.render('store/favourite-list', {
    PageTitle: 'My Favourites',
    currentPage: 'favourites'
  })
}
