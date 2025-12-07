"use client"; // Required if using useEffect

import { useEffect } from "react";
import lucide from "lucide";

export default function ServicesPage() {
  useEffect(() => {
    lucide.createIcons();

    // Mobile menu toggle
    const toggleMobileMenu = () => {
      const menu = document.getElementById("mobile-menu");
      menu?.classList.toggle("hidden");
    };

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href")!);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // attach to window for button
    (window as any).toggleMobileMenu = toggleMobileMenu;
  }, []);

  return (
    <div className="gradient-bg min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="https://www.letsleadwise.org" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-2xl font-bold">
              L
            </div>
            <div>
              <div className="text-xl font-bold font-orbitron tracking-wide">LeadWise</div>
              <div className="text-xs text-cyan-400 font-orbitron">FOUNDATION</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#programs" className="text-gray-300 hover:text-cyan-400 transition-colors">Programs</a>
            <a href="#impact" className="text-gray-300 hover:text-cyan-400 transition-colors">Impact</a>
            <a href="https://app.letsleadwise.org" className="btn-primary px-6 py-3 rounded-xl font-orbitron text-sm tracking-wider">
              LAUNCH APP
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => (window as any).toggleMobileMenu()}>
            <i data-lucide="menu" size="28"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden glass border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <a href="#about" className="block text-gray-300 hover:text-cyan-400">About</a>
            <a href="#programs" className="block text-gray-300 hover:text-cyan-400">Programs</a>
            <a href="#impact" className="block text-gray-300 hover:text-cyan-400">Impact</a>
            <a href="https://app.letsleadwise.org" className="block btn-primary px-6 py-3 rounded-xl text-center font-orbitron text-sm tracking-wider">
              LAUNCH APP
            </a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-gradient mb-8">
          Services We Offer
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Service Card */}
          <div className="glass rounded-2xl p-8 feature-card border border-white/10 hover:border-cyan-400/50">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-6">
              <i data-lucide="file-text" size="32" className="text-white"></i>
            </div>
            <h3 className="text-2xl font-bold mb-3 font-orbitron">Resume Builder</h3>
            <p className="text-gray-400 mb-4">
              Create professional, ATS-optimized resumes with AI-powered content enhancement.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 feature-card border border-white/10 hover:border-purple-400/50">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6">
              <i data-lucide="mail" size="32" className="text-white"></i>
            </div>
            <h3 className="text-2xl font-bold mb-3 font-orbitron">Cover Letters</h3>
            <p className="text-gray-400 mb-4">
              Generate AI-powered personalized cover letters in seconds.
            </p>
          </div>

          {/* Add more cards here */}
        </div>
      </section>
    </div>
  );
}
