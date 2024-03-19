import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  categorys: string[];
}

const dbFilePath = path.join(process.cwd(), 'data', 'db.json');

export async function POST(request: NextRequest, response: NextResponse) {
  const { title, description, price, rating, categorys }: Product =
    await request.json();

  if (!title || !description || !price || !rating || !categorys) {
    return NextResponse.json({ message: 'Dados incompletos' }, { status: 400 });
  }

  // Lê o arquivo JSON
  const dbData: { products: Product[] } = JSON.parse(
    fs.readFileSync(dbFilePath, 'utf-8')
  );

  const formattedData: Product = {
    id: uuidv4(),
    title,
    description,
    price,
    rating,
    categorys,
  };

  // Adiciona os novos dados ao array existente
  dbData.products.push(formattedData);

  // Escreve o arquivo JSON atualizado
  fs.writeFileSync(dbFilePath, JSON.stringify(dbData, null, 2));

  return NextResponse.json({
    message: 'Produto criado com sucesso',
    data: formattedData,
  });
}
