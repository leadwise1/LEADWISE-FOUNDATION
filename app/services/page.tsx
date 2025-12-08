"use client";
import { useState } from "react";
import { Menu, X, FileText, Mic, Gamepad2, Target, BrainCircuit, ShieldCheck } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    }
  ];

  return (
    <main>
      <Header />
      <section className="grid gap-6 p-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <div 
            key={s.title} 
            className={`p-6 rounded-xl bg-gradient-to-r ${s.gradient} text-white`}
          >
            {s.icon}
            <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm">{s.desc}</p>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
