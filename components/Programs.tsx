'use client'

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Leadership Development & Training",
      description: "Our leadership development programs equip emerging and experienced professionals with evidence-based skills, practical frameworks, and real-world strategies to lead with confidence, manage teams effectively, and create impact in diverse environments."
    },
    {
      title: "Advocacy & Policy Change Initiatives",
      description: "LeadWise Foundation drives systemic change with our advocacy and policy programs designed to expand access, remove barriers faced by underrepresented communities, and build equitable opportunities through research-backed strategies and community engagement."
    },
    {
      title: "Career Coaching & Job Readiness",
      description: "Our career coaching and job readiness programs help professionals strengthen resumes, master interviews, expand networks, and develop long-term career pathways. We support advancement at every stage of your professional journey."
    }
  ]

  const visionPoints = [
    "Every voice is heard",
    "Every potential is realized", 
    "Every leader initiates and sustains lasting change"
  ]

  return (
    <section id="programs" className="bg-cream pt-12 pb-12">
      <div className="container-custom">
        
        {/* SEO-Friendly Main Heading */}
        <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-center mb-8 text-navy">
          Career Training, Leadership Development & Advocacy Programs
        </h2>

        {/* Intro With Natural Keywords */}
        <p className="font-oswald text-lg lg:text-xl text-center max-w-4xl mx-auto mb-16 text-navy font-light leading-relaxed">
          LeadWise Foundation offers transformational **career training, leadership development**, and **advocacy programs** rooted in real-world applications and designed to accelerate professional growth, expand opportunities, and equip leaders at every stage of their journey.
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

        {/* Program Grid With Semantic Structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-peach to-navy/90 border border-peach/10 rounded-2xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(33,34,64,0.2)] transition-transform duration-300 hover:-translate-y-2 group"
            >
              {/* Subheading Including Target Keywords */}
              <h3 className="font-oswald text-xl font-bold text-navy mb-4">
                {program.title}
              </h3>

              {/* Descriptive SEO-Rich Paragraph */}
              <p className="font-oswald text-navy/90 leading-relaxed">
                {program.description} These programs strengthen your professional capabilities, expand your network, and support long-term career growth.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
