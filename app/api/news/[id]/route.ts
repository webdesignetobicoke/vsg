import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { isAuthorized, parseNewsInput, readNews, uniqueSlug, writeNews } from '@/lib/newsStore';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { item, error } = parseNewsInput(await request.json().catch(() => null));
  if (!item) return NextResponse.json({ error }, { status: 400 });
  const items = await readNews();
  const existing = items.find((it) => it.id === params.id);
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const slug = item.body ? existing.slug || uniqueSlug(item.title, items, existing.id) : undefined;
  await writeNews(items.map((it) => (it.id === params.id ? { ...item, ...(slug ? { slug } : {}), id: it.id } : it)));
  revalidatePath('/news', 'layout');
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const items = await readNews();
  await writeNews(items.filter((it) => it.id !== params.id));
  revalidatePath('/news', 'layout');
  return NextResponse.json({ ok: true });
}
