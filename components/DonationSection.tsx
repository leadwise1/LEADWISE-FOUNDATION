'use client';
import React from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream text-navy pt-12 pb-12 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
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

          {/* Content */}
          <div className="bg-white/50 p-8 rounded-2xl shadow-lg border border-navy/10">
            <h2 className="font-cinzel text-4xl font-bold text-navy mb-4">
              Explore Our Services
            </h2>
            <p className="font-oswald text-lg text-navy/80 mb-8 font-light leading-relaxed">
              LeadWise Foundation provides free digital skills training, career mentorship, and workforce development programs to help learners achieve their full potential.
            </p>

            {/* Optional Feature Buttons (you can list services here if needed) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <button className="p-4 rounded-xl border-2 transition-all duration-300 font-oswald font-semibold bg-cream/50 border-navy/20 hover:border-navy">
                Mentorship
              </button>
              <button className="p-4 rounded-xl border-2 transition-all duration-300 font-oswald font-semibold bg-navy text-cream border-navy">
                Resume Builder
              </button>
              <button className="p-4 rounded-xl border-2 transition-all duration-300 font-oswald font-semibold bg-cream/50 border-navy/20 hover:border-navy">
                Courses
              </button>
              <button className="p-4 rounded-xl border-2 transition-all duration-300 font-oswald font-semibold bg-cream/50 border-navy/20 hover:border-navy">
                Programs
              </button>
            </div>

            {/* Main Action Button */}
            <a
              href="https://services.letsleadwise.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-peach text-navy px-8 py-4 rounded-xl font-oswald font-semibold text-lg hover:bg-peach/80 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl hover:-translate-y-1"
              aria-label="Explore LeadWise Services"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
