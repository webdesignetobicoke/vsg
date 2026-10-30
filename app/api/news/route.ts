import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { randomUUID } from 'crypto';
import { isAuthorized, parseNewsInput, readNews, uniqueSlug, writeNews } from '@/lib/newsStore';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(await readNews());
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { item, error } = parseNewsInput(await request.json().catch(() => null));
  if (!item) return NextResponse.json({ error }, { status: 400 });
  const items = await readNews();
  const created = { ...item, id: randomUUID(), ...(item.body ? { slug: uniqueSlug(item.title, items) } : {}) };
  await writeNews([created, ...items]);
  revalidatePath('/news', 'layout');
  return NextResponse.json(created, { status: 201 });
}
