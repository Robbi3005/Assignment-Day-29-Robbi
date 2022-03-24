const express = require('express')
const fs = require('fs')
const controller = require('../controller/control')
const router = express.Router()

router.get('/', controller.getStores)

router.get('/:id', controller.getStore)

router.post('/', controller.createStore)

// router.post('/create', controller.createStore1)

router.put('/:id', controller.updateStore)

router.delete('/:id', controller.deleteStore)

module.exports = router