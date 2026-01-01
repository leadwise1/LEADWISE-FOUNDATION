import Header from '../components/Header';
import Hero from '../components/Hero';
import SparkSection from '../components/SparkSection';
import DonationSection from '../components/DonationSection'; // Client Component
import Programs from '../components/Programs'; // add 'use client' if hooks used
import ImpactStats from '../components/ImpactStats';
import Reviews from '../components/Reviews';
import CallToAction from '../components/CallToAction'; // add 'use client' if hooks used
import Footer from '../components/Footer';

export const metadata = {
  title: "Career Services & AI Coaching Tools | LeadWise",
  description:
    "Explore LeadWise’s AI coaching services including Confidence Lab, Narrative Architect, Adaptive Mentorship, and more — empowering your career growth and professional journey.",
}

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <SparkSection />
      <DonationSection />
      <Programs />
      <ImpactStats />
      <Reviews />
      <CallToAction />
      <Footer />
    </main>
  );
}
