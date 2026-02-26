'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function DonationPage() {
  const [customAmount, setCustomAmount] = useState('');

  const membershipTiers = [
    {
      title: 'Catalyst Member',
      amount: '$25 / month',
      benefits: [
        'Fuel the future of the STEM workforce.',
        'Help one student build a portfolio that beats hiring algorithms.',
        'Early access to resources & digital badge.'
      ],
      cta: 'Join the Movement'
    },
    {
      title: 'Champion Member',
      amount: '$99 / month',
      benefits: [
        'Champion equity and professional growth.',
        'Priority invitations to virtual networking sessions.',
        'Featured recognition on our Supporters page.',
        'Monthly insights from LeadWise leadership.'
      ],
      cta: 'Support the Pipeline'
    },
    {
      title: 'Luminary Member',
      amount: '$250 / month',
      benefits: [
        'Lead the way as a visionary supporter.',
        'VIP access to select workshops and events.',
        'Spotlights in seasonal impact stories.',
        'Premium recognition as key mission partners.'
      ],
      cta: 'Become a Luminary'
    }
  ];

  return (
    <section className="bg-cream text-navy py-16">
      <div className="container-custom mx-auto px-4 md:px-8 max-w-7xl">
        <h1 className="font-cinzel text-5xl lg:text-6xl font-bold text-navy text-center mb-6">
          Bridge the Gap to Opportunity
        </h1>
        <p className="font-oswald text-lg lg:text-xl text-navy/80 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
          Your contribution directly funds the certifications and tools that launch careers. Help us build a tech industry that truly reflects our communities.
        </p>

        {/* Main Grid: Image + Membership Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          {/* Left Image */}
          <div className="relative h-80 lg:h-full">
            <Image
              src="/images/donation.svg"
              alt="Empowerment and change illustration"
              fill
              className="object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Membership Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {membershipTiers.map((tier, idx) => (
              <div key={idx} className="bg-white/50 p-8 rounded-2xl shadow-lg border border-navy/10 flex flex-col justify-between">
                <h3 className="font-cinzel text-2xl font-bold mb-2">{tier.title}</h3>
                <p className="font-oswald text-lg text-navy/80 mb-4">{tier.amount}</p>
                <ul className="list-disc list-inside mb-6 font-oswald text-navy/80 space-y-2">
                  {tier.benefits.map((benefit, bIdx) => <li key={bIdx}>{benefit}</li>)}
                </ul>
                <a
                  href="https://donation.letsleadwise.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full text-center bg-peach text-navy px-6 py-3 rounded-xl font-oswald font-semibold text-lg hover:bg-peach/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* One-Time Support */}
        <div className="bg-white/50 p-8 rounded-2xl shadow-lg border border-navy/10 max-w-3xl mx-auto text-center">
          <h2 className="font-cinzel text-3xl font-bold mb-4">One-Time Support</h2>
          <p className="font-oswald text-lg text-navy/80 mb-6 leading-relaxed">
            Not ready to commit monthly? Make a one-time gift to support our mission.
          </p>
          <div className="mb-4">
            <input
              type="number"
              placeholder="$ Custom Amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-navy/20 text-navy rounded-xl focus:border-peach focus:outline-none transition-colors duration-300 font-oswald placeholder:text-navy/50 mb-4"
            />
          </div>
          <a
            href="https://donation.letsleadwise.org"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block bg-peach text-navy px-6 py-3 rounded-xl font-oswald font-semibold text-lg hover:bg-peach/80 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}
