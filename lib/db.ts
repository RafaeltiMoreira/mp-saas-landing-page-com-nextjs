import { PrismaClient } from '../lib/generated/prisma';
//import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'

/* eslint-disable no-var */
declare global {
  var prisma: PrismaClient | undefined;
}

const adapter = new PrismaLibSQL({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
})

const db = globalThis.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

export default db;