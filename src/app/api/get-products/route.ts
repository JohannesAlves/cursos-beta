import { NextResponse } from 'next/server';

import path from 'path';
import fs from 'fs';

const dbFilePath = path.join(process.cwd(), 'data', 'db.json');

export async function GET() {
  const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));

  return NextResponse.json(dbData);
}
