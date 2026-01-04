'use client'
import Image from 'next/image'

// Remember to use next/font/google for Oswald and Cinzel fonts in app/layout.tsx for font stability

const Hero: React.FC = () => {
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector('#donate')
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="bg-cream pt-32 pb-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Column 1: Text */}
          <div className="space-y-8">
            <h1 className="font- fashionista text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-navy animate-fadeInUp">
            Education Gives You a Voice. 
            Skills Give You Power! </h1>
          
            <h3 className="font-oswald text-xl lg:text-1xl font-bold text-navy uppercase tracking-wide animate-fadeInUp">
              As a Google Cloud & Workspace Partner, we bridge the gap between potential and opportunity.
              </h3>
           <h4 className="font-oswald text-xl lg:text-1xl font-light text-navy tracking-wide animate-fadeInUp">
              At LeadWise, we believe education ignites empowerment. We equip individuals with the technical skills and career confidence to overcome challenges and confront inequities. No age, background, or circumstance limits your potential here. We turn 'limitless possibilities' into measurable financial independence for the future workforce.
            </h4>
            <button
              onClick={handleDonateClick}
              className="btn-primary shadow-lg hover:shadow-x1 animate-fadeInUp"
            >
              Donate
            </button>
          </div>

          {/* Column 2: Single Full-Length Image */}
          <div className="relative aspect-[720/600] lg:aspect-[300/600] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero1.svg"
              alt="Leadership Development"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Column 3: Two Stacked Images */}
          <div className="space-y-4">
            <div className="relative aspect-[290/300] lg:aspect-[300/300] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero2.svg"
                alt="Collaborative Learning"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[290/300] lg:aspect-[300/300] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero3.svg"
                alt="Mentorship"
                fill
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
