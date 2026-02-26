'use client'

import React from 'react'
import { BookOpen, Scale, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react'

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Leadership Development & Training",
      description: "Our leadership development programs equip emerging and experienced professionals with evidence-based skills, practical frameworks, and real-world strategies to lead with confidence.",
      icon: <BookOpen className="w-8 h-8 text-navy" />,
      tag: "Skill Building"
    },
    {
      title: "Advocacy & Policy Change Initiatives",
      description: "LeadWise Foundation drives systemic change with our advocacy and policy programs designed to expand access and remove barriers faced by underrepresented communities.",
      icon: <Scale className="w-8 h-8 text-navy" />,
      tag: "Systemic Impact"
    },
    {
      title: "Career Coaching & Job Readiness",
      description: "Our career coaching and job readiness programs help professionals strengthen resumes, master interviews, expand networks, and develop long-term career pathways.",
      icon: <Briefcase className="w-8 h-8 text-navy" />,
      tag: "Career Growth"
    }
  ]

  const visionPoints = [
    "Every voice is heard",
    "Every potential is realized", 
    "Every leader initiates and sustains lasting change"
  ]

  return (
    <section id="programs" className="bg-cream py-24">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold mb-6 text-navy">
            Our Core Programs
          </h2>
          <div className="w-24 h-1 bg-peach mx-auto mb-8 rounded-full"></div>
          <p className="font-oswald text-lg lg:text-xl text-navy/70 font-light leading-relaxed">
            LeadWise Foundation offers transformational **career training, leadership development**, and **advocacy programs** rooted in real-world applications.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-navy rounded-3xl p-10 md:p-12 max-w-5xl mx-auto mb-20 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-peach/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <h3 className="font-cinzel text-3xl font-bold text-cream leading-tight">
              Together, we are building a future where:
            </h3>
            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-center font-oswald text-lg text-cream/90 group">
                  <div className="bg-peach/20 p-2 rounded-lg mr-4 group-hover:bg-peach/40 transition-colors">
                    <CheckCircle2 className="text-peach w-6 h-6" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Program Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <article
              key={index}
              className="bg-white border border-navy/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group flex flex-col h-full"
            >
              <div className="mb-6 bg-peach/30 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-peach transition-colors duration-500">
                {program.icon}
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3 block">
                {program.tag}
              </span>

              <h3 className="font-oswald text-2xl font-bold text-navy mb-4 leading-tight">
                {program.title}
              </h3>

              <p className="font-oswald text-navy/70 leading-relaxed mb-8 flex-grow">
                {program.description}
              </p>

              <div className="flex items-center text-navy font-bold gap-2 group/link cursor-pointer">
                <span className="text-sm uppercase tracking-wider">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
