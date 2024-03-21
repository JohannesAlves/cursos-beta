import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  categorys: any;
}

const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
  const { id, title, description, price, rating, categorys }: Product =
    await request.json();

  const formattedData = {
    title,
    description,
    price,
    rating,
    categorys,
  };

  const updatedProduct = await prisma.product.update({
    where: {
      id,
    },
    data: {
      ...formattedData,
    },
  });

  return NextResponse.json({
    message: 'Produto alterado com sucesso',
    data: updatedProduct,
  });
}
