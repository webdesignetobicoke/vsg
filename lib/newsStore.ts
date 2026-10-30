import { promises as fs } from 'fs';
import path from 'path';
import { newsItems as seedItems, type NewsItem } from '@/content/news';

// News posts created from /admin/news live in data/news.json.
// Until the first post is saved, the seed list in content/news.ts is used.
// Note: this writes to disk, so it needs a host with a persistent filesystem (not Vercel/Netlify serverless).

const FILE = path.join(process.cwd(), 'data', 'news.json');

export interface StoredNewsItem extends NewsItem {
  id: string;
}

export async function readNews(): Promise<StoredNewsItem[]> {
  let items: StoredNewsItem[];
  try {
    items = JSON.parse(await fs.readFile(FILE, 'utf8'));
  } catch {
    items = seedItems.map((it, i) => ({ ...it, id: `seed-${i}` }));
  }
  return items.sort((a, b) => b.date.localeCompare(a.date));
}

export async function writeNews(items: StoredNewsItem[]) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(items, null, 2));
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
  const expected = process.env.ADMIN_PASSWORD;
  return !!expected && request.headers.get('x-admin-password') === expected;
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
  if (image && !image.startsWith('/')) return { error: 'Image must be a path starting with /.' };
  const item: NewsItem = { date, title };
  if (str('summary')) item.summary = str('summary');
  if (str('source')) item.source = str('source');
  if (href) item.href = href;
  if (image) item.image = image;
  if (str('body')) item.body = (b.body as string).replace(/\r\n/g, '\n').trim();
  return { item };
}
