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
      content: "LeadWise transformed my career trajectory completely...",
      initials: "MR",
      rating: 5,
      image: "",
    },
    {
      id: "2",
      name: "Dr. Aisha Patel",
      title: "Research Director",
      company: "BioMed Solutions",
      content: "The advocacy training I received through LeadWise...",
      initials: "AP",
      rating: 5,
      image: "",
    },
    // ...add other reviews here
  ];