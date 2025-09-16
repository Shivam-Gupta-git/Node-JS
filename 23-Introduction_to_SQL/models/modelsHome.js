// Core module
// const fs = require('fs')
// const path = require('path')
const db = require('../utils/dataBaseUtils');

// Local module
// const rootPath = require('../utils/utilPath')
const { error } = require('console')

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, id){
    this.id = id;
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }
  save(){
   if(this.id){ //For Updating
    return db.execute('UPDATE  homes SET houseName=?, price=?, location=?, rating=?, photoUrl=?, description=? WHERE id=?', [this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description, this.id]);
   }
   else{ // For Addinf
     return db.execute('INSERT INTO homes (houseName, price, location, rating, photoUrl, description) VALUES (?, ?, ?, ?, ?, ?)', [this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description]);
   }
  }
  
  static fetchAll(){
    return db.execute('SELECT * FROM homes');
  }

  // For Home Details....
  static findById(homeId, callback){
  //  this.fetchAll(homes =>{
  //  const homeFound = homes.find(home => home.id === homeId);
  //  callback(homeFound)
  //  })
  return db.execute('SELECT * FROM homes WHERE id=?', [homeId])
  }

  // For Delete Home....
  static deleteById(homeId, callback){
  //  this.fetchAll(home => {
  //   home = home.filter(home => home.id !== homeId);
  //   const homeDataPath = path.join(rootPath, 'data', 'home.json');
  //   fs.writeFile(homeDataPath, JSON.stringify(home), callback)
    
  //  })
  return db.execute('DELETE FROM homes WHERE id=?', [homeId])
  }

}
 
