import { PrismaClient } from '../lib/generated/prisma';

/* eslint-disable no-var */
declare global {
  var prisma: PrismaClient | undefined;
}

const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

export default db;