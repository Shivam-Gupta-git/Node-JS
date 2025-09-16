const Product = require("../models/user-models")

exports.getHomePage = (req, res, next)=>{
  res.render('user/home',{
    PageTitle: 'Home Page',
    currentPage: 'Home Page'
  })
}
exports.getItemsList = (req, res, next) =>{
  Product.find().then((productItems)=>{
    res.render('user/added-items-list', {
      productItems: productItems,
      PageTitle: 'Items List',
      currentPage: 'Items List',
    })
  })
}

