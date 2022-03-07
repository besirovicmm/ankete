const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { PrismaClient, User } = require('@prisma/client')
const prisma = new PrismaClient()

const registrujKorisnika = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { ime_korisnika, prezime, email, password } = req.body

  if (!ime_korisnika || !email || !password) {
    res.status(400)
    throw new Error('Popunite sva polja ')
  }

  const korisnik = await prisma.korisnici.findUnique({
    where: { email },
  })

  //Proveri da li korisnik posWWtoji

  if (korisnik) {
    res.status(400)
    throw new Error('User vec postoji')
  }
  //Kriptuj password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Kreiraj korisnika u bazi

  const user = await prisma.korisnici.create({
    data: {
      email,
      password: hashedPassword,
      ime_korisnika,
      prezime,
    },
  })
  console.log(user)

  if (user) {
    res.status(201)
    res.json({
      id: user.id_korisnika,
      ime_korisnika: user.ime_korisnika,
      prezime: user.prezime,
      email: user.email,
      token: napraviToken(user.id_korisnika),
    })
  } else {
    res.status(400)
    throw new Error('Nije validno nesto')
  }
})

const ulogujKorisnika = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const korisnik = await prisma.korisnici.findUnique({
    where: { email },
  })

  //Proveri da li korisnik posWWtoji

  if (korisnik && (await bcrypt.compare(password, korisnik.password))) {
    res.json({
      id: korisnik.id_korisnika,
      ime_korisnika: korisnik.ime_korisnika,
      prezime: korisnik.prezime,
      email: korisnik.email,
      token: napraviToken(korisnik.id_korisnika),
    })
  } else {
    res.status(400)
    throw new Error('Nije validno nesto')
  }
})
const getKorisnike = asyncHandler(async (req, res) => {
  const users = await prisma.korisnici.findMany({
    select: {
      id_korisnika: true,
      ime_korisnika: true,
    },
  })

  if (users) {
    res.json(users)
  } else {
    res.status(400)
    throw new Error('Nije validno nesto')
  }
})
const napraviToken = (id) => {
  return jwt.sign({ id }, 'tajna123', { expiresIn: '30d' })
}

module.exports = {
  registrujKorisnika,
  getKorisnike,
  ulogujKorisnika,
}
