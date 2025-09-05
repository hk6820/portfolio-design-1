import Navbar from "././Navbar/Navbar";
import Home from "./Home/Home";
import Skills from "././Skills/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import SectionWrapper from "./SectionWrapper";
import { 
  personalInfo, 
  navigation, 
  projects, 
  skills, 
  experience, 
  education, 
  contact 
} from "./config";

export default function App() {

  return (
    <>
      {/* Navbar with dynamic brand title and links */}
      <SectionWrapper>
        <Navbar
          title={navigation.title}
          links={navigation.links}
          showMobileMenu={navigation.showMobileMenu}
        />
      </SectionWrapper>

      {/* Main Page Content */}
      <div className="pt-24" style={{ background: "#0f172a" }}>
        {/* Hero Section (Home) */}
        <SectionWrapper>
          <Home
            name={personalInfo.name}
            subtitle={personalInfo.subtitle}
            description={personalInfo.description}
            resumeLink={personalInfo.resumeLink}
            imageSrc={personalInfo.imageSrc}
          />
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper>
          <Skills sectionTitle="Skills & Tools" skills={skills} />
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper>
          <Experience
            sectionTitle="My Experience"
            experiences={experience}
          />
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper>
          <Projects sectionTitle="Projects" projects={projects} />
        </SectionWrapper>

        {/* Education Section */}
        <SectionWrapper>
          <Education sectionTitle="Education" education={education} />
        </SectionWrapper>

        {/* Contact/Footer Section */}
        <Contact
          email={personalInfo.email}
          linkedIn={personalInfo.linkedIn}
          github={personalInfo.github}
          instagram={personalInfo.instagram}
          developerName={personalInfo.name}
          linkData={contact.linkData}
          heading={contact.heading}
          message={contact.message}
        />
      </div>
    </>
  );
}
