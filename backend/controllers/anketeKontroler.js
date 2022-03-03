const asyncHandler = require('express-async-handler')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAnkete = asyncHandler((req, res) => {
  async function main() {}
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
  res.json({ test: 'test' })
})

module.exports = {
  getAnkete,
}
