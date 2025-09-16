const Product = require("../models/user-models")

exports.gethostAddItems = (req, res, next) => {
  res.render('host/add-items',{
    PageTitle: 'host Add Items',
    currentPage: 'host Add Items',
    editing: false,
  })
}

exports.postAddedItems = (req, res, next) => {
  const {productName, companyName, price, description, image, category} = req.body
  const items = new Product({
    productName,
    companyName, 
    price, 
    description, 
    image, 
    category,
  })
  items.save().then(()=>{
    console.log('Items Save Sucessfully')
  })
  res.redirect('/itemsList')
}

exports.getHostAddedItemsList = (req, res, next) => {
  Product.find().then((productItems)=>{
    res.render('host/host-added-items-list',{
      PageTitle: 'Host Items List',
      currentPage: 'Host Items List',
      productItems: productItems
  })
  })
}

exports.getHostEditItems = (req, res, next) => {
  const itemsId = req.params.itemsId
  const editing = req.query.editing === 'true'
  Product.findById(itemsId).then((editItems)=>{
    if(!editItems){
     return res.redirect('host/host-added-items-list')
    }
    res.render('host/add-items', {
      PageTitle: 'host Add Items',
      currentPage: 'host Add Items',
      editing: editing,
      editItems: editItems
    })
  })
}

exports.postHostEditItems = (req, res, next) =>{
  // console.log(req.body)
  const {id, productName, companyName, price, description, image, category} = req.body

  Product.findById(id).then((items=>{
   items.productName = productName;
   items.companyName = companyName;
   items.price = price;
   items.description = description;
   items.image = image;
   items.category = category;

   items.save().then((result => {
   console.log('items update', result)
   })).catch(err => {
    console.log('erroe while updating', err)
   })
   res.redirect('/host-item-list')
  })).catch(err => {
    console.log('error while finding item', err)
  })
}

exports.postDeleteItems = (req, res, next) => {
  const itemsId = req.params.itemsId
  Product.findByIdAndDelete(itemsId).then(()=>{
    res.redirect('/host-item-list')
  }).catch(err =>{
    console.log('error while detected', err)
  })
}