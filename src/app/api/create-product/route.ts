import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

interface Product {
  title: string;
  description: string;
  price: number;
  rating: number;
  categorys: string[];
}

const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
  const { title, description, price, rating }: Product = await request.json();

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
        connect: [{ id: 1 }],
      },
    },
  });
  console.log(createdProduct);

  return NextResponse.json({
    message: 'Produto criado com sucesso',
    data: createdProduct,
  });
}
