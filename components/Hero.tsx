// app/components/Hero.tsx
import Image from 'next/image'
'use client' // Only needed for the donate button interactivity

// Separate client-side DonateButton to avoid hydrating the whole Hero
const DonateButton: React.FC = () => {
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector('#donate')
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button
      onClick={handleDonateClick}
      className="btn-primary shadow-lg hover:shadow-xl animate-fadeInUp"
    >
      Donate
    </button>
  )
}

// Main Hero component – server-rendered
const Hero: React.FC = () => {
  return (
    <section className="bg-cream pt-32 pb-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Column 1: Text */}
          <div className="space-y-8">
            <h1 className="font-fashionista text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-navy animate-fadeInUp">
              Education Gives You a Voice. <br />
              Skills Give You Power!
            </h1>
            <h3 className="font-oswald text-xl lg:text-2xl font-bold text-navy uppercase tracking-wide animate-fadeInUp">
              As a Google Cloud & Workspace Partner, we bridge the gap between potential and opportunity.
            </h3>
            <h4 className="font-oswald text-lg lg:text-xl font-light text-navy tracking-wide animate-fadeInUp">
              At LeadWise, we believe education ignites empowerment. We equip individuals with the technical skills and career confidence to overcome challenges and confront inequities. No age, background, or circumstance limits your potential here. We turn 'limitless possibilities' into measurable financial independence for the future workforce.
            </h4>
            <DonateButton />
          </div>

          {/* Column 2: Single Hero Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero123.webp" // Optimized single hero image
              alt="Leadership Development"
              fill
              priority // Critical for LCP
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
