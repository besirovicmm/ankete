const asyncHandler = require('express-async-handler')
const { PrismaClient } = require('@prisma/client')
const e = require('express')
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

module.exports = {
  getAnkete,
  getPitanja,
}
