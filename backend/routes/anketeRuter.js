const express = require('express')
const router = express.Router()

//import kontrolere
const { getAnkete, getPitanja } = require('../controllers/anketeKontroler')

router.route('/').get(getAnkete)
router.route('/id').get(getPitanja)

module.exports = router
