import { promises as fs } from 'fs';
import path from 'path';
import { get, put } from '@vercel/blob';
import { newsItems as seedItems, type NewsItem } from '@/content/news';
import seedJson from '@/data/news.json';

// News posts created from /admin/news are stored as news.json.
// - On Vercel (BLOB_READ_WRITE_TOKEN set): in a Vercel Blob store, so posts survive deploys and serverless restarts.
// - Locally: in data/news.json on disk.
// Until the first post is saved, the committed data/news.json is used as the starting list.

const FILE = path.join(process.cwd(), 'data', 'news.json');
const BLOB_NAME = 'news.json';

export const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

export interface StoredNewsItem extends NewsItem {
  id: string;
}

function seed(): StoredNewsItem[] {
  const items = (seedJson as StoredNewsItem[]).length
    ? (seedJson as StoredNewsItem[])
    : seedItems.map((it, i) => ({ ...it, id: `seed-${i}` }));
  return [...items];
}

async function load(): Promise<StoredNewsItem[]> {
  try {
    if (useBlob) {
      const result = await get(BLOB_NAME, { access: 'public', useCache: false });
      if (!result || result.statusCode !== 200) return seed();
      return JSON.parse(await new Response(result.stream).text());
    }
    return JSON.parse(await fs.readFile(FILE, 'utf8'));
  } catch {
    return seed();
  }
}

export async function readNews(): Promise<StoredNewsItem[]> {
  return (await load()).sort((a, b) => b.date.localeCompare(a.date));
}

export async function writeNews(items: StoredNewsItem[]) {
  const json = JSON.stringify(items, null, 2);
  if (useBlob) {
    await put(BLOB_NAME, json, {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json',
      cacheControlMaxAge: 60,
    });
    return;
  }
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, json);
}

export function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80) || 'article';
}

export function uniqueSlug(title: string, items: StoredNewsItem[], ownId?: string) {
  const base = slugify(title);
  let slug = base;
  for (let n = 2; items.some((it) => it.slug === slug && it.id !== ownId); n++) slug = `${base}-${n}`;
  return slug;
}

// Posts with an article body link to their page on this site; others keep their own link.
export function withLinks(items: StoredNewsItem[]): StoredNewsItem[] {
  return items.map((it) => (it.body && it.slug ? { ...it, href: `/news/${it.slug}` } : it));
}

export function isAuthorized(request: Request) {
  const expected = process.env.ADMIN_PASSWORD?.trim();
  return !!expected && request.headers.get('x-admin-password')?.trim() === expected;
}

// Strips fields down to what NewsItem allows; returns an error string if invalid.
export function parseNewsInput(body: unknown): { item?: NewsItem; error?: string } {
  const b = (body ?? {}) as Record<string, unknown>;
  const str = (k: string) => (typeof b[k] === 'string' ? (b[k] as string).trim() : '');
  const date = str('date');
  const title = str('title');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !title) return { error: 'Date (YYYY-MM-DD) and title are required.' };
  const href = str('href');
  if (href && !/^(https?:\/\/|\/)/.test(href)) return { error: 'Link must start with http(s):// or /.' };
  const image = str('image');
  if (image && !/^(\/|https:\/\/)/.test(image)) return { error: 'Image must be a path starting with / or an https:// link.' };
  const item: NewsItem = { date, title };
  if (str('summary')) item.summary = str('summary');
  if (str('source')) item.source = str('source');
  if (href) item.href = href;
  if (image) item.image = image;
  if (str('body')) item.body = (b.body as string).replace(/\r\n/g, '\n').trim();
  return { item };
}
