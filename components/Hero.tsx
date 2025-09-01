'use client'
import Image from 'next/image'

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
            <h1 className="font-oswald text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-navy animate-fadeInUp">
              Igniting The Power Of The Silenced: To Amplify Every Voice!
            </h1>
            <h3 className="font-cinzel text-xl lg:text-1xl font-light text-navy uppercase tracking-wide animate-fadeInUp">
              LeadWise Foundation is dedicated to empowering
              underrepresented leaders in technology, education, and
              beyond. We dismantle barriers, provide mentorship and
              career coaching, and create pathways for leadership
              equity and systemic change
            </h3>
            <button
              onClick={handleDonateClick}
              className="btn-primary shadow-lg hover:shadow-xl animate-fadeInUp"
            >
              Donate
            </button>
          </div>

          {/* Column 2: Single Full-Length Image */}
          <div className="relative h-[520px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero1.svg"
              alt="Leadership Development"
              fill
              className="object-cover"
            />
          </div>

          {/* Column 3: Two Stacked Images */}
          <div className="space-y-4">
            <div className="relative h-[290px] lg:h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero2.svg"
                alt="Collaborative Learning"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[290px] lg:h-[300px] rounded-2xl overflow-hidden shadow-xl">
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