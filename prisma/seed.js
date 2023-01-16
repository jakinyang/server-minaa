import { faker } from '@faker-js/faker';
import { PrismaClient, StatusCategory } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 35; i++) {
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
              imageUrl: faker.image.imageUrl(),
              radius: 10
            },
            {
              longitude: Number(faker.address.longitude(90, -90, 6)),
              latitude: Number(faker.address.latitude(90, -90, 6)),
              description: faker.lorem.sentence(),
              reportCategory: "UNCLEAR",
              imageUrl: faker.image.imageUrl(),
              radius: 5
            }
          ]
        }
      }
    })
  }
  for (let i = 0; i < 15; i++) {
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
              reportCategory: "OBSCURED",
              imageUrl: faker.image.imageUrl(),
              radius: 10,
              statusCategory: "REVIEWED"
            },
            {
              longitude: Number(faker.address.longitude(90, -90, 6)),
              latitude: Number(faker.address.latitude(90, -90, 6)),
              description: faker.lorem.sentence(),
              reportCategory: "MULTIPLE",
              imageUrl: faker.image.imageUrl(),
              radius: 5,
              statusCategory: "UNCERTAIN"
            }
          ]
        }
      }
    })
  }
  for (let i = 0; i < 28; i++) {
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
              reportCategory: "OBSCURED",
              imageUrl: faker.image.imageUrl(),
              radius: 25,
              statusCategory: "NEUTRALIZED"
            },
            {
              longitude: Number(faker.address.longitude(90, -90, 6)),
              latitude: Number(faker.address.latitude(90, -90, 6)),
              description: faker.lorem.sentence(),
              reportCategory: "SMALL",
              imageUrl: faker.image.imageUrl(),
              radius: 5,
              statusCategory: "DISMISSED"
            }
          ]
        }
      }
    })
  }
  for (let i = 0; i < 13; i++) {
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
              reportCategory: "OBSCURED",
              imageUrl: faker.image.imageUrl(),
              radius: 25,
              statusCategory: "UNCERTAIN"
            },
            {
              longitude: Number(faker.address.longitude(90, -90, 6)),
              latitude: Number(faker.address.latitude(90, -90, 6)),
              description: faker.lorem.sentence(),
              reportCategory: "UNCLEAR",
              imageUrl: faker.image.imageUrl(),
              radius: 15,
              statusCategory: "DISMISSED"
            },
            {
              longitude: Number(faker.address.longitude(90, -90, 6)),
              latitude: Number(faker.address.latitude(90, -90, 6)),
              description: faker.lorem.sentence(),
              reportCategory: "UNCLEAR",
              imageUrl: faker.image.imageUrl(),
              radius: 10,
              statusCategory: "REPORTED"
            }
          ]
        }
      }
    })
  }
  for (let i = 0; i < 13; i++) {
    await prisma.user.create({
      data: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        dateOfBirth: faker.date.birthdate(),
        avatarUrl: faker.image.imageUrl(),
        qualification: "ADMIN",
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