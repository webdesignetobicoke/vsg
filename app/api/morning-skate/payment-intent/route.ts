import { NextRequest, NextResponse } from 'next/server';
import { MORNING_SKATE_LIVE, MORNING_SKATE_PRICE_CAD, morningSkateBlocks } from '@/content/morningSkate';

// Creates a Stripe PaymentIntent for one Morning Skate block; the card form on the page confirms it.
// Setup: STRIPE_SECRET_KEY (server) and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY (browser) in the environment.
// Registration details are stored in the PaymentIntent metadata, so they appear in the Stripe dashboard.

const REQUIRED = ['playerName', 'birthDate', 'guardianName', 'email', 'phone', 'emergencyName', 'emergencyPhone'] as const;

export async function POST(request: NextRequest) {
  if (!MORNING_SKATE_LIVE) return NextResponse.json({ error: 'Registration is not open.' }, { status: 404 });
  const body = await request.json().catch(() => null);
  if (!body || REQUIRED.some((k) => !String(body[k] ?? '').trim()) || body.waiver !== true) {
    return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
  }

  const block = morningSkateBlocks.find((b) => b.id === body.blockId);
  if (morningSkateBlocks.length > 0 && (!block || block.full)) {
    return NextResponse.json({ error: 'Please select an available block.' }, { status: 400 });
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ error: 'Online payment is not available yet. Please check back soon.' }, { status: 503 });
  }

  const params = new URLSearchParams({
    amount: String(Math.round(MORNING_SKATE_PRICE_CAD * 100)),
    currency: 'cad',
    receipt_email: body.email,
    description: `Morning Skate Hockey${block ? ` – ${block.label}` : ''}`,
    'automatic_payment_methods[enabled]': 'true',
  });
  const meta: Record<string, string> = {
    player_name: body.playerName,
    birth_date: body.birthDate,
    team: body.team,
    position: body.position,
    guardian_name: body.guardianName,
    phone: body.phone,
    emergency_name: body.emergencyName,
    emergency_phone: body.emergencyPhone,
    medical: body.medical,
    block: block?.label ?? '',
    waiver_accepted: 'true',
  };
  for (const [k, v] of Object.entries(meta)) params.set(`metadata[${k}]`, String(v ?? '').slice(0, 500));

  const res = await fetch('https://api.stripe.com/v1/payment_intents', {
    method: 'POST',
    headers: { Authorization: `Bearer ${secret}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });
  const intent = await res.json();
  if (!res.ok) {
    console.error('Stripe error:', intent);
    return NextResponse.json({ error: 'Could not start payment. Please try again.' }, { status: 502 });
  }
  return NextResponse.json({ clientSecret: intent.client_secret });
}
