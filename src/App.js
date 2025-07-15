import Navbar from "././Navbar/Navbar";
import Home from "./Home/Home";
import Skills from "././Skills/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import SectionWrapper from "./SectionWrapper";

export default function App() {
  // Project section data: used in <Projects /> to display cards
  const projectsData = [
    {
      title: "Country Search Info",
      description:
        "A responsive web app to search and display detailed information about countries, including flags, region, and more. Features debounced input for optimized performance and seamless UX.",
      tech: ["React JS", "JavaScript", "Debounce", "HTML", "CSS"],
      image: "/assets/icons/project.png",
      live: "your-live-link-here.com",
      github: "https://github.com",
    },
    {
      title: "To-Do List Web",
      description:
        "A fully functional to-do list application built with React. Users can add, delete, and mark tasks as completed. Demonstrates clean component structure and interactive state management.",
      tech: ["React JS", "JavaScript", "HTML", "CSS"],
      image: "/assets/icons/todolist.png",
      live: "your-live-link-here.com",
      github: "https://github.com",
    },
    {
      title: "Image Search App",
      description:
        "A modern image search application powered by the Unsplash API. Includes search functionality, responsive grid layout, and image modals. Built to showcase clean UI and API integration.",
      tech: ["React JS", "JavaScript", "HTML", "CSS"],
      image: "/assets/icons/photo-react.png",
      live: "your-live-link-here.com",
      github: "https://github.com",
    },
  ];

  // ✅ Skills section data: passed to <Skills />, split into categories
  const skillsData = [
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
        {
          label: "Tailwind CSS",
          icon: "/assets/icons/tailwindicon.png",
        },
        {
          label: "Material UI",
          icon: "/assets/icons/icons8-material-ui-48.png",
        },
        {
          label: "Semantic UI",
          icon: "/assets/icons/icons8-chakra-ui-48.png",
        },
      ],
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
        { label: "Jira", icon: "/assets/icons/jira.png" },
      ],
    },
  ];

  // ✅ Experience data: used in <Experience /> to render job cards
  const experienceData = [
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
        "Maintained high test coverage using Jest and React Testing Library.",
      ],
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
        "Created and maintained component documentation using Storybook.",
      ],
    },
    {
      company: "SafePay Systems",
      logo: "/assets/icons/db.png",
      duration: "July 2021 – Nov 2022",
      techStack: [
        "React",
        "Redux",
        "JavaScript",
        "Styled Components",
        "HTML",
        "CSS",
      ],
      responsibilities: [
        "Developed fraud detection dashboards with real-time alerts and filtering capabilities.",
        "Used Styled Components to maintain a consistent theming system across the platform.",
        "Built complex interactive forms and modals to handle dispute submissions.",
        "Worked with QA to define test cases and fix UI regressions during release cycles.",
        "Contributed to continuous integration pipelines using GitHub Actions.",
        "Improved mobile responsiveness by implementing adaptive design patterns.",
      ],
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
        "Participated in Agile ceremonies and collaborated on Jira-based workflows.",
      ],
    },
  ];

  // ✅ Education details: passed to <Education /> to show education cards

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) - Information Technology",
      institution: "Uttar Pradesh Technical University (UPTU)",
      duration: "2014 – 2018",
      note: "Graduated with first division. Focused on programming and web technologies.",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Mukarram Inter College",
      duration: "2013 – 2014",
      note: "Completed MPC (Maths, Physics, Chemistry) stream.",
    },
  ];

  // ✅ Home page (hero section) data: passed to <Home /> component
  const hoemeSectionData = {
    name: "John Doe", // Displayed as main heading
    subtitle: "Frontend Developer", // Shown below name
    description: `Frontend Developer with 6+ years of experience building dynamic web applications using React, Redux,
JavaScript, and TypeScript.
Skilled in migrating monolithic application to micro-frontend architecture and developing scalable,
reusable UI components.
Strong understanding of React internals and performance optimization techniques.
Experienced in Agile/Scrum, with a focus on timely delivery and cross-team collaboration.`, // Summary paragraph
    resumeLink: "/files/yourResume.pdf", // Link for download button
    imageSrc: "/assets/icons/colorphoto.png", // Hero image/avatar
  };

  return (
    <>
      {/* Navbar with dynamic brand title and links */}
      <SectionWrapper>
        <Navbar
          title="John's Portfolio"
          links={[
            { label: "About me", href: "#aboutme" },
            { label: "Skills & Tools", href: "#skills&tools" },
            { label: "Experience", href: "#experience" },
            { label: "Projects", href: "#projects" },
            { label: "Education", href: "#education" },
            { label: "Contact", href: "#contact" },
          ]}
        />
      </SectionWrapper>

      {/* Main Page Content */}
      <div className="pt-24" style={{ background: "#0f172a" }}>
        {/* Hero Section (Home) */}
        <SectionWrapper>
          <Home
            name={hoemeSectionData?.name}
            subtitle={hoemeSectionData?.subtitle}
            description={hoemeSectionData?.description}
            resumeLink={hoemeSectionData?.resumeLink}
            imageSrc={hoemeSectionData?.imageSrc}
          />
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper>
          <Skills sectionTitle="Skills & Tools" skills={skillsData} />
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper>
          <Experience
            sectionTitle="My Experience"
            experiences={experienceData}
          />
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper>
          <Projects sectionTitle="Projects" projects={projectsData} />
        </SectionWrapper>

        {/* Education Section */}
        <SectionWrapper>
          <Education sectionTitle="Education" education={educationData} />
        </SectionWrapper>

        {/* Contact/Footer Section */}
        <Contact
          email="abc@gmail.com" // Email link
          linkedIn="https://www.linkedin.com" // Optional: show if provided
          github="https://github.com" // Optional: show if provided
          instagram="https://instagram.com/yourhandle" // Optional: show if provided
          developerName="John Doe" // Used for footer credit
          linkData={["About me", "Skills & Tools", "Experience", "Projects", "Education"," Contact"]}
        />
      </div>
    </>
  );
}
