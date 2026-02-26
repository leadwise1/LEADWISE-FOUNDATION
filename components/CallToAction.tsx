'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Users, Target, Zap, ShieldCheck } from 'lucide-react'

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Connect this to your newsletter service (e.g., Mailchimp, Brevo)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section
      id="cta"
      className="relative bg-gradient-to-br from-navy via-navy/95 to-peach/20 pt-20 pb-12 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-peach rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cream rounded-full blur-xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-cream">
            <div className="inline-flex items-center bg-peach/20 border border-peach/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-peach mr-2" />
              <span className="font-oswald text-sm uppercase tracking-wide text-peach">
                Join the Network
              </span>
            </div>

            <h2 className="font-cinzel text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Empowerment Starts With a Connection
            </h2>

            <p className="font-oswald text-lg lg:text-xl font-light leading-relaxed mb-8 text-cream/90">
              Whether you are looking for guidance or ready to give back, our mentorship 
              platform connects emerging talent with industry leaders to break 
              barriers in STEM.
            </p>

            {/* INTEGRATED BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://mentors.letsleadwise.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-peach text-navy px-8 py-4 rounded-full font-oswald font-semibold text-lg hover:bg-cream transition-all duration-300 flex items-center justify-center group shadow-xl"
              >
                Find a Mentor
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://donation.letsleadwise.org"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cream text-cream px-8 py-4 rounded-full font-oswald font-bold text-lg hover:bg-cream hover:text-navy transition-all duration-300 inline-block text-center"
              >
                Donate to the Mission
              </a>
            </div>

            {/* TRUST SIGNAL FOR AD GRANTS */}
            <div className="flex items-center gap-2 text-peach/60 text-xs italic">
                <ShieldCheck size={16} />
                <span>LeadWise Foundation is a registered 501(c)(3) nonprofit. EIN: 39-3296280.</span>
            </div>
          </div>

          {/* RIGHT CONTENT – NEWSLETTER */}
          <div className="bg-cream/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="font-oswald text-2xl lg:text-3xl font-semibold text-navy mb-4">
                Get Leadership Updates
              </h3>
              <p className="font-oswald text-navy/80 font-light leading-relaxed">
                Stay updated on our latest programs, free courses, and impact stories.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block font-oswald font-medium text-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-navy/20 rounded-xl focus:border-peach focus:outline-none transition-colors font-oswald"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-cream px-6 py-3 rounded-xl font-oswald font-semibold hover:bg-navy/90 transition-all flex items-center justify-center group"
                >
                  Join Our Community
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-cinzel text-2xl font-semibold text-navy mb-2">Welcome!</h3>
                <p className="font-oswald text-navy/80">You have successfully joined our leadership circle.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
