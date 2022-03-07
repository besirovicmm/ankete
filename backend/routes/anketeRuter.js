const express = require('express')
const router = express.Router()

//import kontrolere

const {
  getAnkete,
  getPitanja,
  ubaciAnketu,
  getAnketeKorisnika,
} = require('../controllers/anketeKontroler')

router.route('/').get(getAnkete).post(ubaciAnketu)
router.route('/').post(ubaciAnketu)
router.route('/id').post(getPitanja)
router.route('/korisnik').post(getAnketeKorisnika)

module.exports = router
