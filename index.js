import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      firstName: 'John',
      lastNname: 'Cena',
      email: 'jcena@wwe.org',
      password: '123',
      phone: '555-555-5555',
      dateOfBirth: "1997-07-16T00:00:00.123Z",
      avatarUrl: 'https://www.pngall.com/wp-content/uploads/2016/03/John-Cena-Face-Transparent-PNG.png',
      qualification: "BASE",
      reports: {
        create: {
          longtitude: 37.78825,
          latitude: -122.4324,
          description: "I don't know what this is?",
          reportCategory: "UNCLEAR",
        },
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })