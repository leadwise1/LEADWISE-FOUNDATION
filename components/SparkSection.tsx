'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const SparkSection: React.FC = () => {
  const [showSpark, setShowSpark] = useState(false)

  useEffect(() => {
    setShowSpark(true) // Only render the sparkle after client hydration
  }, [])

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
        .group:hover .spark-emoji {
          transform: translateY(-6px) scale(1.2);
          transition: transform 0.3s ease;
        }
        .group:hover .btn-primary {
          transition: box-shadow 0.3s ease, ring 0.3s ease;
        }
      `}</style>

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
              True innovation happens when every voice is heard. At LeadWise, we address the leaky pipeline in STEM leadership, the glass ceiling in corporate advancement, and the barriers that silence marginalized voices. Talent isn’t rare. Opportunity is. Whether supporting parents navigating career transitions or students working to break cycles of economic hardship, LeadWise provides structured tools, mentorship, and technology-driven pathways that amplify voices too often excluded from traditional systems. Our platform transforms potential into measurable progress—building workforce readiness, leadership capacity, and long-term economic mobility.
            </p>

            {/* Services Button */}
            <div className="relative inline-block group">
              <a
                href="https://services.letsleadwise.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore LeadWise services"
                className="btn-primary relative shadow-lg hover:shadow-xl animate-fadeInUp ring-4 ring-peach/50 hover:ring-peach transition-all duration-300
                           hover:shadow-[0_0_20px_rgba(255,214,197,0.7)]"
              >
                Services We Offer
              </a>

              {/* Sparkle animation */}
              {showSpark && (
                <div
                  role="img"
                  aria-label="Sparkle animation"
                  className="spark-emoji absolute -top-0 left-1/2 -translate-x-1/2 text-3xl animate-pulse-custom
                             text-white drop-shadow-[0_0_10px_rgba(255,214,197,0.8)] pointer-events-none"
                >
                  ✨
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SparkSection
