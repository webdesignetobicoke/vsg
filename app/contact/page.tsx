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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.organization) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-24 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow">Start the Conversation</div>
          <div className="accent-bar mx-auto" />
          <h1 className="font-display font-black text-6xl md:text-7xl text-white uppercase leading-none tracking-tight mb-4">
            Schedule an<br />
            <span className="text-orange">Introductory</span><br />
            Discussion
          </h1>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            The process is structured, transparent, and designed to move at your pace — with full clarity at every step.
          </p>
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
                  <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto">
                    Your inquiry has been received. Michael Villani will personally follow up within 1–2 business days to schedule your introductory discussion.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-8 md:p-10">
                  <h2 className="font-display font-bold text-2xl text-navy uppercase mb-2">Get in Touch</h2>
                  <p className="text-gray-400 text-sm mb-8">All inquiries are personally reviewed by Michael Villani.</p>

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

                    <button
                      type="submit"
                      className="btn-primary w-full text-center py-4 text-sm"
                    >
                      Submit Inquiry
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
                <h3 className="section-eyebrow">The Partnership Process</h3>
                <div className="accent-bar" />
                <h4 className="font-display font-bold text-xl text-navy uppercase mb-1">4-Step Path to Partnership</h4>
                <p className="text-gray-500 text-xs mb-6">Designed to move at your pace, with full transparency throughout.</p>

                <div className="space-y-4">
                  {nextSteps.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-orange font-display font-black text-lg flex-shrink-0 border-2 border-orange">
                        {step.num}
                      </div>
                      <div>
                        <h5 className="font-display font-bold text-sm text-navy uppercase">{step.title}</h5>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy rounded-sm p-6">
                <h4 className="font-display font-bold text-white uppercase text-sm mb-3">About Michael Villani</h4>
                <p className="text-white/60 text-xs leading-relaxed">
                  Senior sales and partnerships executive. Former National Sales Director at Carlsberg Group. 15+ years in Canadian hockey sponsorship and corporate partnerships.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-orange text-xs font-semibold uppercase tracking-wide">Founder, Villani Sports Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
