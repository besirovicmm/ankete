const express = require('express')
const router = express.Router()

//import kontrolere

const {
  registrujKorisnika,
  ulogujKorisnika,
} = require('../controllers/korisniciKontroler')

router.route('/').post(registrujKorisnika)
router.route('/login').post(ulogujKorisnika)

module.exports = router
