const fs = require('fs')
const path = require('path');
const rootPath = require('../utils/utilPath');
const { error } = require('console');

const favouriteDataPath = path.join(rootPath, 'data', 'favourite.json');

module.exports = class Favourite{
  static getFavourites(callback){
  fs.readFile(favouriteDataPath, (err, data)=>{
    callback(!err ? JSON.parse(data) : [])
  })
  }

  static addFavourites(homeId, callback){
    Favourite.getFavourites((favourites)=>{
      if(favourites.includes(homeId)){
        callback('Home is Allready in favourite', error)
      }
      else{
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback)
      }
    })
  }
  
  // For remove favourite home...
  static removeFavouriteHomeById(favouriteHomeId, callback){
  Favourite.getFavourites(homeIds =>{
    homeIds = homeIds.filter(homeIds => favouriteHomeId!== homeIds);
    fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback)
  })
}
}