'use client';

// Contact page – lead capture form + process recap
import { useState } from 'react';

const nextSteps = [
  { num: 1, title: 'Introductory Discussion', description: 'Confirm strategic alignment, governance fit, and mutual interest.' },
  { num: 2, title: 'Property & Governance Review', description: 'Review organizational structure, commercial authority, and platform scope.' },
  { num: 3, title: 'Platform Design', description: 'Define sponsorship categories, exclusivity rules, and Year 1 commercial framework.' },
  { num: 4, title: 'Commercial Launch', description: 'Formalize the partnership and initiate controlled sponsor outreach and execution.' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    role: '',
    type: 'League/Association',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.organization) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          organization: form.organization,
          email: form.email,
          phone: form.phone,
          role: form.role,
          type: form.type,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-32 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6 fade-in fade-in-delay-1">
              Schedule an<br />
              <span className="text-orange">Introductory</span><br />
              Discussion
            </h1>
            <div className="bg-orange/10 border border-orange/30 rounded-sm p-8 mb-12 fade-in fade-in-delay-2">
              <p className="text-white text-2xl md:text-3xl font-display font-semibold leading-relaxed">
                The process is structured, transparent, and designed to move at your pace — with full clarity at every step.
              </p>
            </div>
            <p className="text-white font-display font-black text-xl uppercase tracking-wide fade-in fade-in-delay-3">
              Focused<span className="text-orange">.</span> Governed<span className="text-orange">.</span> Built to Scale<span className="text-orange">.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* FORM */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border-2 border-orange rounded-sm p-12 text-center">
                  <div className="text-orange text-5xl font-display font-black mb-4">✓</div>
                  <h2 className="font-display font-black text-3xl text-navy uppercase mb-3">Thank You, {form.name}!</h2>
                  <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto mb-6">
                    Your inquiry has been received and sent to <span className="font-semibold text-navy">michael@villanisportsgroup.com</span>.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
                    Michael Villani will personally follow up within 1–2 business days to schedule your introductory discussion.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-8 md:p-10">
                  <h2 className="font-display font-bold text-2xl text-navy uppercase mb-2">Get in Touch</h2>
                  <p className="text-gray-400 text-base mb-8">All inquiries go directly to <a href="mailto:michael@villanisportsgroup.com" className="text-orange hover:text-orange/80 font-semibold transition-colors duration-300">michael@villanisportsgroup.com</a> and are personally reviewed by Michael Villani.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
                          Full Name <span className="text-orange">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
                          Organization / League / Association <span className="text-orange">*</span>
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={form.organization}
                          onChange={handleChange}
                          required
                          placeholder="Your organization"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
                          Email <span className="text-orange">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@organization.ca"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
                          Phone <span className="text-gray-300">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (416) 000-0000"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">Your Role / Title</label>
                        <input
                          type="text"
                          name="role"
                          value={form.role}
                          onChange={handleChange}
                          placeholder="e.g. Executive Director, President"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">I am a</label>
                        <select
                          name="type"
                          value={form.type}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange transition-colors bg-white"
                        >
                          <option>League/Association</option>
                          <option>Sponsor / Brand</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your league or association, or any questions you have..."
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange transition-colors resize-none"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-sm p-4 text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full text-center py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                    <p className="text-gray-400 text-xs text-center">
                      No commitment required. All inquiries are responded to within 1–2 business days.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              <div>
              <h3 className="section-eyebrow">Next Steps</h3>
              <div className="accent-bar" />
              <h4 className="font-display font-bold text-3xl text-navy uppercase mb-1">The Partnership Process</h4>
                <p className="text-gray-500 text-base mb-6">Designed to move at your pace, with full transparency throughout.</p>

                <div className="space-y-4">
                  {nextSteps.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-orange font-display font-black text-lg flex-shrink-0 border-2 border-orange">
                        {step.num}
                      </div>
                      <div>
                        <h5 className="font-display font-bold text-lg text-navy uppercase">{step.title}</h5>
                        <p className="text-gray-500 text-base mt-0.5 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
