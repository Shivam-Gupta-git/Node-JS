// Core module
const fs = require('fs')
const path = require('path')


// Local module
const rootPath = require('../utils/utilPath')
const { error } = require('console')

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  save(){
    Home.fetchAll((registrationHome) => {
      if(this.id){ // Edit Home Case
       registrationHome = registrationHome.map(home => home.id === this.id ? this : home)
      }
      else{ // add Home Case
        this.id = Math.random().toString();
        registrationHome.push(this)
      }
      const homeDataPath = path.join(rootPath, 'data', 'home.json')
      fs.writeFile(homeDataPath, JSON.stringify(registrationHome), error => {
        console.log('File writting Concluded', error)
      })
    })
  }

  static fetchAll(callback){
    const homeDataPath = path.join(rootPath, 'data', 'home.json');
    fs.readFile(homeDataPath, (err, data)=>{
      callback(!err ? JSON.parse(data) : [])
    })
  }

  // For Home Details....
  static findById(homeId, callback){
   this.fetchAll(homes =>{
   const homeFound = homes.find(home => home.id === homeId);
   callback(homeFound)
   })
  }

  // For Delete Home....
  static deleteById(homeId, callback){
   this.fetchAll(home => {
    home = home.filter(home => home.id !== homeId);
    const homeDataPath = path.join(rootPath, 'data', 'home.json');
    console.log(home)
    fs.writeFile(homeDataPath, JSON.stringify(home), callback)
    
   })
  }

}
 
