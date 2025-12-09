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

// Introduction: Nonprofit mission → Human-centric AI → Video
const ServicesIntro = () => (

// Feature array
const features = [
{
title: "Human-Centric AI Coach",
desc: "Interact with an AI that feels like a real mentor. Recognizable face, consistent voice, and adaptive tone create a personal connection while providing actionable career guidance.",
icon: ,
gradient: "from-navy to-navy/90",
},
{
title: "Voice Interview Simulator",
desc: "Practice with Coach Leo in real-time. Improve communication, clarity, and leadership presence while receiving empathetic, human-like feedback.",
icon: ,
gradient: "from-navy to-navy/90",
},
{
title: "AI Resume Architect",
desc: "Turn your experience into impact. Our ATS-aware resume tool rewrites your achievements with clarity and strength, helping your voice rise above systemic hiring barriers.",
icon: ,
gradient: "from-navy to-navy/90",
},
{
title: "Gamified Career Growth",
desc: "Leadership development should be engaging—not overwhelming. Earn XP, unlock badges, and build momentum with daily micro-challenges that make growth motivating and fun.",
icon: ,
gradient: "from-navy to-navy/90",
},
{
title: "Targeted Skill Development",
desc: "Access structured programs focusing on high-impact skills for leadership, career advancement, and overcoming systemic barriers.",
icon: ,
gradient: "from-navy to-navy/90",
},
{
title: "Leadership Insights & Analytics",
desc: "Track your progress with actionable insights, understanding where you excel and where to grow, ensuring each step aligns with your leadership journey.",
icon: ,
gradient: "from-navy to-navy/90",
},
{
title: "Equity & Policy Guidance",
desc: "Learn strategies to navigate systemic challenges and advocate effectively for yourself and others, making change personal and systemic.",
icon: ,
gradient: "from-navy to-navy/90",
},
];

export default function ServicesPage() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

return (



{features.map((feature, idx) => (
<div key={idx} className={feature-card bg-gradient-to-br ${feature.gradient} p-6 rounded-lg shadow-lg}>
{feature.icon}
{feature.title}
{feature.desc}

))}


);
}
