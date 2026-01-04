'use client'
import { useState, useEffect, useRef } from 'react'
import { Users, GraduationCap, Calendar, BookOpen, Handshake, Sparkles, LucideIcon } from 'lucide-react'

interface Stat {
  number: string
  label: string
  suffix?: string
  icon: LucideIcon
  description?: string
}

const ImpactStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLElement>(null)

  // STATS DATA
  // Added icons and descriptions for a richer UI
  const stats: Stat[] = [
    { 
      number: '50', 
      label: 'Leaders Trained', 
      suffix: '+', 
      icon: Users,
      description: 'Engaged & Empowered'
    },
    { 
      number: '95', 
      label: 'Our Students', 
      suffix: '%', 
      icon: GraduationCap,
      description: 'completion Rate'
    },
    { 
      number: '100', 
      label: 'Curriculum', 
      suffix: '%', 
      icon: BookOpen,
      description: 'Tution Free'
    },
    { 
      number: '15', 
      label: 'Corporate Partners', 
      suffix: '+', 
      icon: Handshake,
      description: 'Top Organizations'
    },
    { 
      number: '96', 
      label: 'Interview Rate', 
      suffix: '%', 
      icon: Sparkles,
      description: 'Secures Within 90 Days'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.2 } // Trigger slightly earlier
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    stats.forEach((stat) => {
      const target = parseInt(stat.number.replace(/\D/g, '')) // Remove non-digits just in case
      if (isNaN(target)) return

      const duration = 2000 // Animation duration in ms
      const steps = 60 // Updates per second
      const stepTime = duration / steps
      const increment = target / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setAnimatedStats(prev => ({ ...prev, [stat.label]: target }))
          clearInterval(timer)
        } else {
          setAnimatedStats(prev => ({ ...prev, [stat.label]: Math.floor(current) }))
        }
      }, stepTime)
    })
  }

  return (
    <section 
      ref={sectionRef} 
      id="impact" 
      className="relative bg-cream text-navy py-24 overflow-hidden"
    >
      {/* Background Decorative Pattern - Subtle dot matrix */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#212240 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-navy/5 text-navy font-oswald text-sm tracking-widest uppercase mb-4 border border-navy/10">
            Our Reach
          </span>
          <h2 className="font-oswald text-4xl lg:text-6xl font-bold mb-6 text-navy">
            Your Voice, <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-peach/80">Our Impact</span>
          </h2>
          <p className="font-oswald text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed text-navy/70">
          Together, we are creating measurable economic pathways in communities across the nation. Every program participant becomes a skilled catalyst for workforce transformation. 
          </p>
        </div>

        {/* Stats Grid - 5 Columns for perfect centering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={group relative transition-all duration-700 ease-out}
              style={{ 
                transitionDelay: ${index * 100}ms,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(2rem)'
              }}
            >
              {/* Card Container */}
              <div className="h-full bg-white/50 backdrop-blur-sm border border-navy/5 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center relative overflow-hidden">
                
                {/* Decorative glow on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-peach to-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Icon */}
                <div className="mb-4 p-3 rounded-full bg-navy/5 text-navy group-hover:bg-navy group-hover:text-peach transition-colors duration-300">
                  <stat.icon size={28} strokeWidth={1.5} />
                </div>

                {/* Number */}
                <div className="font-cinzel text-4xl lg:text-5xl font-bold text-navy mb-2 tracking-tight">
                  {isVisible 
                    ? ${animatedStats[stat.label] || 0}${stat.suffix || ''}
                    : ${stat.number}${stat.suffix || ''}
                  }
                </div>

                {/* Label */}
                <div className="font-oswald font-medium text-navy uppercase tracking-widest text-sm mb-1">
                  {stat.label}
                </div>
                
                {/* Optional small description */}
                {stat.description && (
                  <div className="font-oswald text-xs text-navy/50 font-light mt-1">
                    {stat.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout / Insight */}
        <div className={transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}}>
          <div className="relative rounded-3xl overflow-hidden bg-navy text-cream p-8 md:p-12 text-center max-w-5xl mx-auto shadow-2xl shadow-navy/20">
            {/* Background Gradient Mesh */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-peach/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <Sparkles className="text-peach mb-6 w-8 h-8 opacity-80" />
              <h3 className="font-cinzel text-2xl md:text-3xl font-semibold text-peach mb-6">
                "Building Tomorrow's Leaders Today"
              </h3>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-peach/50 to-transparent mb-6"></div>
              <p className="font-oswald text-lg md:text-xl font-light leading-relaxed text-cream/90 max-w-3xl">
                Each statistic represents a real person whose voice has been amplified, whose potential has been unlocked, 
                and whose leadership journey has transformed not just their own life, but their entire community.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ImpactStats
      
