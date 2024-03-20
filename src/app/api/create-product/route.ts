import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

interface Product {
  title: string;
  description: string;
  price: number;
  rating: number;
  categorys: any;
}

const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
  const { title, description, price, rating, categorys }: Product =
    await request.json();

  if (!title || !description || !price || !rating) {
    return NextResponse.json({ message: 'Dados incompletos' }, { status: 400 });
  }

  const formattedData = {
    title,
    description,
    price,
    rating,
  };

  const createdProduct = await prisma.product.create({
    data: {
      ...formattedData,
      categorys: {
        connect: categorys,
      },
    },
    include: {
      categorys: true,
    },
  });

  return NextResponse.json({
    message: 'Produto criado com sucesso',
    data: createdProduct,
  });
}
