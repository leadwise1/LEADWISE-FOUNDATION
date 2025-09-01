'use client'

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Leadership Program",
      description: "Transform your leadership potential with our evidence-driven programs. We offer comprehensive leadership development, training, and educational strategies to help you overcome challenges and enhance your leadership effectiveness as an empowered leader today."
    },
    {
      title: "Advocacy & Policy Change", 
      description: "We take on the hard fights because we understand that real change requires structural improvements and systematic education. Our advocacy work centers around increasing access and removing barriers that marginalized people face."
    },
    {
      title: "Career Coaching",
      description: "We offer resources to empower individuals to take control of their careers. Our programs target advanced, career coaching for a broad range of professionals and others seeking to advance their professional trajectories."
    }
  ]

  const visionPoints = [
    "Every voice is heard",
    "Every potential is realized", 
    "Every leader possesses the ability to initiate and propel change"
  ]
    return (
    <section id="programs" className="bg-cream pt-12 pb-12">
      <div className="container-custom">
        <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-center mb-8 text-navy">
          How We Ignite Leadership & Drive Systemic Change
        </h2>
        <p className="font-oswald text-lg lg:text-xl text-center max-w-4xl mx-auto mb-16 text-navy font-light leading-relaxed">
          One empowered leader at a time. Our tailored programs provide the tools, mentorship, and advocacy needed 
          to break through barriers and redefine success. With a focus on practical skills and real-world applications, 
          we ensure that our leaders are not just prepared for opportunities but are also equipped to create them.
        </p>

        {/* Vision Section */}
        <div className="bg-navy rounded-2xl p-8 max-w-4xl mx-auto mb-16">
        <h3 className="font-cinzel text-2xl font-bold text-cream text-center mb-6">
            Together, we are building a future where:
          </h3>
          <div className="space-y-4">
            {visionPoints.map((point, index) => (
              <div key={index} className="flex items-center font-oswald text-lg text-cream">
                <span className="text-peach text-xl font-bold mr-4">✓</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
            key={index}
            className="bg-gradient-to-br from-peach to-navy/90 border border-peach/10 rounded-2xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(33,34,64,0.2)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-navy"></div>
            <h3 className="font-oswald text-xl font-bold text-navy mb-4">
              {program.title}

              </h3>
              <p className="font-oswald text-navy/90 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Programs