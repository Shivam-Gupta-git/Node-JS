const Home = require('../models/modelsHome')

exports.getAddHomes = (req, res, next)=>{
  res.render('host/addHomes', {
    PageTitle:'Add Home to airbnb',
    currentPage: 'Add Home'
  })
}
exports.postAddedHomes = (req, res, next)=>{
  const {houseName, price, location, rating, photoUrl} = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save()

  res.render('host/addedHomes', {
    PageTitle:'Home Added Successfully',
    currentPage: 'Home Added'
  })
}
exports.getHostHomesList = (req, res, next)=>{
  Home.fetchAll((registrationHome)=>{
    res.render('host/host-home-list', {
      registrationHome: registrationHome,
      PageTitle: 'Host Home List',
      currentPage: 'Host Home List'
    })
  })
}