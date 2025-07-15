import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
export default function Contact({
  heading = "Contact me",
  message = "Feel free to reach out to me for any questions and opportunities!",
  linkData = [],
  email,
  linkedIn,
  github,
  instagram,
  developerName = "Your Name",
}) {
  return (
    <footer className="bg-[#0f172a] text-white py-20" id="contact">
      <div className="w-full px-4 sm:px-6 xl:px-[5rem] 2xl:px-[10rem] mx-auto text-center">
        {/* Heading and message */}
        {heading && <h2 className="text-3xl font-bold mb-4">{heading}</h2>}
        {message && (
          <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8">
            {message}
          </p>
        )}

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-white mb-10">
          {linkData.map((link, i) => (
            <a key={i} href={`#${link.toLowerCase().replace(/\s+/g, "")}`} className="hover:underline">
              {link}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6 text-2xl">
          {linkedIn && (
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-purple-400 transition" />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`}>
              <FaEnvelope className="hover:text-cyan-400 transition" />
            </a>
          )}
        </div>

        {/* ✅ Dynamic Credits */}
        <p className="font-medium text-white mb-2">
          Designed & Developed by <span className="font-bold">{developerName}</span>
        </p>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {developerName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
