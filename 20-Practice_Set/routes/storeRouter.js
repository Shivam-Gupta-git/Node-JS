// External module
const express = require('express')
const storeRouter = express.Router()

// Local module
const storeController = require('../controllers/storeController')

storeRouter.get('/', storeController.getIndex)
storeRouter.get("/homelist", storeController.getHomeslist)
storeRouter.get('/bookings', storeController.getbookings)
storeRouter.get('/favourites', storeController.getFavouriteList)

exports.storeRouter = storeRouter;