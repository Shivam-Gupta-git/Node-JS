const Home = require('../models/modelsHome')

exports.getAddHomes = (req, res, next)=>{
  res.render('host/addHomes', {
    PageTitle:'Add Home to airbnb',
    currentPage: 'Add Home',
    editing: false
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
// For Editing Home
exports.getEditHomes = (req, res, next)=>{
const homeId = req.params.homeId;
const editing = req.query.editing === 'true';
Home.findById(homeId, home=>{
  if(!home){
    return res.redirect('host/host-home-list')
  }
  res.render('host/addHomes', {
    PageTitle: 'Edit Your Home',
    currentPage: 'Host Home List',
    editing: editing,
    home: home,
  })
})
}
exports.postEditHomes = (req, res, next)=>{
  const{id, houseName, price, location, rating, photoUrl} = req.body
  const home = new Home (houseName, price, location, rating, photoUrl)
  home.id = id
  home.save();
  res.redirect('/host-home-list');
  console.log(home)
}

exports.postDeleteHome = (req, res, next)=>{
  const homeId = req.params.homeId;
  // console.log(homeId)
  Home.deleteById(homeId, error => {
    if(error){
      console.log('error while deleting', error)
    }
    res.redirect('/host-home-list')
  })
}