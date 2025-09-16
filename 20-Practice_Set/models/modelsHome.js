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
    Home.fetchAll(registrationHome => {
      registrationHome.push(this)
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
}

