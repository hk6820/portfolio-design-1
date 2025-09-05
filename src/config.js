// Portfolio Configuration File
// Update this file with your personal information to customize your portfolio

export const portfolioConfig = {
  // Personal Information
  personalInfo: {
    name: "John Doe",
    subtitle: "Frontend Developer",
    description: `Frontend Developer with 6+ years of experience building dynamic web applications using React, Redux,
JavaScript, and TypeScript.
Skilled in migrating monolithic application to micro-frontend architecture and developing scalable,
reusable UI components.
Strong understanding of React internals and performance optimization techniques.
Experienced in Agile/Scrum, with a focus on timely delivery and cross-team collaboration.`,
    resumeLink: "/files/yourResume.pdf",
    imageSrc: "/assets/icons/colorphoto.png",
    email: "abc@gmail.com",
    linkedIn: "https://www.linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com/yourhandle"
  },

  // Navigation Configuration
  navigation: {
    title: "John's Portfolio",
    showMobileMenu: true, // Enable/disable mobile menu
    links: [
      { 
        label: "About me", 
        href: "#aboutme",
        showOnMobile: true,
        order: 1
      },
      { 
        label: "Skills & Tools", 
        href: "#skills&tools",
        showOnMobile: true,
        order: 2
      },
      { 
        label: "Experience", 
        href: "#experience",
        showOnMobile: true,
        order: 3
      },
      { 
        label: "Projects", 
        href: "#projects",
        showOnMobile: true,
        order: 4
      },
      { 
        label: "Education", 
        href: "#education",
        showOnMobile: true,
        order: 5
      },
      { 
        label: "Contact", 
        href: "#contact",
        showOnMobile: true,
        order: 6
      }
    ]
  },

  // Projects Data
  projects: [
    {
      title: "Country Search Info",
      description: "A responsive web app to search and display detailed information about countries, including flags, region, and more. Features debounced input for optimized performance and seamless UX.",
      tech: ["React JS", "JavaScript", "Debounce", "HTML", "CSS"],
      image: "/assets/icons/project.png",
      live: "your-live-link-here.com",
      github: "https://github.com"
    },
    {
      title: "To-Do List Web",
      description: "A fully functional to-do list application built with React. Users can add, delete, and mark tasks as completed. Demonstrates clean component structure and interactive state management.",
      tech: ["React JS", "JavaScript", "HTML", "CSS"],
      image: "/assets/icons/todolist.png",
      live: "your-live-link-here.com",
      github: "https://github.com"
    },
    {
      title: "Image Search App",
      description: "A modern image search application powered by the Unsplash API. Includes search functionality, responsive grid layout, and image modals. Built to showcase clean UI and API integration.",
      tech: ["React JS", "JavaScript", "HTML", "CSS"],
      image: "/assets/icons/photo-react.png",
      live: "your-live-link-here.com",
      github: "https://github.com"
    }
  ],

  // Skills Data
  skills: [
    {
      title: "Programming Languages",
      borderColor: "border-indigo-500",
      items: [
        { label: "React JS", icon: "/assets/icons/science.png" },
        { label: "Next JS", icon: "/assets/icons/icons8-nextjs-64.png" },
        { label: "Redux", icon: "/assets/icons/redux-logo-svgrepo-com.svg" },
        { label: "JavaScript", icon: "/assets/icons/java-script.png" },
        { label: "Typescript", icon: "/assets/icons/icons8-typescript-24.png" },
        { label: "HTML5", icon: "/assets/icons/html.png" },
        { label: "CSS3", icon: "/assets/icons/css-3.png" },
        { label: "Axios", icon: "/assets/icons/axios-icon.svg" },
        { label: "Tailwind CSS", icon: "/assets/icons/tailwindicon.png" },
        { label: "Material UI", icon: "/assets/icons/icons8-material-ui-48.png" },
        { label: "Semantic UI", icon: "/assets/icons/icons8-chakra-ui-48.png" }
      ]
    },
    {
      title: "Tools & Technologies",
      borderColor: "border-purple-500",
      items: [
        { label: "GitHub", icon: "/assets/icons/social.png" },
        { label: "GitLab", icon: "/assets/icons/gitlab.png" },
        { label: "Git", icon: "/assets/icons/git.png" },
        { label: "Figma", icon: "/assets/icons/figma.png" },
        { label: "VS Code", icon: "/assets/icons/logo.png" },
        { label: "Jira", icon: "/assets/icons/jira.png" }
      ]
    }
  ],

  // Experience Data
  experience: [
    {
      company: "TechNova Solutions",
      logo: "/assets/icons/ge.png",
      duration: "June 2024 – Present",
      techStack: ["React", "Redux", "TypeScript", "Material UI"],
      responsibilities: [
        "Designed and implemented scalable component libraries for enterprise-grade dashboards.",
        "Refactored legacy UI codebase into modular components with strict type safety using TypeScript.",
        "Collaborated with the UX team to ensure WCAG 2.1 compliance and enhance accessibility.",
        "Integrated Redux Toolkit to streamline global state and improve developer experience.",
        "Reduced initial page load time by 35% through code splitting and lazy loading strategies.",
        "Maintained high test coverage using Jest and React Testing Library."
      ]
    },
    {
      company: "FinEdge Bank",
      logo: "/assets/icons/rbc.png",
      duration: "Nov 2022 – July 2024",
      techStack: ["React", "Redux", "TypeScript", "Material UI", "HTML", "CSS"],
      responsibilities: [
        "Built secure, responsive frontends for customer banking portals handling millions of users.",
        "Implemented reusable form components with validation using React Hook Form and Zod.",
        "Worked closely with API teams to ensure seamless data flow using REST and GraphQL.",
        "Optimized rendering performance using memoization and virtualization techniques.",
        "Led sprint planning and retrospectives for the front-end chapter.",
        "Created and maintained component documentation using Storybook."
      ]
    },
    {
      company: "SafePay Systems",
      logo: "/assets/icons/db.png",
      duration: "July 2021 – Nov 2022",
      techStack: ["React", "Redux", "JavaScript", "Styled Components", "HTML", "CSS"],
      responsibilities: [
        "Developed fraud detection dashboards with real-time alerts and filtering capabilities.",
        "Used Styled Components to maintain a consistent theming system across the platform.",
        "Built complex interactive forms and modals to handle dispute submissions.",
        "Worked with QA to define test cases and fix UI regressions during release cycles.",
        "Contributed to continuous integration pipelines using GitHub Actions.",
        "Improved mobile responsiveness by implementing adaptive design patterns."
      ]
    },
    {
      company: "Wipro",
      logo: "/assets/icons/wipro.png",
      duration: "Feb 2019 – July 2021",
      techStack: ["React", "JavaScript", "HTML", "CSS"],
      responsibilities: [
        "Built internal dashboards to support data entry, analysis, and reporting.",
        "Translated Figma wireframes into functional components with clean semantic HTML.",
        "Created responsive layouts using Flexbox and Grid for cross-device compatibility.",
        "Resolved bugs reported from production with a quick turnaround.",
        "Participated in Agile ceremonies and collaborated on Jira-based workflows."
      ]
    }
  ],

  // Education Data
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) - Information Technology",
      institution: "Uttar Pradesh Technical University (UPTU)",
      duration: "2014 – 2018",
      note: "Graduated with first division. Focused on programming and web technologies."
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Mukarram Inter College",
      duration: "2013 – 2014",
      note: "Completed MPC (Maths, Physics, Chemistry) stream."
    }
  ],

  // Contact Section Configuration
  contact: {
    heading: "Contact me",
    message: "Feel free to reach out to me for any questions and opportunities!",
    // Navigation links for footer - will be set after navigation is defined
    linkData: []
  }
};

// Auto-sync contact navigation with main navigation
portfolioConfig.contact.linkData = portfolioConfig.navigation.links.map(link => link.label);

// Export individual sections for easy access
export const {
  personalInfo,
  navigation,
  projects,
  skills,
  experience,
  education,
  contact
} = portfolioConfig;
