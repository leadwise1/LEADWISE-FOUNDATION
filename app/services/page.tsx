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
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// --------------------------------------------------
// INTRO SECTION
// --------------------------------------------------
const ServicesIntro = () => {
  return (
    <section className="py-16 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-navy mb-6">
        Our Leadership & Career Services
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Empowering individuals with human-centered AI that recognizes your
        identity, your voice, and your potential.  
        Coach Leo adapts to your communication style, emotional state, and
        learning pace — making leadership growth accessible to everyone.
      </p>

      {/* <video src="/images/leo.mp4" className="mx-auto mt-8 rounded-xl" controls /> */}
    </section>
  );
};

// --------------------------------------------------
// FEATURES ARRAY (FIXED & VALID)
// --------------------------------------------------
const features = [
  {
    title: "Human-Centric AI Coach",
    desc: "Interact with an AI that feels like a real mentor. Recognizable face, consistent voice, and adaptive tone create a personal connection while providing actionable career guidance.",
    icon: BrainCircuit,
    gradient: "from-navy to-navy/90",
  },
  {
    title: "Voice Interview Simulator",
    desc: "Practice with Coach Leo in real-time. Improve communication, clarity, and leadership presence while receiving human-like, empathetic feedback.",
    icon: Mic,
    gradient: "from-navy to-navy/90",
  },
  {
    title: "AI Resume Architect",
    desc: "Transform your experience into a powerful, ATS-optimized resume that highlights your strengths and removes hidden hiring barriers.",
    icon: FileText,
    gradient: "from-navy to-navy/90",
  },
  {
    title: "Gamified Career Growth",
    desc: "Earn XP, unlock badges, and stay motivated with micro-challenges that make career development fun and rewarding.",
    icon: Gamepad2,
    gradient: "from-navy to-navy/90",
  },
  {
    title: "Targeted Skill Development",
    desc: "Structured, research-backed programs designed to elevate essential leadership and workforce skills.",
    icon: Target,
    gradient: "from-navy to-navy/90",
  },
  {
    title: "Leadership Insights & Analytics",
    desc: "Track your emotional patterns, communication behavior, and growth progress with actionable insights.",
    icon: ShieldCheck,
    gradient: "from-navy to-navy/90",
  },
  {
    title: "Equity & Policy Guidance",
    desc: "Learn how to navigate systemic challenges and advocate effectively for yourself and your community.",
    icon: ArrowRight,
    gradient: "from-navy to-navy/90",
  },
];

// --------------------------------------------------
// MAIN SERVICES PAGE
// --------------------------------------------------
export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <ServicesIntro />

      {/* FEATURES GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="feature-card bg-gradient-to-br from-navy to-navy/90 text-white p-6 rounded-xl shadow-lg flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-white/90 leading-relaxed">{feature.desc}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
