const express = require('express')

const app = express()

//ove dve linije da bi mogli req.body i headers da pristupimo kao objektu
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//import rutere
const anketaRuter = require('./routes/anketeRuter')
const korisniciRuter = require('./routes/korisniciRuter')

app.use('/api/ankete', anketaRuter)
app.use('/api/korisnici', korisniciRuter)

app.listen(5000, () => {
  console.log('server radi')
})
