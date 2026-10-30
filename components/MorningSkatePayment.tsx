'use client';

import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { MORNING_SKATE_PRICE_CAD, morningSkateBlocks } from '@/content/morningSkate';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

interface Props {
  fontClassName: string;
  details: { playerName: string; email: string; blockId: string } & Record<string, unknown>;
  onBack: () => void;
}

function PayButton() {
  const stripe = useStripe();
  const elements = useElements();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function onPay(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setBusy(true);
    setError('');
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/morning-skate?registered=1#register` },
    });
    // Only reached if the payment failed – on success Stripe redirects to return_url
    setError(error.message || 'Payment failed. Please try again.');
    setBusy(false);
  }

  return (
    <form onSubmit={onPay} className="space-y-5">
      <PaymentElement options={{ layout: 'tabs' }} />
      {error && (
        <p role="alert" className="border border-orange bg-orange/10 p-4 text-sm">
          {error}
        </p>
      )}
      <button type="submit" disabled={!stripe || busy} className="btn-primary w-full py-4 text-sm disabled:opacity-60">
        {busy ? 'Processing…' : `Pay $${MORNING_SKATE_PRICE_CAD.toFixed(2)} CAD`}
      </button>
    </form>
  );
}

export default function MorningSkatePayment({ fontClassName, details, onBack }: Props) {
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const price = MORNING_SKATE_PRICE_CAD.toFixed(2);
  const block = morningSkateBlocks.find((b) => b.id === details.blockId);

  useEffect(() => {
    if (!stripePromise) return;
    fetch('/api/morning-skate/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || !data.clientSecret) throw new Error(data.error || 'Could not start payment.');
        setClientSecret(data.clientSecret);
      })
      .catch((err) => setError(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const label = `${fontClassName} uppercase tracking-[0.15em] text-white/70 text-sm`;

  return (
    <div className="space-y-8">
      {/* ORDER SUMMARY */}
      <div className="border border-white/10 bg-white/[0.03]">
        <div className={`${fontClassName} font-bold uppercase tracking-wide text-lg px-6 py-4 border-b border-white/10`}>
          Order summary
        </div>
        <dl className="px-6 py-4 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-white/70">Program</dt>
            <dd className="text-right">Morning Skate Hockey – 1 block (6 sessions)</dd>
          </div>
          {block && (
            <div className="flex justify-between gap-4">
              <dt className="text-white/70">Block</dt>
              <dd className="text-right">{block.label}</dd>
            </div>
          )}
          <div className="flex justify-between gap-4">
            <dt className="text-white/70">Player</dt>
            <dd className="text-right">{details.playerName}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-white/70">Receipt sent to</dt>
            <dd className="text-right break-all">{details.email}</dd>
          </div>
        </dl>
        <div className="flex justify-between items-center px-6 py-4 border-t border-white/10">
          <span className={label}>Total</span>
          <span className={`${fontClassName} font-bold text-2xl`}>
            <span className="text-orange">${price}</span> <span className="text-base">CAD</span>
          </span>
        </div>
      </div>

      {/* PAYMENT */}
      <div>
        <div className={`${fontClassName} font-bold uppercase tracking-wide text-lg mb-4`}>Payment</div>
        {stripePromise && clientSecret ? (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: 'night',
                variables: { colorPrimary: '#E84A27', colorBackground: '#051119', borderRadius: '0px' },
              },
            }}
          >
            <PayButton />
          </Elements>
        ) : stripePromise && !error ? (
          <p className="text-white/60 text-sm">Loading secure payment form…</p>
        ) : (
          <div className="space-y-5">
            {/* Shown until Stripe keys are added – the real card form replaces this */}
            <div className="border border-dashed border-white/20 p-6 space-y-4" aria-disabled="true">
              {['Card number', 'Expiry (MM / YY)', 'Security code'].map((l) => (
                <div key={l}>
                  <div className={label}>{l}</div>
                  <div className="h-12 mt-1 bg-white/5 border border-white/10" />
                </div>
              ))}
              <p className="text-white/50 text-xs">
                {error || 'The secure card form will appear here once online payment is connected.'}
              </p>
            </div>
            <button type="button" disabled className="btn-primary w-full py-4 text-sm opacity-60 cursor-not-allowed">
              Pay ${price} CAD
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <button type="button" onClick={onBack} className="text-white/70 hover:text-orange text-sm uppercase tracking-wide">
          ‹ Edit details
        </button>
        <p className="text-white/40 text-xs text-right">Payments are processed securely by Stripe. Card details never touch our servers.</p>
      </div>
    </div>
  );
}
