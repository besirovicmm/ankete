const express = require('express')
const router = express.Router()

//import kontrolere
const { getAnkete } = require('../controllers/anketeKontroler')

router.route('/').get(getAnkete)

module.exports = router
