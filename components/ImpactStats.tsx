'use client'
import { useState, useEffect, useRef } from 'react'

interface Stat {
  number: string
  label: string
  suffix?: string
}

const ImpactStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLElement>(null)

  const stats: Stat[] = [
    { number: '2024', label: 'Year Founded' },
    { number: '50+', label: 'Leaders Trained', suffix: '+' },
    { number: '372', label: 'Lives Directly Impacted' },
    { number: '80', label: 'Policy Success Rate', suffix: '%' },
    { number: '15', label: 'Partner Organizations', suffix: '+' },
    { number: '95', label: 'Completion Rate', suffix: '%' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    stats.forEach((stat) => {
      const target = parseInt(stat.number)
      if (isNaN(target)) return
      let current = 0
      const increment = target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setAnimatedStats(prev => ({ ...prev, [stat.label]: target }))
          clearInterval(timer)
        } else {
          setAnimatedStats(prev => ({ ...prev, [stat.label]: Math.floor(current) }))
        }
      }, 20)
    })
  }

  return (
    <section ref={sectionRef} id="impact" className="bg-cream text-navy py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold mb-6">
            Your Voice, Our Impact
          </h2>
          <p className="font-oswald text-lg lg:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Together, we're creating measurable change in communities across the nation. 
            Every program participant becomes a catalyst for transformation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
                           <div className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(33,34,64,0.6)] transition-all duration-300 group h-full flex flex-col justify-center">
                <div className="font-cinzel text-3xl lg:text-4xl xl:text-5xl font-bold text-peach mb-2 group-hover:scale-110 transition-transform duration-300">
                  {isVisible 
                    ? `${animatedStats[stat.label] || 0}${stat.suffix || ''}`
                    : `0${stat.suffix || ''}`
                  }
                </div>
                <div className="font-oswald text-sm lg:text-base font-medium text-cream/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Impact Message */}
        <div className="mt-16 text-center">
        <div className="bg-gradient-to-br from-navy to-navy/90 text-cream border border-peach/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-cinzel text-2xl font-semibold text-peach mb-4">
              Building Tomorrow's Leaders Today
            </h3>
            <p className="font-oswald text-lg font-light leading-relaxed text-cream/90 max-w-2xl mx-auto">
              Each statistic represents a real person whose voice has been amplified, whose potential has been unlocked, 
              and whose leadership journey has transformed not just their own life, but their entire community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactStats