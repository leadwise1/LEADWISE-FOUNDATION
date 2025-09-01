'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function DonationSection() {
  const [customAmount, setCustomAmount] = useState('');

  return (
    <section id="donate" className="bg-cream text-navy pt-12 pb-12 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-72 lg:h-96">
            <Image
              alt="Empowerment and change illustration"
              loading="lazy"
              decoding="async"
              className="drop-shadow-xl object-contain"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }}
              src="/images/donation.svg"
              width={384}
              height={384}
            />
          </div>
          <div className="bg-white/50 p-8 rounded-2xl shadow-lg border border-navy/10">
            <h2 className="font-cinzel text-4xl font-bold text-navy mb-4">
              Empower Change, Donate Today
            </h2>
            <p className="font-oswald text-lg text-navy/80 mb-8 font-light leading-relaxed">
              Your contribution creates a ripple effect, transforming lives and building a better future for all.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <button className="p-4 rounded-xl border-2 transition-all duration-300 font-oswald font-semibold bg-cream/50 border-navy/20 hover:border-navy">$25</button>
              <button className="p-4 rounded-xl border-2 transition-all duration-300 font-oswald font-semibold bg-navy text-cream border-navy">$50</button>
              <button className="p-4 rounded-xl border-2 transition-all duration-300 font-oswald font-semibold bg-cream/50 border-navy/20 hover:border-navy">$100</button>
              <button className="p-4 rounded-xl border-2 transition-all duration-300 font-oswald font-semibold bg-cream/50 border-navy/20 hover:border-navy">$250</button>
            </div>
            <div className="mb-6">
              <input
                type="number"
                placeholder="Or enter a custom amount"
                className="w-full px-4 py-3 bg-white border-2 border-navy/20 text-navy rounded-xl focus:border-peach focus:outline-none transition-colors duration-300 font-oswald placeholder:text-navy/50"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>
            <button className="w-full bg-peach text-navy px-8 py-4 rounded-xl font-oswald font-semibold text-lg hover:bg-peach/80 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl hover:-translate-y-1">
              Complete Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}