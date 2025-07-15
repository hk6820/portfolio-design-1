export default function Experience({ sectionTitle, experiences }) {
  return (
    <section id="experience" className="bg-slate-900 text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{sectionTitle}</h2>

      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="bg-slate-800 p-8 mb-10 rounded-2xl border border-cyan-500 shadow-xl"
        >
          {/* Company and Logo */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-14 h-14 object-contain"
            />
            <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
          </div>

          {/* Duration */}
          <p className="text-slate-300 font-semibold mb-6">{exp.duration}</p>
          {/* Tech Stack */}
{/* Tech Stack - One Line */}
{exp.techStack && exp.techStack.length > 0 && (
  <div className="mt-6 mb-3 text-sm sm:text-base text-slate-300">
    <span className="text-cyan-400 font-semibold mr-1">Tech Stack:</span>
    <span className="text-slate-200">
      {exp.techStack.join(", ")}
    </span>
  </div>
)}

          {/* Responsibilities */}
          <ul className="space-y-3 text-slate-300 text-[15px] leading-relaxed mb-6">
            {exp.responsibilities.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-cyan-400 mt-1 text-lg">●</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
