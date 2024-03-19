import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
  const { title } = await request.json();

  if (!title) {
    return NextResponse.json({ message: 'Dados incompletos' }, { status: 400 });
  }

  const createdCategory = await prisma.category.create({
    data: { title },
  });

  return NextResponse.json({
    message: 'Categoria criada com sucesso',
    data: createdCategory,
  });
}
