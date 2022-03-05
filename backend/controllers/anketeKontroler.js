const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAnkete = asyncHandler((req, res) => {
  console.log("hello");
  let result;
  async function main() {
    result = await prisma.$queryRaw`SELECT * FROM ankete`;
    console.log(result);
    res.json(result);
  }
  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
});

module.exports = {
  getAnkete,
};
