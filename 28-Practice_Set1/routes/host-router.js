// External Module
const express = require('express')
const hostRouter = express.Router()

const hostController = require('../controllers/host-controller')

hostRouter.get('/add-items', hostController.gethostAddItems);
hostRouter.post('/added-items', hostController.postAddedItems);
hostRouter.get('/host-item-list', hostController.getHostAddedItemsList);
hostRouter.get('/host-edit-items/:itemsId', hostController.getHostEditItems)
hostRouter.post('/update-items', hostController.postHostEditItems)
hostRouter.post('/delete-items/:itemsId', hostController.postDeleteItems)
exports.hostRouter = hostRouter;