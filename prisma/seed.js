import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 100; i++) {
    await prisma.user.create({
      data: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        dateOfBirth: faker.date.birthdate(),
        avatarUrl: faker.image.imageUrl(),
        qualification: "BASE",
        reports: {
          create: [
            {
              longitude: Number(faker.address.longitude(90, -90, 6)),
              latitude: Number(faker.address.latitude(90, -90, 6)),
              description: faker.lorem.sentence(),
              reportCategory: "UNCLEAR",
              imageUrl: faker.image.imageUrl()
            },
            {
              longitude: Number(faker.address.longitude(90, -90, 6)),
              latitude: Number(faker.address.latitude(90, -90, 6)),
              description: faker.lorem.sentence(),
              reportCategory: "UNCLEAR",
              imageUrl: faker.image.imageUrl()
            }
          ]
        }
      }
    })
  }
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  })