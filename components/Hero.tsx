// app/components/Hero.tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-cream pt-32 pb-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-navy">
              Education Gives You a Voice.
              <br />
              Skills Give You Power!
            </h1>

            <h3 className="text-xl lg:text-2xl font-bold text-navy uppercase tracking-wide">
              As a Google Cloud & Workspace Partner, we bridge the gap between potential and opportunity.
            </h3>

            <p className="text-lg lg:text-xl text-navy">
              At LeadWise, we believe education ignites empowerment. We equip individuals with the technical
              skills and career confidence to overcome challenges and confront inequities.
            </p>

            <a
              href="https://donation.letsleadwise.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Donate
            </a>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero123.png"
              alt="LeadWise students learning"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
