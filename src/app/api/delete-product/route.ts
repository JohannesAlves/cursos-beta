import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
  const { id }: { id: number } = await request.json();

  const deletedProduct = await prisma.product.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({
    message: 'Produto deletado com sucesso',
    data: deletedProduct,
  });
}
