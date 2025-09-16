const Home = require("../models/home")

exports.getAddHome = (req, res, next)=>{
  res.render('addHome',{
    PageTitle:'Add Home to airbnb',
    currentPage: 'Add Home'
  })
}
exports.postAddHome = (req, res, next)=>{
  const {houseName, price, location, rating, photoUrl} = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render( 'showMessage',{
    PageTitle:'Home Added Successfully',
    currentPage: 'Home Added '
  })
}

exports.getHomes = (req, res, next)=>{
   Home.fetchAll((registrationHome)=>{
    res.render('home', {
      registrationHome: registrationHome,
      PageTitle: 'airbnb Home',
      currentPage: 'Home'
    })
  });
}

