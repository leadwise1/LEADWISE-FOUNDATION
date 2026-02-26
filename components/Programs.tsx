'use client'

import React from 'react'
import { BookOpen, Scale, Briefcase, ArrowRight } from 'lucide-react'

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Leadership Development & Training",
      description: "Accelerate your leadership impact with practical training that builds confidence and drives results from day one.",
      icon: <BookOpen className="w-8 h-8 text-navy" />,
      tag: "Skill Building",
      link: "https://services.letsleadwise.org/courses"
    },
    {
      title: "Advocacy & Policy Change",
      description: "Drive systemic change by breaking down barriers and expanding opportunities for underrepresented communities.",
      icon: <Scale className="w-8 h-8 text-navy" />,
      tag: "Systemic Impact",
      link: "https://services.letsleadwise.org"
    },
    {
      title: "Career Coaching & Job Readiness",
      description: "Get job-ready fast with resume optimization and direct job placement that jumpstarts your career.",
      icon: <Briefcase className="w-8 h-8 text-navy" />,
      tag: "Career Growth",
      link: "https://services.letsleadwise.org/resume"
    }
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
           LeadWise Foundation offers transformational **career training**, **leadership development**, and **advocacy programs** rooted in real-world applications.
          </p>
        </div>

        {/* The LeadWise Commitment (Dark Anchor Box) */}
        <div className="bg-navy rounded-3xl p-10 md:p-12 max-w-5xl mx-auto mb-20 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-peach/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 text-cream max-w-3xl mx-auto">
            <h3 className="font-cinzel text-3xl font-bold mb-6 leading-tight">
             Breaking Barriers, Accelerating Careers Now
            </h3>
            <p className="font-oswald text-lg mb-8 leading-relaxed">
              Born from a personal journey of overcoming systemic obstacles, LeadWise is dedicated to transforming the career paths of underrepresented professionals. We understand that in a crisis, **'later' is too late.** That’s why we offer same-day service to meet immediate career challenges head-on.
            </p>
            
            <div className="border-t border-cream/10 pt-8">
              <h4 className="font-oswald text-xl font-bold mb-6 uppercase tracking-wider text-peach">
                The Obstacles We Help You Bypass:
              </h4>
              <ul className="grid md:grid-cols-2 gap-4 font-oswald text-lg text-cream/90">
                <li className="flex items-start gap-2">
                  <span className="text-peach">•</span> 
                  <span><strong>Eliminating Waitlists:</strong> No more endless waiting periods or unclear pathways.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-peach">•</span> 
                  <span><strong>Immediate Support:</strong> Personalized career assistance the moment you need it.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-peach">•</span> 
                  <span><strong>Practical Readiness:</strong> Fast-track skill acquisition designed for the real world.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-peach">•</span> 
                  <span><strong>Proactive Placement:</strong> Moving you directly into jobs, not just a certificate.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Program Grid (The Solutions) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <article
              key={index}
              className="bg-white border border-navy/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group flex flex-col h-full"
            >
              <div className="mb-6 bg-peach/30 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-peach transition-colors duration-500">
                {program.icon}
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-3 block font-oswald">
                {program.tag}
              </span>

              <h3 className="font-oswald text-2xl font-bold text-navy mb-4 leading-tight">
                {program.title}
              </h3>

              <p className="font-oswald text-navy/70 leading-relaxed mb-8 flex-grow">
                {program.description}
              </p>

              <a 
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-navy font-bold gap-2 group/link cursor-pointer w-fit"
              >
                <span className="text-sm uppercase tracking-wider font-oswald">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs