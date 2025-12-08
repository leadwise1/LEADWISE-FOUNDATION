"use client";

import { useState } from "react";
import { 
  Menu, 
  X, 
  FileText, 
  Mic, 
  Gamepad2, 
  Target, 
  BrainCircuit, 
  ShieldCheck,
  ArrowRight
} from "lucide-react"; 
import Link from "next/link";

// You can keep the features array inside the component or move it outside
const features = [
  {
    title: "Voice Interview Simulator",
    desc: "Practice with 'Coach Leo' in real-time. Receive instant feedback on your tone, pace, and answer quality.",
    icon: <Mic className="text-peach" size={32} />,
    gradient: "from-navy to-navy/90"
  },
  {
    title: "AI Resume Architect",
    desc: "Not just a builder. We use ATS-compliant parsing to rewrite your bullets for maximum impact.",
    icon: <FileText className="text-peach" size={32} />,
    gradient: "from-navy to-navy/90"
  },
  {
    title: "Gamified Career Growth",
    desc: "Turn job hunting into a game. Earn XP, unlock badges, and complete Daily Bingo challenges.",
    icon: <Gamepad2 className="text-peach" size={32} />,
    gradient: "from-navy to-navy/90"
  },
  {
    title: "Tactical Job Tracker",
    desc: "A Kanban-style board to track every application. Leo gives you 'Intel' on every company you save.",
    icon: <Target className="text-peach" size={32} />,
    gradient: "from-navy to-navy/90"
  },
  {
    title: "Adaptive Personality Engine",
    desc: "Switch Leo between Friendly, Strict, and Professional modes to match your learning style.",
    icon: <BrainCircuit className="text-peach" size={32} />,
    gradient: "from-navy to-navy/90"
  },
  {
    title: "Bias Detection & Security",
    desc: "Enterprise-grade privacy ensures your data is safe, while our AI removes unconscious bias from your profile.",
    icon: <ShieldCheck className="text-peach" size={32} />,
    gradient: "from-navy to-navy/90"
  }
];

export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-cream min-h-screen text-navy font-oswald">
      
      {/* HEADER NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy text-cream shadow-lg">
        <div className="container-custom h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
             <div className="font-cinzel text-2xl font-bold tracking-wide">LeadWise</div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest font-medium">
            <Link href="/#about" className="hover:text-peach transition-colors">ABOUT</Link>
            <Link href="/#programs" className="hover:text-peach transition-colors">PROGRAMS</Link>
            <a 
              href="https://app.letsleadwise.org" 
              className="bg-peach text-navy px-6 py-2 rounded-full hover:bg-cream transition-all font-semibold"
            >
              LAUNCH APP
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-cream hover:text-peach transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy border-t border-white/10 absolute w-full left-0">
            <div className="px-6 py-6 space-y-4 flex flex-col items-center">
              <Link href="/#about" className="text-cream hover:text-peach" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
              <Link href="/#programs" className="text-cream hover:text-peach" onClick={() => setIsMobileMenuOpen(false)}>PROGRAMS</Link>
              <a href="https://app.letsleadwise.org" className="bg-peach text-navy px-8 py-3 rounded-full font-bold w-full text-center">
                LAUNCH APP
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 container-custom">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-peach/20 border border-peach rounded-full px-4 py-1 mb-6">
            <span className="text-navy text-sm font-bold tracking-wider uppercase">AI Career Accelerator</span>
          </div>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-navy leading-tight">
            Level Up Your Leadership Journey with <span className="text-peach bg-navy px-2">Coach Leo Wise</span>
          </h1>
          <p className="text-navy/80 text-lg md:text-xl leading-relaxed font-light mb-8 max-w-3xl mx-auto">
            Bridging the gap between ambition and opportunity. Our AI-powered career platform gives you the tools, insights, and confidence to land your dream role—accessible to everyone, everywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.letsleadwise.org/login.html#signup" 
              className="bg-navy text-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-navy/90 hover:-translate-y-1 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight size={20} />
            </a>
            <a 
              href="https://app.letsleadwise.org/login.html" 
              className="border-2 border-navy text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-navy hover:text-cream transition-all"
            >
              Login to App
            </a>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 text-cream shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/5 relative overflow-hidden`}
            >
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="mb-6 bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 font-cinzel">{feature.title}</h3>
                <p className="text-cream/80 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-navy text-cream py-20">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-cinzel text-4xl font-bold mb-6">Powered by Purpose, Driven by Technology</h2>
            <p className="text-lg font-light text-cream/90 mb-6 leading-relaxed">
              We leverage Google Gemini 2.5 and Google Cloud technology to ensure that the guidance you receive is cutting-edge, responsive, and secure.
            </p>
            <p className="text-lg font-light text-cream/90 mb-8 leading-relaxed">
              But unlike standard AI tools, Coach Leo is trained with the LeadWise philosophy: <strong>Empathy, Equity, and Empowerment.</strong> We built this to democratize access to career coaching that was once reserved for the elite.
            </p>
            <a 
              href="https://app.letsleadwise.org" 
              className="inline-block bg-peach text-navy px-8 py-3 rounded-full font-bold hover:bg-cream transition-colors"
            >
              Meet Coach Leo
            </a>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-800">
             <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <span className="text-gray-500 font-cinzel">App Screenshot Placeholder</span>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 bg-peach/30 text-center">
         <div className="container-custom max-w-3xl mx-auto">
            <h2 className="font-cinzel text-4xl font-bold text-navy mb-6">Ready to Redefine Your Future?</h2>
            <p className="text-navy/80 text-xl mb-10">
              Your potential is limitless. Now, your toolkit is too. Join thousands of professionals using LeadWise.
            </p>
            <a 
              href="https://app.letsleadwise.org/login.html#signup" 
              className="bg-navy text-cream px-10 py-5 rounded-full font-bold text-xl hover:bg-navy/90 shadow-xl hover:shadow-2xl transition-all"
            >
              Launch Career App
            </a>
            <p className="mt-4 text-sm text-navy/60">No credit card required for Starter tier.</p>
         </div>
      </section>

    </div>
  );
}
