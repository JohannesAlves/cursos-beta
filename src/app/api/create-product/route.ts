import { NextRequest, NextResponse } from 'next/server';
import { v4 } from 'uuid';

import db from '@/mock/db.json';

export async function POST(request: NextRequest, response: NextResponse) {
  const { title, description, price, rating, categorys } = await request.json();

  if (!title || !description || !price || !rating || !categorys) {
    return NextResponse.json({ message: 'empty data' }, { status: 400 });
  }

  const formattedData = {
    id: v4(),
    title,
    description,
    price,
    rating,
    categorys,
  };

  // push into mock
  db.products.push(formattedData);

  console.log(db);

  return NextResponse.json({
    message: 'Product create successful',
    data: formattedData,
  });
}
