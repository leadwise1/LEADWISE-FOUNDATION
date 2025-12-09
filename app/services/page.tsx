"use client";

import { useState } from "react";
import { 
  Menu, 
  X, 
  MessageSquare, 
  FileText, 
  Mic, 
  Target, 
  Users, 
  Shield,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Zap,
  Heart,
  Globe
} from "lucide-react";

// Updated Features: "Organic Growth" Copy + "Emerald/Peach" Gradients
const features = [
  {
    title: "Confidence Lab",
    desc: "A safe space to practice. Coach Leo provides real-time, judgment-free feedback on your tone and delivery, helping you find your voice before the stakes are high.",
    icon: <Mic className="text-white" size={32} />,
    gradient: "from-emerald-600 via-teal-500 to-white-300" // Deep Green to Teal
  },
  {
    title: "Narrative Architect",
    desc: "Your story matters. Our AI helps you translate your unique life experiences into professional language that resonates with recruiters and passes automated filters.",
    icon: <FileText className="text-white" size={32} />,
    gradient: "from-slate-700 via-slate-600 to-teal-500" // Slate to Teal
  },
  {
    title: "Adaptive Mentorship",
    desc: "Personalized guidance that adapts to your emotional needs. Toggle between 'Friendly' for encouragement, or 'Strict' for high-accountability preparation.",
    icon: <MessageSquare className="text-white" size={32} />,
    gradient: "from-blue-400 via-amber-300 to-emerald-400" // Peach (Orange) to Green
  },
  {
    title: "Holistic Pathways",
    desc: "Navigate the unknown with purpose. We analyze your personality and interests to build a visual roadmap for college majors, internships, and career pivots.",
    icon: <Target className="text-white" size={32} />,
    gradient: "from-teal-600 via-emerald-500 to-green-400" // Rich Greens
  },
  {
    title: "Impact Measurement",
    desc: "For our partners: Real-time dashboards that track skill acquisition and placement rates, allowing you to visualize the tangible impact of your scholarship funds.",
    icon: <Users className="text-white" size={32} />,
    gradient: "from-slate-700 via-slate-600 to-emerald-600" // Slate to Peach
  },
  {
    title: "Equitable Profiling",
    desc: "Technology designed for fairness. Our bias-reduction algorithms ensure that a candidate's skills shine brighter than their demographics.",
    icon: <Shield className="text-white" size={32} />,
    gradient: "from-emerald-900 via-slate-800 to-slate-700" // Deep Forest
  }
];

// Updated Audiences: "Whole Person" Copy + "Nature" Colors
const audiences = [
  {
    emoji: "🌟",
    title: "For The Dreamers",
    subtitle: "Students & Youth",
    description: "The path forward isn't always clear. We help you map your future based on who you are, not just what's popular.",
    features: [
      "Personality-based career matching",
      "College major & internship roadmaps",
      "A safe space to ask 'stupid' questions"
    ],
    icon: <GraduationCap size={40} className="text-peach-300" />,
    color: "blue" // Peach/Orange
  },
  {
    emoji: "📈",
    title: "For The Achievers",
    subtitle: "Job Seekers & Grads",
    description: "Talent is universal; opportunity is not. We give you the tools to break through barriers and articulate your true value.",
    features: [
      "Mock interviews with instant feedback",
      "Salary negotiation guidance",
      "0-100 Readiness Scores to build confidence"
    ],
    icon: <Briefcase size={40} className="text-emerald-600" />,
    color: "emerald" // Growth Green
  },
  {
    emoji: "💼",
    title: "For The Builders",
    subtitle: "Career Pivoters",
    description: "Your past experience is an asset, not a liability. Learn how to translate your existing skills into the language of a new industry.",
    features: [
      "Resume re-formatting for new industries",
      "Transferable skills analysis",
      "Cover letters that tell your transition story"
    ],
    icon: <TrendingUp size={40} className="text-teal-400" />,
    color: "teal" // Stable Teal
  }
];

