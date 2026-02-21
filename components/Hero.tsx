import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-cream pt-24 pb-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-navy">
              Education Gives You a Voice.
              <br />
              Skills Give You Power!
            </h1>

            <h3 className="text-xl lg:text-2xl font-semibold text-navy uppercase tracking-wide">
              As a Google Cloud & Workspace Partner, we bridge the gap between potential and opportunity.
            </h3>

            <p className="text-lg text-navy max-w-xl">
              At LeadWise, we believe education ignites empowerment. We equip individuals with the
              technical skills and career confidence to overcome challenges and create financial independence.
            </p>

            <div>
              <a
                href="https://donation.letsleadwise.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Donate
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero123.png"
              alt="LeadWise mentorship and learning"
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
