'use client'

import React from 'react'
import Image from 'next/image'

const Hero: React.FC = () => {
  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const aboutSection = document.querySelector('#about')
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="bg-cream pt-32 pb-20"
      role="region"
      aria-label="Hero Section - LeadWise Foundation"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* Column 1: Text */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="font-fashionista text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-navy animate-fadeInUp">
             Education Gives You a Voice. Skills Give You Power!
            </h1>

            <p className="font-oswald text-xl lg:text-xl font-bold text-navy uppercase tracking-wide animate-fadeInUp" role="heading" aria-level={2}>
              As a Google Cloud & Workspace Partner, we bridge the gap between potential and opportunity.
            </p>

            <p className="font-oswald text-lg font-light text-navy tracking-wide animate-fadeInUp">
              At LeadWise Foundation, we believe that for many, help arrives too late. We eliminate
              the "friction addiction" of traditional programs to provide underrepresented professionals 
              with immediate access to technical skills, leadership training, and corporate advocacy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://donation.letsleadwise.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate to LeadWise Foundation"
                className="btn-primary shadow-lg hover:shadow-xl animate-fadeInUp inline-block"
              >
                Donate
              </a>

              <a
                href="#about"
                onClick={handleLearnMore}
                aria-label="Learn more about LeadWise Foundation"
                className="btn-secondary shadow-lg hover:shadow-xl animate-fadeInUp inline-block"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Column 2: Hero Image */}
          <div className="relative aspect-[720/600] lg:aspect-[300/600] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero.webp"
              alt="Students in leadership development program, participating in collaborative activities"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Column 3: Supporting Images */}
          <div className="space-y-4">
            <div className="relative aspect-[290/300] lg:aspect-[300/300] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero2.webp"
                alt="Students collaborating in a learning environment with mentor guidance"
                fill
                loading="lazy"
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[290/300] lg:aspect-[300/300] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero3.webp"
                alt="Mentorship session in progress, demonstrating guidance and support"
                fill
                loading="lazy"
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