export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // VISUAL CHANGE: Darker background (Slate 950) with Green Selection
    <div className="bg-slate-950 min-h-screen text-white selection:bg-emerald-500/30">
      
      {/* HEADER NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
             <div className="text-2xl font-bold tracking-wide text-white" style={{fontFamily: 'Cinzel, serif'}}>
               LeadWise
             </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest font-medium">
            <a href="/#about" className="text-white/60 hover:text-emerald-400 transition-colors">ABOUT</a>
            <a href="/#programs" className="text-white/60 hover:text-emerald-400 transition-colors">PROGRAMS</a>
            <a 
              href="https://app.letsleadwise.org" 
              // VISUAL CHANGE: Button is now Outline/Green
              className="border border-white/20 hover:border-emerald-400 text-white px-6 py-2 rounded-full hover:bg-white/5 transition-all font-semibold"
            >
              LAUNCH APP
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white hover:text-emerald-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-white/10 absolute w-full left-0">
            <div className="px-6 py-6 space-y-4 flex flex-col items-center">
              <a href="/#about" className="text-white/80 hover:text-emerald-600" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
              <a href="/#programs" className="text-white/80 hover:text-emerald-600" onClick={() => setIsMobileMenuOpen(false)}>PROGRAMS</a>
              <a href="https://app.letsleadwise.org" className="bg-white/10 text-white px-8 py-3 rounded-full font-bold w-full text-center">
                LAUNCH APP
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ANIMATED BACKGROUND - Emerald and Peach blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-900/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-5xl mx-auto">
          {/* Tagline Pill - Now Emerald/White */}
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-8 gap-2 backdrop-blur-sm">
            <Sparkles size={20} className="text-emerald-400" />
            <span className="text-white/90 text-sm font-bold tracking-wider uppercase">Bridging the Equity Gap with AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{fontFamily: 'Oswald, serif'}}>
            <span className="text-white">
              The Future of Leadership
            </span>
            <br />
            {/* Gradient text now Emerald to Peach */}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-peach-600 bg-clip-text text-transparent">
              Is Human-Centric.
            </span>
          </h1>
          
          <p className="text-white/70 text-xl md:text-2xl leading-relaxed mb-6 max-w-3xl mx-auto font-light">
            Talent is everywhere, but opportunity is not. <span className="text-emerald-400 font-semibold">Coach Leo</span> is the 24/7 mentor dedicated to unlocking your potential.
          </p>
          
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
             We combine enterprise-grade AI with a nonprofit heart. Powered by Google Gemini, built for equity, and designed to help you tell your story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://app.letsleadwise.org/login.html#signup" 
              // Button is white with dark text, hovers to Emerald tint
              className="group relative px-10 py-5 rounded-full font-bold text-lg overflow-hidden bg-white text-slate-950 hover:bg-emerald-50 transition-all flex items-center justify-center gap-3"
            >
              Explore the Technology
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:partnerships@letsleadwise.org" 
              className="px-10 py-5 rounded-full font-bold text-lg text-white hover:text-emerald-400 transition-all"
            >
              Partner With Us
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto border-t border-white/5 pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/40 text-sm tracking-widest uppercase">Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/40 text-sm tracking-widest uppercase">Career Paths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0%</div>
              <div className="text-white/40 text-sm tracking-widest uppercase">Bias</div>
            </div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`mb-6 bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{fontFamily: 'Oswald", serif'}}>
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AUDIENCE SECTION */}
      <section className="relative py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Oswald, serif'}}>
              A Co-Pilot for <span className="bg-gradient-to-r from-emerald-600 to-peach-600 bg-clip-text text-transparent">Every Journey</span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              No matter where you are in your career, Coach Leo adapts to meet you there.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="group relative bg-slate-950 rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-${audience.color}-500/10 p-3 rounded-xl border border-${audience.color}-500/20`}>
                      {audience.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'Cinzel, serif'}}>
                    {audience.title}
                  </h3>
                  <p className={`text-${audience.color}-400 font-semibold mb-4 text-xs tracking-widest uppercase`}>
                    {audience.subtitle}
                  </p>
                  <p className="text-white/60 mb-8 leading-relaxed text-sm">
                    {audience.description}
                  </p>
                  
                  <ul className="space-y-4 pt-6 border-t border-white/5">
                    {audience.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Zap size={16} className={`text-${audience.color}-400 mt-1 flex-shrink-0`} />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUMAN-CENTRIC DIFFERENCE */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/5">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <Heart className="text-peach-400" size={24} />
                  <span className="text-white/50 font-semibold uppercase tracking-wide text-sm">The LeadWise Difference</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{fontFamily: 'Oswald, serif'}}>
                  AI That Listens. <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-peach-300 bg-clip-text text-transparent">Mentorship That Cares.</span>
                </h2>
                
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Most AI tools are just text on a screen. Coach Leo is a mentor you can hear and see. We engineered him to provide the psychological safety needed to fail, learn, and grow.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="bg-emerald-500/20 p-2 rounded-lg">
                       <div className="w-2 h-2 rounded-full bg-emerald-900"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Friendly Mode</h4>
                      <p className="text-white/50 text-xs">Warm, encouraging confidence building</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="bg-peach-400/20 p-2 rounded-lg">
                       <div className="w-2 h-2 rounded-full bg-peach-600"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Professional Mode</h4>
                      <p className="text-white/50 text-xs">Strategic, clear, and business-focused</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://app.letsleadwise.org" 
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-emerald-600 transition-colors"
                >
                  Experience the Interface
                  <ArrowRight size={20} />
                </a>
              </div>
              
             {/* VIDEO SECTION: Added 'key' prop to force React to reload the video player when the source changes */}
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl group">
                <video 
                  key="/images/leo.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/images/leo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Overlay for tint integration */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-orange-900/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ENTERPRISE SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-12 border border-white/10 text-center">
             <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <Shield className="text-emerald-600" size={24} />
                <span className="text-white/50 font-semibold uppercase tracking-wide text-sm">Enterprise Grade</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Cinzel, serif'}}>
                For Universities & <span className="text-emerald-600">Enterprises</span>
              </h2>
              
              <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto">
                Scale Impact. Measure Success. Deploy the most advanced AI coaching on a secure, enterprise-grade foundation.
              </p>
              
              <a 
                href="mailto:partnerships@letsleadwise.org" 
                className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl"
              >
                Request an Organizational Demo
                <ArrowRight size={20} />
              </a>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Oswald, serif'}}>
            Ready to Find <span className="bg-gradient-to-r from-emerald-400 to-blue-300 bg-clip-text text-transparent">Your Voice?</span>
          </h2>
          
          <p className="text-white/60 text-lg mb-12">
            LeadWise is building a future where every voice is heard and every potential is realized.
          </p>
          
          <a 
            href="https://app.letsleadwise.org/login.html#signup" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-900/20 transition-all hover:scale-105"
          >
            Launch Career App
            <Sparkles size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/30 text-sm">
          <p>© 2024 LeadWise. Powered by Google Gemini 2.5 Flash & Google Cloud.</p>
        </div>
      </footer>

    </div>
  );
}
