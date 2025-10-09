// reviewsData.ts
export interface Review {
    id: string;
    name: string;
    title: string;
    company: string;
    content: string;
    initials: string;
    rating: number;
    image?: string;
  }
  
  export const reviews: Review[] = [
    {
      id: "1",
      name: "Maria Rodriguez",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc",
      content: "LeadWise transformed my career trajectory completely. The leadership skills I gained have been invaluable.",
      initials: "MR",
      rating: 5,
      image: "",
    },
    {
      id: "2",
      name: "Aisha Rahman",
      title: "Project Manager",
      company: "Global Solutions",
      content: "Through LeadWise's career training, I gained skills that opened doors I never imagined. Equality truly feels achievable now.",
      initials: "AR",
      rating: 5,
      image: "",
    },
    {
      id: "3",
      name: "Michael Johnson",
      title: "Software Engineer",
      company: "TechBridge",
      content: "The mentorship program helped me navigate systemic barriers and assert myself in meetings — LeadWise empowers everyone, not just women.",
      initials: "MJ",
      rating: 4,
      image: "",
    },
    {
      id: "4",
      name: "Tom Sanders",
      title: "Data Analyst",
      company: "Innovate Labs",
      content: "I learned that knowledge isn't just power for me — it's a tool to uplift others. LeadWise showed me how equality starts with education.",
      initials: "TS",
      rating: 5,
      image: "",
    },
    {
      id: "5",
      name: "Sara Khan",
      title: "Operations Manager",
      company: "NextGen Solutions",
      content: "LeadWise's programs gave me confidence to speak up and take charge in a world where bureaucracy often silences people.",
      initials: "SK",
      rating: 5,
      image: "",
    }
  ];