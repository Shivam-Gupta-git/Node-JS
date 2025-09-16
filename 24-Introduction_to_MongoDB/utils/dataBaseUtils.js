const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://root:shivam123@shivamgupta.yettrq8.mongodb.net/?retryWrites=true&w=majority&appName=shivamgupta"

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL).then(client => {
    callback()
    _db = client.db('airbnb')
  }).catch(err => {
    console.log('Error while connection to MongoDB: ', err);
  })
}
const getDB = ()=>{
  return _db
}
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;

