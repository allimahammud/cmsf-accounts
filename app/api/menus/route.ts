import { NextRequest, NextResponse } from 'next/server';
import { fetchUserWiseMenu } from '@/app/lib/data';

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }

  const data = await fetchUserWiseMenu(userId);
  return NextResponse.json(data);
}