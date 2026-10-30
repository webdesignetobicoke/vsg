'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface Post {
  id: string;
  date: string;
  title: string;
  summary?: string;
  source?: string;
  href?: string;
  image?: string;
  body?: string;
}

const today = () => new Date().toISOString().slice(0, 10);
const blank = () => ({ date: today(), title: '', summary: '', source: 'VSG Announcement', href: '', image: '', body: '' });
const input = 'w-full border border-gray-300 px-3 py-2.5 text-base text-navy bg-white focus:outline-none focus:border-orange';
const label = 'block text-xs font-bold uppercase tracking-wider text-navy mb-1';

export default function NewsAdminPage() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState(blank());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const headers = useCallback(() => ({ 'x-admin-password': (passwordRef.current?.value ?? '').trim() }), []);

  const load = useCallback(async () => {
    setPosts(await (await fetch('/api/news', { cache: 'no-store' })).json());
  }, []);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('vsg-admin-pw');
      if (saved && passwordRef.current && !passwordRef.current.value) passwordRef.current.value = saved;
    } catch {}
    load();
  }, [load]);

  const set = (k: keyof ReturnType<typeof blank>) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');
    const res = await fetch(editingId ? `/api/news/${editingId}` : '/api/news', {
      method: editingId ? 'PUT' : 'POST',
      headers: { ...headers(), 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return setMessage(res.status === 401 ? 'Wrong admin password (or ADMIN_PASSWORD is not set on the server).' : data.error || 'Could not save.');
    }
    try {
      sessionStorage.setItem('vsg-admin-pw', passwordRef.current?.value.trim() ?? '');
    } catch {}
    setMessage(editingId ? 'Post updated.' : 'Post published.');
    setForm(blank());
    setEditingId(null);
    load();
  }

  async function upload(file: File | undefined) {
    if (!file) return;
    setMessage('Uploading image…');
    const body = new FormData();
    body.append('file', file);
    const res = await fetch('/api/news/upload', { method: 'POST', headers: headers(), body });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return setMessage(res.status === 401 ? 'Wrong admin password.' : data.error || 'Upload failed.');
    setForm((f) => ({ ...f, image: data.path }));
    setMessage('Image uploaded.');
  }

  async function remove(post: Post) {
    if (!window.confirm(`Delete "${post.title}"?`)) return;
    const res = await fetch(`/api/news/${post.id}`, { method: 'DELETE', headers: headers() });
    if (!res.ok) return setMessage('Could not delete (check the password).');
    setMessage('Post deleted.');
    load();
  }

  function edit(post: Post) {
    setEditingId(post.id);
    setForm({
      date: post.date,
      title: post.title,
      summary: post.summary ?? '',
      source: post.source ?? '',
      href: post.href ?? '',
      image: post.image ?? '',
      body: post.body ?? '',
    });
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-52 md:pt-60 pb-32 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            News<br />
            <span className="text-orange">Admin</span>
          </h1>
          <p className="text-white text-xl md:text-2xl font-display font-semibold leading-relaxed max-w-2xl">
            Publish, edit and remove announcements shown on the Latest News page.
          </p>
        </div>
      </section>

      {/* FORM + POSTS */}
      <section className="py-24 bg-slate-custom">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="section-eyebrow">{editingId ? 'Editing' : 'New Announcement'}</div>
        <div className="accent-bar mx-auto" />
        <h2 className="section-title">{editingId ? 'Edit Post' : 'Create a Post'}</h2>
      </div>

      <form onSubmit={save} className="bg-white border-t-4 border-orange shadow-md p-6 sm:p-10 space-y-5 mb-16">
        <div>
          <label className={label}>Admin password</label>
          <input ref={passwordRef} type="password" autoComplete="current-password" className={input} required />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={label}>Date</label>
            <input type="date" className={input} value={form.date} onChange={set('date')} required />
          </div>
          <div>
            <label className={label}>Source / tag</label>
            <input className={input} value={form.source} onChange={set('source')} placeholder="VSG Announcement" />
          </div>
        </div>
        <div>
          <label className={label}>Title</label>
          <input className={input} value={form.title} onChange={set('title')} required />
        </div>
        <div>
          <label className={label}>Summary</label>
          <textarea className={input} rows={3} value={form.summary} onChange={set('summary')} />
        </div>
        <div>
          <label className={label}>Article (optional)</label>
          <textarea className={input} rows={14} value={form.body} onChange={set('body')} placeholder="Write your article here…" />
          <p className="text-xs text-gray-500 mt-1">
            Leave a blank line between paragraphs. Start a line with ## for a heading. When an article is written, the card links to it on this site.
          </p>
        </div>
        <div>
          <label className={label}>External link (optional — only used when there is no article)</label>
          <input className={input} value={form.href} onChange={set('href')} placeholder="/morning-skate or https://…" />
        </div>
        <div>
          <label className={label}>Image (optional)</label>
          <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => upload(e.target.files?.[0])} className="text-sm" />
          {form.image && (
            <div className="mt-2 flex items-center gap-3 text-xs text-gray-600">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={form.image} alt="" className="h-12 w-auto bg-navy p-1" />
              <span>{form.image}</span>
              <button type="button" onClick={() => setForm((f) => ({ ...f, image: '' }))} className="underline">
                Remove
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <button type="submit" className="btn-primary">
            {editingId ? 'Save changes' : 'Publish'}
          </button>
          {editingId && (
            <button type="button" className="text-sm underline" onClick={() => { setEditingId(null); setForm(blank()); }}>
              Cancel edit
            </button>
          )}
          {message && <span className="text-sm text-navy">{message}</span>}
        </div>
      </form>

      <div className="text-center mb-8">
        <div className="section-eyebrow">Live on the Site</div>
        <div className="accent-bar mx-auto" />
        <h2 className="section-title">Published Posts</h2>
      </div>
      <ul className="divide-y divide-gray-200 border-t-4 border-orange shadow-md bg-white">
        {posts.map((p) => (
          <li key={p.id} className="p-4 flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange">
                {p.date}
                {p.source ? ` · ${p.source}` : ''}
              </div>
              <div className="font-semibold text-navy">{p.title}</div>
            </div>
            <div className="flex gap-3 text-sm shrink-0">
              <button onClick={() => edit(p)} className="underline">Edit</button>
              <button onClick={() => remove(p)} className="underline text-navy/60 hover:text-orange">Delete</button>
            </div>
          </li>
        ))}
        {posts.length === 0 && <li className="p-4 text-sm text-gray-500">No posts yet.</li>}
      </ul>
      </div>
      </section>
    </>
  );
}
