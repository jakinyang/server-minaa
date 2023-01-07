-- CreateEnum
CREATE TYPE "Qualification" AS ENUM ('ADMIN', 'BASE');

-- CreateEnum
CREATE TYPE "ReportCategory" AS ENUM ('UNCLEAR', 'OBSCURED', 'MULTIPLE', 'LARGE', 'SMALL');

-- CreateEnum
CREATE TYPE "StatusCategory" AS ENUM ('REPORTED', 'REVIEWED', 'NEUTRALIZED', 'DISMISSED', 'VERIFIED', 'UNCERTAIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastNname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "qualification" "Qualification" NOT NULL DEFAULT 'BASE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "longtitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "radius" INTEGER NOT NULL DEFAULT 5,
    "statusCategroy" "StatusCategory" NOT NULL DEFAULT 'REPORTED',
    "reportCategory" "ReportCategory",
    "userId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
