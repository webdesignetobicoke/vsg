import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { put } from '@vercel/blob';
import { isAuthorized, useBlob } from '@/lib/newsStore';

const TYPES: Record<string, string> = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp' };
const MAX_BYTES = 5 * 1024 * 1024;

// Saves an uploaded image (Vercel Blob on Vercel, public/News locally) and returns its public path or URL.
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const file = (await request.formData().catch(() => null))?.get('file');
  if (!(file instanceof File)) return NextResponse.json({ error: 'No file uploaded.' }, { status: 400 });
  const ext = TYPES[file.type];
  if (!ext) return NextResponse.json({ error: 'Use a JPG, PNG or WebP image.' }, { status: 400 });
  if (file.size > MAX_BYTES) return NextResponse.json({ error: 'Image must be under 5 MB.' }, { status: 400 });
  const base = path.basename(file.name, path.extname(file.name)).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'image';
  const name = `${base}-${Date.now()}${ext}`;
  if (useBlob) {
    const blob = await put(`News/${name}`, file, { access: 'public', addRandomSuffix: false, contentType: file.type });
    return NextResponse.json({ path: blob.url });
  }
  const dir = path.join(process.cwd(), 'public', 'News');
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, name), Buffer.from(await file.arrayBuffer()));
  return NextResponse.json({ path: `/News/${name}` });
}
