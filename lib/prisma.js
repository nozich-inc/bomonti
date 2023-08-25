import { PrismaClient } from '@prisma/client';

const prisma = global.prisma || new PrismaClient();

if (process.env.ENV?.slice(0, 3) === 'dev') global.prisma = prisma;

export default prisma;
