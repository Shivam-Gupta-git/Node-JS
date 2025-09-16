const { getDB } = require("../utils/dataBaseUtils")

 module.exports = class Favourite {
 constructor(houseId){
  this.houseId = houseId
 }

 save(){
  const db = getDB()
  return db.collection('favourite').findOne({houseId: this.houseId}).then(existing =>{
   if(!existing){
      return db.collection('favourite').insertOne(this)
     
   }
   return Promise.resolve()
  })
 }

  // static addFavourites(homeId, callback){
  // }
  
  static getFavourites(){
  const db = getDB()
  return db.collection('favourite').find().toArray() 
  }


  static removeFavouriteHomeById(deleteFavHomes){
   const db = getDB()
   return db.collection('favourite').deleteOne({houseId: deleteFavHomes})
}
}