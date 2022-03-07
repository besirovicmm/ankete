const express = require('express')
const router = express.Router()

//import kontrolere

const {
  registrujKorisnika,
  ulogujKorisnika,
  getKorisnike,
} = require('../controllers/korisniciKontroler')

router.route('/').post(registrujKorisnika).get(getKorisnike)
router.route('/login').post(ulogujKorisnika)

module.exports = router
