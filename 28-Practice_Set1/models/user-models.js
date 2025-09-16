const mongoose = require('mongoose')

const productScheema = mongoose.Schema({
  productName: {
    type: String,
    require: true
  },
  companyName: {
    type: String,
    require: true
  },
  price: {
    type: String,
    require: true
  },
  description: String,
  image: String,
  category: {
    type: String,
    require: true
  }
})

// using Pre Hook Deleting items in every where..

productScheema.pre('findOneAndDelete', async function(next){
  const itemsId = this.getQuery._id;
})

module.exports = mongoose.model("Product", productScheema)

