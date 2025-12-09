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

const features = [
  {
    title: "Voice Interview Simulator",
    desc: "Practice with Coach Leo in real-time. Receive instant feedback on your tone, pace, and answer quality with a 0-100 Readiness Score.",
    icon: <Mic className="text-white" size={32} />,
    gradient: "from-purple-600 via-pink-500 to-orange-500"
  },
  {
    title: "AI Resume Architect",
    desc: "ATS-compliant parsing that rewrites your bullets for maximum impact. Our AI scans against job descriptions to ensure you pass automated filters.",
    icon: <FileText className="text-white" size={32} />,
    gradient: "from-blue-600 via-cyan-500 to-teal-500"
  },
  {
    title: "Adaptive Coaching Modes",
    desc: "Switch Leo between Friendly, Professional, and Strict modes to match your learning style. Because sometimes you need a cheerleader, sometimes a drill sergeant.",
    icon: <MessageSquare className="text-white" size={32} />,
    gradient: "from-green-600 via-emerald-500 to-lime-500"
  },
  {
    title: "Career Path Explorer",
    desc: "Discover careers that match your personality. Get guidance on college prep, major selection, and career transitions with personalized roadmaps.",
    icon: <Target className="text-white" size={32} />,
    gradient: "from-orange-600 via-red-500 to-pink-500"
  },
  {
    title: "Enterprise Analytics",
    desc: "Real-time dashboards to track student or employee progress. Built for universities and nonprofits who need to measure impact at scale.",
    icon: <Users className="text-white" size={32} />,
    gradient: "from-indigo-600 via-purple-500 to-pink-500"
  },
  {
    title: "Bias Detection & Security",
    desc: "Enterprise-grade privacy on Google Cloud with Zero-Trust security. Automated tools help remove unconscious bias from your profile.",
    icon: <Shield className="text-white" size={32} />,
    gradient: "from-slate-700 via-gray-600 to-zinc-500"
  }
];

const audiences = [
  {
    emoji: "🎓",
    title: "For The Dreamers",
    subtitle: "High School Students",
    description: "Stop guessing. Start mapping. Don't just dream about a career—build a roadmap to get there.",
    features: [
      "Explore careers that match your personality",
      "College prep and major selection guidance",
      "Ask questions you're too afraid to ask a teacher"
    ],
    icon: <GraduationCap size={40} className="text-purple-600" />,
    color: "purple"
  },
  {
    emoji: "🚀",
    title: "For The Achievers",
    subtitle: "College Grads & First Jobbers",
    description: "Conquer the interview. Land the role. Turn anxiety into confidence through real-time coaching.",
    features: [
      "Mock live interviews with instant feedback",
      "Salary negotiation coaching",
      "Get a 0-100 Readiness Score on your performance"
    ],
    icon: <Briefcase size={40} className="text-blue-600" />,
    color: "blue"
  },
  {
    emoji: "💼",
    title: "For The Builders",
    subtitle: "Career Changers",
    description: "Rebuild. Reinvent. Rise. Ensure your experience translates to your new path.",
    features: [
      "ATS-proof resumes that pass automated filters",
      "Cover letters aligned with your goals",
      "Keyword optimization for your new industry"
    ],
    icon: <TrendingUp size={40} className="text-green-600" />,
    color: "green"
  }
];

