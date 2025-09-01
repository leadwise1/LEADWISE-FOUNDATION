'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle, Users, Target, Zap } from 'lucide-react'

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  const handleDonateClick = () => {
    window.open('https://donate.leadwise.org', '_blank')
  }

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join Our Community",
      description: "Connect with like-minded leaders and change-makers"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Achieve Your Goals", 
      description: "Get personalized mentorship and career guidance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Create Impact",
      description: "Transform your industry and community"
    }
  ]

  return (
    <section id="cta" className="relative bg-gradient-to-br from-navy via-navy/95 to-peach/20 pt-20 pb-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-peach rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cream rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-peach rounded-full blur-lg"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-cream">
            <div className="inline-flex items-center bg-peach/20 border border-peach/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-peach mr-2" />
              <span className="font-oswald text-sm uppercase tracking-wide text-peach">Ready to Lead?</span>
            </div>

            <h2 className="font-Cardo text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-tight">
              Your Gift Today Opens Doors For Tomorrw’s Leaders
            </h2>

            <p className="font-Amoresa text-lg lg:text-xl font-light leading-relaxed mb-8 text-cream/90">
              Your gift fuels leadership equity and workforce empowerment. Each contribution supports mentorship programs, advocacy work, and training initiatives that ensure underrepresented voices are not just included—but leading the future of tech, education, and beyond.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-peach/20 p-2 rounded-lg">
                    <div className="text-peach">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-lg text-cream mb-1">{feature.title}</h3>
                    <p className="font-oswald text-cream/80 font-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDonateClick}
                className="bg-peach text-navy px-8 py-4 rounded-full font-oswald font-semibold text-lg hover:bg-cream hover:text-navy transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Support Our Mission
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-cream text-cream px-8 py-4 rounded-full font-oswald font-bold text-lg hover:bg-cream hover:text-navy transition-all duration-300">
                Learn More About Programs
              </button>
            </div>
          </div>

          {/* Right Content - Newsletter Signup */}
          <div className="bg-cream/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="font-oswald text-2xl lg:text-3xl font-semibold text-navy mb-4">
                Get Exclusive Leadership Insights
              </h3>
              <p className="font-oswald text-navy/80 font-light leading-relaxed">
                Join our newsletter for weekly leadership tips, success stories, and early access to new programs.
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
                    className="w-full px-4 py-3 border-2 border-navy/20 rounded-xl focus:border-peach focus:outline-none transition-colors duration-300 font-oswald"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-cream px-6 py-3 rounded-xl font-oswald font-semibold hover:bg-navy/90 transition-all duration-300 flex items-center justify-center group"
                >
                  Join Our Community
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="text-center">
                  <p className="font-oswald text-sm text-navy/60">
                    No spam. Unsubscribe anytime. Your privacy is important to us.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-cinzel text-2xl font-semibold text-navy mb-2">
                  Welcome to the Community!
                </h3>
                <p className="font-oswald text-navy/80">
                  Check your inbox for a welcome message with exclusive resources.
                </p>
              </div>
            )}

            {/* Social Proof without top border */}
            <div className="mt-8 pt-6">
              <div className="flex items-center justify-center space-x-6 text-center">
                <div>
                  <div className="font-cinzel text-2xl font-bold text-navy">2.5K+</div>
                  <div className="font-oswald text-sm text-navy/70 uppercase tracking-wide">Newsletter Subscribers</div>
                </div>
                <div className="w-px h-12 bg-navy/20"></div>
                <div>
                  <div className="font-cinzel text-2xl font-bold text-navy">98%</div>
                  <div className="font-oswald text-sm text-navy/70 uppercase tracking-wide">Open Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction