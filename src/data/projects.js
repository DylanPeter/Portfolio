export const projects = [
  {
    slug: "musicboxd",
    title: "MusicBoxd",
    category: "web",
    year: "2025",
    role: "Full-stack (MEAN)",
    tools: ["Angular", "Node/Express", "MongoDB", "Deezer API"],
    blurb: "MEAN stack album reviews with profiles and saved albums.",
    overview:
      "MusicBoxd is a music review platform where users can browse albums, write reviews, and manage a profile. The goal was a clean UI with practical full-stack functionality.",
    contributions: [
      "Built core CRUD flows for reviews and user profile data.",
      "Designed UI layout and component structure with consistent spacing and hierarchy.",
      "Integrated external album data and persisted selected items to MongoDB.",
    ],
    visuals: [
      // add image paths later, e.g. "/images/musicboxd-1.png"
    ],
    links: {
      github: "https://github.com/",
      live: "",
      behance: "",
    },
  },
  {
    slug: "rate-my-course",
    title: "Rate My Course",
    category: "web",
    year: "2025",
    role: "Backend + API docs",
    tools: ["Node/Express", "MongoDB", "Auth0", "Swagger/Markdown"],
    blurb: "Course reviews API with filtering, reporting, and authentication.",
    overview:
      "Rate My Course is an API project focused on structured data, reporting endpoints, and professional documentation. Authentication is handled with Auth0.",
    contributions: [
      "Implemented CRUD endpoints with validation and error handling.",
      "Built reporting and filtering features (date ranges, category summaries).",
      "Worked through deployment and auth configuration for production.",
    ],
    visuals: [],
    links: {
      github: "https://github.com/",
      live: "",
      behance: "",
    },
  },
  {
    slug: "conference-booklet",
    title: "Conference Talk Booklet",
    category: "design",
    year: "2025",
    role: "Layout + typography",
    tools: ["InDesign", "Typography", "Grid System"],
    blurb: "12-page booklet with hierarchy, pacing, and a 3–4 column grid.",
    overview:
      "A typographic booklet designed for readability and pacing. Emphasis was placed on hierarchy, spacing rhythm, and a consistent column grid.",
    contributions: [
      "Established a consistent typographic system and paragraph styles.",
      "Designed with a repeatable grid for strong alignment and rhythm.",
      "Balanced color usage while maintaining readability.",
    ],
    visuals: [],
    links: {
      github: "https://github.com/DylanPeter",
      live: "",
      behance: "https://www.behance.net/dylanpetersen3",
    },
  },
  {
    slug: "swipe-left",
    title: "Swipe Left on Abuse",
    category: "design",
    year: "2025",
    role: "Concept + poster system",
    tools: ["Illustrator", "Photoshop", "Campaign Design"],
    blurb: "Poster campaign exploring metaphor, contrast, and messaging.",
    overview:
      "A conceptual poster campaign addressing teen dating violence. The goal was clear messaging with strong visual hierarchy and campaign consistency.",
    contributions: [
      "Explored multiple creative strategies (metaphor, isolation, puns).",
      "Iterated based on critique feedback to improve clarity and impact.",
      "Built a cohesive look across multiple posters and extensions.",
    ],
    visuals: [],
    links: {
      github: "",
      live: "",
      behance: "https://www.behance.net/",
    },
  },
  {
    slug: "gig-finder",
    title: "Concert & Gig Finder",
    category: "web",
    year: "2025",
    role: "Full-stack",
    tools: ["Node/Express", "EJS", "PostgreSQL", "Render"],
    blurb: "Gig listings with RSVPs, requests, and admin management.",
    overview:
      "A full-stack gig platform for musicians, venues, and fans. Focused on clear flows for listing creation, browsing, and RSVP interactions.",
    contributions: [
      "Designed database-friendly flows for posting and browsing listings.",
      "Built views with EJS and implemented PostgreSQL queries.",
      "Planned role-based features (musician, venue, admin).",
    ],
    visuals: [],
    links: {
      github: "https://github.com/",
      live: "",
      behance: "",
    },
  },
  {
    slug: "gatsby-covers",
    title: "Great Gatsby Covers",
    category: "design",
    year: "2025",
    role: "Concept + typography",
    tools: ["Photoshop", "Illustrator", "Cover Design"],
    blurb: "Typography-based and image-based cover explorations.",
    overview:
      "A cover design exploration focused on typographic hierarchy and visual metaphor. The goal was two distinct solutions: type-only and image-based.",
    contributions: [
      "Developed a typographic concept with strong hierarchy and contrast.",
      "Created an image-based solution that reinforces tone and theme.",
      "Refined final layout choices based on critique and iteration.",
    ],
    visuals: [],
    links: {
      github: "",
      live: "",
      behance: "https://www.behance.net/",
    },
  },
];

export const featuredProjects = projects.slice(0, 6);

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}