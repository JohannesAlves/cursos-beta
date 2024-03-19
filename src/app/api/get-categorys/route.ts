import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const categorys = await prisma.category.findMany();

  return NextResponse.json(categorys);
}
