const asyncHandler = require('express-async-handler')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAnkete = asyncHandler((req, res) => {
  let result
  async function main() {
    result = await prisma.$queryRaw`SELECT * FROM ankete`

    console.log('fetch')
    res.json(result)
  }
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
})

const ubaciAnketu = asyncHandler((req, res) => {
  let identifikacija = []
  const { formData } = req.body
  const { id, odgovor, id_kor } = formData

  async function main() {
    result = await prisma.$queryRaw`SELECT p.pitanje,o.odgovor,o.id_odgovora
    FROM ankete AS a
    INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
    INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
    WHERE a.iDankete=${id}`

    async function insert(id_odg) {
      await prisma.$queryRaw`INSERT INTO odgovori_korisnika(id_odgovora,id_korisnika)
      VALUES (${id_odg},${id_kor})`
    }

    result.map((el) => {
      if (odgovor[el.pitanje] === el.odgovor) {
        identifikacija.push(el.id_odgovora)
      }
    })
    identifikacija.forEach((id_odg) => {
      insert(id_odg)
    })
    res.json(odgovor)
  }
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
})
const getPitanja = asyncHandler((req, res) => {
  const { id } = req.body
  let result
  async function main() {
    result =
      await prisma.$queryRaw`SELECT a.ime_ankete,p.id_pitanja,p.pitanje,o.odgovor
    FROM ankete AS a
    INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
    INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
    WHERE a.iDankete=${id}`

    let niz = []

    result.forEach((el) => {
      if (niz.length === 0) {
        niz.push({ pitanje: el.pitanje, odgovori: [el.odgovor] })
      } else {
        const item = niz.find((el2) => {
          return el2.pitanje === el.pitanje
        })
        if (item) {
          item.odgovori.push(el.odgovor)
        } else {
          niz.push({ pitanje: el.pitanje, odgovori: [el.odgovor] })
        }
      }
    })

    console.log(niz)
    res.json(niz)
  }
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
})
const getAnketeKorisnika = asyncHandler((req, res) => {
  const { id_ank, id_kor } = req.body
  console.log(req.body, 'req-body')

  async function main() {
    result = await prisma.$queryRaw`SELECT p.pitanje,o.odgovor
    FROM ankete AS a
    INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
    INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
    INNER JOIN odgovori_korisnika AS odg ON o.id_odgovora=odg.id_odgovora
    INNER JOIN korisnici AS kor ON odg.id_korisnika=kor.id_korisnika
    WHERE kor.id_korisnika=${id_kor} && a.idAnkete=${id_ank}`

    res.json(result)
    console.log(result, 'ANKETA')
  }
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
})
const getSveAnketeKorisnika = asyncHandler((req, res) => {
  const { id_kor } = req.body
  console.log(req.body, 'req-bAAAody')

  async function main() {
    result = await prisma.$queryRaw`SELECT DISTINCT a.idAnkete,a.ime_ankete
    FROM ankete AS a
    LEFT JOIN pitanja AS p ON a.idAnkete = p.id_ankete
    LEFT JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
    LEFT JOIN odgovori_korisnika AS odg ON o.id_odgovora=odg.id_odgovora
    LEFT JOIN korisnici AS kor ON odg.id_korisnika=kor.id_korisnika
    WHERE kor.id_korisnika=${id_kor}`

    res.json(result)
    console.log(result, 'ANKETA')
  }
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
})

module.exports = {
  getAnketeKorisnika,
  getAnkete,
  getPitanja,
  getSveAnketeKorisnika,
  ubaciAnketu,
}
