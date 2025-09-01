'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const SparkSection: React.FC = () => {
  const [showHand, setShowHand] = useState(false)

  useEffect(() => {
    setShowHand(true) // Only render the emoji after client hydration
  }, [])

  function handleDonateClick(e: React.MouseEvent) {
    e.preventDefault()
    const element = document.querySelector('#donate')
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="bg-navy text-cream py-20">
      <div className="container-custom text-center">
        <h1 className="font-oswald text-4xl lg:text-5xl font-bold mb-12">
          The Spark Of Change
        </h1>

        <div className="relative max-w-4xl mx-auto mb-12 h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/spark.svg"
            alt="The Spark of Change"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="font-oswald text-lg lg:text-xl leading-relaxed font-light">
          True innovation happens when every voice is heard. At LeadWise, we address the leaky pipeline in STEM leadership, the glass ceiling in corporate advancement, and the barriers that silence women and marginalized voices. By combining advocacy, mentorship, and leadership training, we are transforming industries and building a future where equity is reality.
          </p>

          {/* Donate Button */}
          <div className="relative inline-block">
            <button
              onClick={handleDonateClick}
              className="btn-primary relative shadow-lg hover:shadow-xl animate-fadeInUp ring-4 ring-peach/50 hover:ring-peach transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(255,214,197,0.7)]"
            >
              Donate
            </button>

            {/* Render hand only on client */}
            {showHand && (
              <div className="absolute -top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce-custom
                              text-white drop-shadow-[0_0_10px_rgba(255,214,197,0.8)]">
                👆
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SparkSection