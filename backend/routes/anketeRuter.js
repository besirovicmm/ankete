const express = require('express')
const router = express.Router()

//import kontrolere

const {
  getAnkete,
  getPitanja,
  ubaciAnketu,
} = require('../controllers/anketeKontroler')

router.route('/').get(getAnkete).post(ubaciAnketu)
router.route('/').post(ubaciAnketu)
router.route('/id').post(getPitanja)

module.exports = router
