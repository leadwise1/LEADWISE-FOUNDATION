'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Review {
  name: string
  title: string
  company: string
  content: string
  initials: string
  rating: number
}

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const reviews: Review[] = [
    {
      name: "Maria Rodriguez",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc",
      content: "LeadWise transformed my career trajectory completely. As a Latina in tech, I faced countless barriers, but their mentorship program gave me the confidence and tools to break through the glass ceiling. I'm now leading a team of 15 engineers.",
      initials: "MR",
      rating: 5
    },
    {
      name: "Dr. Aisha Patel",
      title: "Research Director",
      company: "BioMed Solutions",
      content: "The advocacy training I received through LeadWise enabled me to champion diversity initiatives at my organization. We've increased our hiring of underrepresented groups by 60% in just two years.",
      initials: "AP",
      rating: 5
    },
    {
      name: "Jordan Chen",
      title: "Startup Founder",
      company: "EcoTech Ventures",
      content: "LeadWise didn't just teach me leadership skills—they helped me find my authentic voice as an Asian-American entrepreneur. Their network opened doors I didn't even know existed.",
      initials: "JC",
      rating: 5
    },
    {
      name: "Priya Johnson",
      title: "Policy Analyst",
      company: "Women in Government",
      content: "The systemic change training gave me the framework to draft legislation that's now being considered at the state level. LeadWise turns vision into actionable policy.",
      initials: "PJ",
      rating: 5
    },
    {
      name: "Dr. Keisha Williams",
      title: "University Professor",
      company: "Metropolitan University",
      content: "As a Black woman in academia, I felt isolated until I joined LeadWise. Their community became my support system, and their training helped me secure my dream tenure-track position.",
      initials: "KW",
      rating: 5
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, reviews.length])

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    setIsAutoPlaying(false)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    setIsAutoPlaying(false)
  }

  const goToReview = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="reviews" className="bg-cream py-20">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s forwards;
        }
        .active-review {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        @keyframes star-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-star {
          animation: fade-in 0.5s forwards, star-bounce 1s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold mb-6 text-navy">
          We Don't Just Talk About Change : We Create It
          </h2>
          <p className="font-oswald text-lg lg:text-xl font-light text-navy max-w-3xl mx-auto leading-relaxed">
            Hear from the leaders we've empowered who are now transforming their industries and communities.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Review Display */}
          <div className={`bg-gradient-to-br from-navy to-navy/90 text-cream rounded-3xl p-8 lg:p-12 shadow-xl border border-peach/20 relative overflow-hidden ${currentIndex !== null ? 'active-review' : ''}`}>
            <div className="absolute top-6 left-6 text-cream/10">
              <Quote size={60} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-peach rounded-full flex items-center justify-center text-navy font-cinzel font-semibold text-xl">
                {reviews[currentIndex].initials}
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="flex mb-3">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                         <span 
                           key={i} 
                           className="text-yellow-400 text-xl animate-star" 
                           style={{animationDelay: `${i * 0.15}s`}}
                         >
                           ★
                         </span>
                        ))}
                    </div>
                    <blockquote className="font-oswald text-lg lg:text-xl text-cream/90 leading-relaxed font-light italic">
                      "{reviews[currentIndex].content}"
                    </blockquote>
                  </div>
                  
                  <div>
                  <div className="font-cinzel font-semibold text-xl text-peach">
                      {reviews[currentIndex].name}
                    </div>
                    <div className="font-oswald text-cream/80">
                      {reviews[currentIndex].title} at {reviews[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-navy text-cream p-3 rounded-full hover:bg-navy/80 transition-all duration-300 shadow-lg"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-navy text-cream p-3 rounded-full hover:bg-navy/80 transition-all duration-300 shadow-lg"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-navy scale-125' 
                    : 'bg-navy/30 hover:bg-navy/60'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:bg-gradient-to-br hover:from-peach hover:to-peach/80 hover:text-navy cursor-pointer">
            <div className="font-cinzel text-2xl font-bold mb-2">4.9/5</div>
            <div className="font-oswald text-sm uppercase tracking-wide">Average Rating</div>
          </div>
          <div className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:bg-gradient-to-br hover:from-peach hover:to-peach/80 hover:text-navy cursor-pointer">
            <div className="font-cinzel text-2xl font-bold mb-2">98%</div>
            <div className="font-oswald text-sm uppercase tracking-wide">Recommend Us</div>
          </div>
          <div className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:bg-gradient-to-br hover:from-peach hover:to-peach/80 hover:text-navy cursor-pointer" title="Programs have consistently delivered above average growth for participants over 1 year">
            <div className="font-cinzel text-2xl font-bold mb-2">1+ Years</div>
            <div className="font-oswald text-sm uppercase tracking-wide">Above Average Growth</div>
          </div>
          <div className="bg-gradient-to-br from-navy to-navy/90 text-cream rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:bg-gradient-to-br hover:from-peach hover:to-peach/80 hover:text-navy cursor-pointer">
            <div className="font-cinzel text-2xl font-bold mb-2">15+</div>
            <div className="font-oswald text-sm uppercase tracking-wide">Success Stories</div>
          </div>
          <p className="text-cream/70 text-sm mt-2 col-span-full text-center">Stats reflect programs and impact since launch in 2024.</p>
        </div>
      </div>
    </section>
  )
}

export default Reviews