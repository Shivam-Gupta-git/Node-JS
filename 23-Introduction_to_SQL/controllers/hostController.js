const Home = require('../models/modelsHome')

exports.getAddHomes = (req, res, next)=>{
  res.render('host/addHomes', {
    PageTitle:'Add Home to airbnb',
    currentPage: 'Add Home',
    editing: false
  })
}
exports.postAddedHomes = (req, res, next)=>{
  const {houseName, price, location, rating, photoUrl, description} = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl, description);
  home.save()

  res.render('host/addedHomes', {
    PageTitle:'Home Added Successfully',
    currentPage: 'Home Added'
  })
}

exports.getHostHomesList = (req, res, next)=>{
  Home.fetchAll().then(([registrationHome])=>{
    res.render('host/host-home-list', {
      registrationHome: registrationHome,
      PageTitle: 'Host Home List',
      currentPage: 'Host Home List'
    })
  })
}
exports.getEditHomes = (req, res, next)=>{
const homeId = req.params.homeId;
const editing = req.query.editing === 'true';
Home.findById(homeId).then(([homes])=>{
  const home = homes[0]
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
  const{id, houseName, price, location, rating, photoUrl, description} = req.body
  const home = new Home (houseName, price, location, rating, photoUrl, description)
  home.id = id
  home.save();
  res.redirect('/host-home-list');
}

exports.postDeleteHome = (req, res, next)=>{
  const homeId = req.params.homeId;
  console.log(homeId)
  Home.deleteById(homeId).then(() => {
    res.redirect('/host-home-list')
  })
  .catch(error =>{
    console.log('error while deleting', error)
  })
}