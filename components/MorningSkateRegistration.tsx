'use client';

import { useState } from 'react';
import { MORNING_SKATE_PRICE_CAD, morningSkateBlocks } from '@/content/morningSkate';
import MorningSkatePayment from '@/components/MorningSkatePayment';

const initial = {
  playerName: '',
  birthDate: '',
  team: '',
  position: '',
  guardianName: '',
  email: '',
  phone: '',
  emergencyName: '',
  emergencyPhone: '',
  medical: '',
  blockId: '',
  waiver: false,
};

const inputCls =
  'w-full bg-white/5 border border-white/20 focus:border-orange outline-none px-4 py-3 text-white placeholder-white/30';

export default function MorningSkateRegistration({ fontClassName }: { fontClassName: string }) {
  const [form, setForm] = useState(initial);
  const [step, setStep] = useState<'details' | 'payment'>('details');

  const set = (key: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep('payment');
    document.getElementById('register')?.scrollIntoView();
  }

  const label = (text: string, required = true) => (
    <span className={`${fontClassName} block uppercase tracking-[0.15em] text-white/70 text-sm mb-1`}>
      {text}
      {required && <span className="text-orange"> *</span>}
    </span>
  );

  const steps = (
    <ol className={`${fontClassName} flex gap-6 uppercase tracking-[0.15em] text-sm mb-8`}>
      {['Player details', 'Payment'].map((t, i) => {
        const active = (step === 'details') === (i === 0);
        return (
          <li key={t} className={`flex items-center gap-2 ${active ? 'text-white' : 'text-white/40'}`}>
            <span className={`w-7 h-7 flex items-center justify-center font-bold ${active ? 'bg-orange text-white' : 'border border-white/30'}`}>
              {i + 1}
            </span>
            {t}
          </li>
        );
      })}
    </ol>
  );

  if (step === 'payment') {
    return (
      <div className="bg-navy-dark border border-orange/30 shadow-2xl p-6 sm:p-10">
        {steps}
        <MorningSkatePayment fontClassName={fontClassName} details={form} onBack={() => setStep('details')} />
      </div>
    );
  }

  return (
    <div className="bg-navy-dark border border-orange/30 shadow-2xl p-6 sm:p-10">
    {steps}
    <form onSubmit={onSubmit} className="space-y-6">
      <fieldset className="grid sm:grid-cols-2 gap-5">
        <legend className={`${fontClassName} font-bold uppercase tracking-wide text-lg mb-4`}>Player</legend>
        <label className="sm:col-span-2">
          {label('Player full name')}
          <input className={inputCls} required value={form.playerName} onChange={set('playerName')} autoComplete="off" />
        </label>
        <label>
          {label('Date of birth')}
          <input type="date" className={inputCls} required value={form.birthDate} onChange={set('birthDate')} />
        </label>
        <label>
          {label('Current team / association', false)}
          <input className={inputCls} value={form.team} onChange={set('team')} />
        </label>
        <label className="sm:col-span-2">
          {label('Position', false)}
          <select className={inputCls} value={form.position} onChange={set('position')}>
            <option value="" className="text-navy">Select…</option>
            <option className="text-navy">Forward</option>
            <option className="text-navy">Defence</option>
            <option className="text-navy">Goalie</option>
          </select>
        </label>
      </fieldset>

      <fieldset className="grid sm:grid-cols-2 gap-5">
        <legend className={`${fontClassName} font-bold uppercase tracking-wide text-lg mb-4`}>Parent / Guardian</legend>
        <label className="sm:col-span-2">
          {label('Full name')}
          <input className={inputCls} required value={form.guardianName} onChange={set('guardianName')} autoComplete="name" />
        </label>
        <label>
          {label('Email')}
          <input type="email" className={inputCls} required value={form.email} onChange={set('email')} autoComplete="email" />
        </label>
        <label>
          {label('Phone')}
          <input type="tel" className={inputCls} required value={form.phone} onChange={set('phone')} autoComplete="tel" />
        </label>
        <label>
          {label('Emergency contact name')}
          <input className={inputCls} required value={form.emergencyName} onChange={set('emergencyName')} />
        </label>
        <label>
          {label('Emergency contact phone')}
          <input type="tel" className={inputCls} required value={form.emergencyPhone} onChange={set('emergencyPhone')} />
        </label>
        <label className="sm:col-span-2">
          {label('Medical conditions / allergies', false)}
          <textarea rows={3} className={inputCls} value={form.medical} onChange={set('medical')} />
        </label>
      </fieldset>

      {morningSkateBlocks.length > 0 && (
        <label className="block">
          {label('Select a block')}
          <select className={inputCls} required value={form.blockId} onChange={set('blockId')}>
            <option value="" className="text-navy">Choose a block…</option>
            {morningSkateBlocks.map((b) => (
              <option key={b.id} value={b.id} disabled={b.full} className="text-navy">
                {b.label}
                {b.full ? ' – Full' : ''}
              </option>
            ))}
          </select>
        </label>
      )}

      <label className="flex items-start gap-3 text-sm text-white/75 leading-relaxed">
        <input type="checkbox" required checked={form.waiver} onChange={set('waiver')} className="mt-1 accent-orange w-4 h-4" />
        <span>
          I am the parent/legal guardian of this player and agree to the program terms, waiver and release of liability.
        </span>
      </label>

      <div className="border border-white/10 bg-white/[0.03] p-5 flex items-center justify-between">
        <span className={`${fontClassName} uppercase tracking-[0.2em] text-white/70 text-sm`}>Program investment</span>
        <span className={`${fontClassName} font-bold text-2xl`}>
          <span className="text-orange">${MORNING_SKATE_PRICE_CAD.toFixed(2)}</span> <span className="text-base">CAD per block</span>
        </span>
      </div>

      <button type="submit" className="btn-primary w-full py-4 text-sm">
        Continue to Payment
      </button>
      <p className="text-white/40 text-xs text-center">Payments are processed securely by Stripe.</p>
    </form>
    </div>
  );
}
