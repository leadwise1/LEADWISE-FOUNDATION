'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Lock, Check } from 'lucide-react';

export default function DonationPage() {
  const [customAmount, setCustomAmount] = useState('');

  const membershipTiers = [
    {
      title: 'Catalyst Member',
      amount: '$25',
      period: '/ month',
      benefits: [
        'Fuel the STEM workforce future',
        'Help students beat algorithms',
        'Early access to resources'
      ],
      cta: 'Join the Movement',
      highlight: false
    },
    {
      title: 'Champion Member',
      amount: '$99',
      period: '/ month',
      benefits: [
        'Champion equity & growth',
        'Virtual networking priority',
        'Supporters page recognition',
        'Monthly leadership insights'
      ],
      cta: 'Support the Pipeline',
      highlight: true // Visually pop this card
    },
    {
      title: 'Luminary Member',
      amount: '$250',
      period: '/ month',
      benefits: [
        'Visionary supporter status',
        'VIP workshop/event access',
        'Seasonal impact spotlights',
        'Premium mission partnership'
      ],
      cta: 'Become a Luminary',
      highlight: false
    }
  ];

  return (
    <section className="bg-cream text-navy py-20">
      <div className="container-custom mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="font-cinzel text-4xl lg:text-5xl font-bold mb-6">
            Bridge the Gap to Opportunity
          </h1>
          <p className="font-oswald text-lg text-navy/70 max-w-2xl mx-auto leading-relaxed">
            LeadWise is a 501(c)(3) nonprofit. Your tax-deductible gift directly funds 
            the certifications and mentorship that launch careers.
          </p>
        </div>

        {/* Membership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {membershipTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                tier.highlight 
                ? 'bg-navy text-cream shadow-2xl scale-105 z-10' 
                : 'bg-white text-navy border border-navy/10 shadow-lg hover:-translate-y-2'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-peach text-navy px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Impact
                </span>
              )}
              
              <h3 className="font-cinzel text-xl font-bold mb-4">{tier.title}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{tier.amount}</span>
                <span className={`text-sm ${tier.highlight ? 'text-cream/70' : 'text-navy/60'}`}>{tier.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm leading-snug">
                    <Check className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? 'text-peach' : 'text-navy/40'}`} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://donation.letsleadwise.org"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-4 rounded-xl font-oswald font-semibold transition-all ${
                  tier.highlight 
                  ? 'bg-peach text-navy hover:bg-cream' 
                  : 'bg-navy text-cream hover:bg-peach hover:text-navy'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* One-Time Support - Balanced Layout */}
        <div className="bg-white rounded-3xl shadow-xl border border-navy/5 p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cinzel text-3xl font-bold mb-4">One-Time Support</h2>
              <p className="font-oswald text-navy/60 mb-6">
                Prefer a single contribution? Your support fuels immediate access to leadership tools for our students.
              </p>
              <div className="flex items-center gap-2 text-emerald-600 mb-2">
                <ShieldCheck size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Secure Donation Portal</span>
              </div>
            </div>

            <div className="space-y-4">
              <input
                type="number"
                placeholder="Enter Custom Amount ($)"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full px-6 py-4 bg-cream border-2 border-navy/10 rounded-2xl focus:border-peach outline-none font-oswald text-lg"
              />
              <a
                href="https://donation.letsleadwise.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-peach text-navy px-6 py-4 rounded-2xl font-oswald font-bold text-lg hover:shadow-lg transition-all"
              >
                <Lock size={18} />
                Donate Securely
              </a>
              <p className="text-[10px] text-center text-navy/40 uppercase tracking-tighter">
                LeadWise Foundation EIN: 39-3296280
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
