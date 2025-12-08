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
  ShieldCheck 
} from "lucide-react"; 

export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Voice Interview Simulator",
      desc: "Practice with 'Coach Leo' in real-time. Receive instant feedback on your tone, pace, and answer quality.",
      icon: <Mic className="text-white" size={32} />,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "AI Resume Architect",
      desc: "Not just a builder. We use ATS-compliant parsing to rewrite your bullets for maximum impact.",
      icon: <FileText className="text-white" size={32} />,
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      title: "Gamified Career Growth",
      desc: "Turn job hunting into a game. Earn XP, unlock badges, and complete Daily Bingo challenges.",
      icon: <Gamepad2 className="text-white" size={32} />,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Tactical Job Tracker",
      desc: "A Kanban-style board to track every application. Leo gives you 'Intel' on every company you save.",
      icon: <Target className="text-white" size={32} />,
      gradient: "from-emerald-400 to-green-600"
    },
    {
      title: "Adaptive Personality Engine",
      desc: "Switch Leo between Friendly, Strict, and Professional modes to match your learning style.",
      icon: <BrainCircuit className="text-white" size={32} />,
      gradient: "from-amber-400 to-orange-600"
    },
    {
      title: "Bias Detection & Security",
      desc: "Enterprise-grade privacy ensures your data is safe, while our AI removes unconscious bias from your profile.",
      icon: <ShieldCheck className="text-white" size={32} />,
      gradient: "from-slate-400 to-slate-600"
    }
  ];

  return (
    <div className="gradient-bg min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="https://www.letsleadwise.org" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-xl font-bold shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              L
            </div>
            <div>
              <div className="text-xl font-bold font-orbitron tracking-wide group-hover:text-cyan-400 transition-colors">LeadWise</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-orbitron text-sm tracking-widest">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">FEATURES</a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">PRICING</a>
            <a href="https://app.letsleadwise.org" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-2 rounded-lg transition-all shadow-lg hover:shadow-cyan-500/25">
              LAUNCH APP
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu (Controlled by React State) */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass border-t border-white/10 absolute w-full top-20 left-0 bg-[#0f0f1a]">
            <div className="px-6 py-4 space-y-4 font-orbitron">
              <a href="#features" className="block text-gray-300 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>FEATURES</a>
              <a href="#pricing" className="block text-gray-300 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>PRICING</a>
              <a href="https://app.letsleadwise.org" className="block text-center bg-cyan-600/20 text-cyan-400 border border-cyan-500/50 px-6 py-3 rounded-xl hover:bg-cyan-600/40">
                LAUNCH APP
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto" id="features">
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-orbitron text-sm tracking-[0.2em] mb-4">CAPABILITIES</h2>
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Full Stack</span> Career Engine
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            LeadWise isn't just a resume builder. It's a comprehensive AI ecosystem designed to gamify your growth and accelerate your hiring process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glass rounded-2xl p-8 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-orbitron tracking-wide">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
