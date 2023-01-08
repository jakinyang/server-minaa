// /graphql/context.ts
import { PrismaClient } from '@prisma/client'
import prisma from '../lib/prisma'

export async function createContext({ req, res }) {
  return {
    prisma: PrismaClient
  }
}