export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 min-h-screen text-white">
      
      {/* HEADER NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
             <div className="text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{fontFamily: 'Cinzel, serif'}}>
               LeadWise
             </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest font-medium">
            <a href="/#about" className="text-white/80 hover:text-purple-400 transition-colors">ABOUT</a>
            <a href="/#programs" className="text-white/80 hover:text-purple-400 transition-colors">PROGRAMS</a>
            <a 
              href="https://app.letsleadwise.org" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold"
            >
              LAUNCH APP
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white hover:text-purple-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 absolute w-full left-0">
            <div className="px-6 py-6 space-y-4 flex flex-col items-center">
              <a href="/#about" className="text-white/80 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
              <a href="/#programs" className="text-white/80 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>PROGRAMS</a>
              <a href="https://app.letsleadwise.org" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold w-full text-center">
                LAUNCH APP
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ANIMATED BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-full px-6 py-3 mb-8 gap-2 backdrop-blur-sm">
            <Sparkles size={20} className="text-purple-400 animate-pulse" />
            <span className="text-white text-sm font-bold tracking-wider uppercase">The World's First Human-Centric AI Coach</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{fontFamily: 'Cinzel, serif'}}>
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Your Potential is Limitless.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Coach Leo is Always Ready.
            </span>
          </h1>
          
          <p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-6 max-w-3xl mx-auto font-light">
            Education gives you a voice. <span className="text-purple-400 font-semibold">Coach Leo</span> gives you the confidence to use it.
          </p>
          
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            We didn't just build an app—we built a companion for your journey. The first AI coach with a face, a voice, and a heart. Powered by Google Gemini 2.5 Flash. Available 24/7 because inspiration doesn't keep office hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://app.letsleadwise.org/login.html#signup" 
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3 hover:scale-105"
            >
              Meet Coach Leo 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://app.letsleadwise.org/login.html" 
              className="border-2 border-purple-500/50 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Login to App
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-white/60 text-sm">AI Coaching</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">100+</div>
              <div className="text-white/60 text-sm">Career Paths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-white/60 text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`mb-6 bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white" style={{fontFamily: 'Cinzel, serif'}}>
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AUDIENCE SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Cinzel, serif'}}>
              One Coach, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Many Journeys</span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              No matter where you are in your career journey, Coach Leo adapts to meet you there.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                {/* Colored glow */}
                <div className={`absolute -inset-1 bg-gradient-to-br from-${audience.color}-600 to-${audience.color}-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-${audience.color}-500/10 p-3 rounded-2xl border border-${audience.color}-500/30`}>
                      {audience.icon}
                    </div>
                    <span className="text-5xl">{audience.emoji}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'Cinzel, serif'}}>
                    {audience.title}
                  </h3>
                  <p className={`text-${audience.color}-400 font-semibold mb-4 text-sm tracking-wide uppercase`}>
                    {audience.subtitle}
                  </p>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {audience.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {audience.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Zap size={18} className={`text-${audience.color}-400 mt-1 flex-shrink-0`} />
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
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <Heart className="text-pink-400" size={24} />
                  <span className="text-purple-400 font-semibold uppercase tracking-wide text-sm">Human-Centric AI</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{fontFamily: 'Cinzel, serif'}}>
                  AI Has Never Felt <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">This Human</span>
                </h2>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Most AI tools are just text on a screen. Coach Leo is a mentor you can hear and see. We engineered him to adapt to you, not the other way around.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-2xl border border-green-500/30">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">🟢 Friendly Mode</h4>
                      <p className="text-white/70">Warm, encouraging confidence building</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-yellow-500/10 rounded-2xl border border-yellow-500/30">
                    <div className="bg-yellow-500 p-2 rounded-lg">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">🟡 Professional Mode</h4>
                      <p className="text-white/70">Strategic, clear, and business-focused</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-2xl border border-red-500/30">
                    <div className="bg-red-500 p-2 rounded-lg">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">🔴 Strict Mode</h4>
                      <p className="text-white/70">High accountability to challenge you to be your best</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://app.letsleadwise.org" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
                >
                  Try Coach Leo Free
                  <ArrowRight size={20} />
                </a>
              </div>
              
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-orange-900/50 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe size={80} className="text-white/30 mx-auto mb-4 animate-pulse" />
                    <span className="text-white/50 text-lg" style={{fontFamily: 'Cinzel, serif'}}>
                      Coach Leo Interface Preview
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <Shield className="text-purple-400" size={24} />
                <span className="text-purple-400 font-semibold uppercase tracking-wide text-sm">Enterprise Grade</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Cinzel, serif'}}>
                For Universities & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Enterprises</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Scale Impact. Measure Success. Deploy the most advanced AI coaching on a secure, enterprise-grade foundation.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-2xl inline-block mb-4">
                    <Users size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-3 text-lg">Real-Time Dashboards</h4>
                  <p className="text-white/70">Track student/employee progress and engagement with live analytics</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-2xl inline-block mb-4">
                    <Shield size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-3 text-lg">Enterprise Security</h4>
                  <p className="text-white/70">Zero-Trust security architecture on Google Cloud Platform</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-4 rounded-2xl inline-block mb-4">
                    <Target size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-3 text-lg">Bias Reduction</h4>
                  <p className="text-white/70">AI-powered unconscious bias detection and mitigation</p>
                </div>
              </div>

              <a 
                href="mailto:partnerships@letsleadwise.org" 
                className="inline-flex items-center gap-2 bg-white text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
              >
                Request an Organizational Demo
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Cinzel, serif'}}>
            Ready to Find <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Your Voice?</span>
          </h2>
          
          <p className="text-white/80 text-xl md:text-2xl mb-4 leading-relaxed">
            LeadWise is building a future where every voice is heard and every potential is realized.
          </p>
          
          <p className="text-purple-400 text-lg md:text-xl mb-12 font-semibold">
            Work Smarter. Advance Faster. Lead Wisely.
          </p>
          
          <a 
            href="https://app.letsleadwise.org/login.html#signup" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
          >
            Launch Career App
            <Sparkles size={24} />
          </a>
          
          <p className="mt-6 text-sm text-white/50">No credit card required for Starter tier.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/50 text-sm">
          <p>© 2024 LeadWise. Powered by Google Gemini 2.5 Flash & Google Cloud.</p>
        </div>
      </footer>

    </div>
  );
}
