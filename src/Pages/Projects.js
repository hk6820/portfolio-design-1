export default function Projects({ sectionTitle, projects }) {
  return (
    <section id="projects" className="bg-[#0f172a] text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{sectionTitle}</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-slate-700 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 h-40 object-cover w-full"
              />
            )}

            {/* Title & Description */}
            <h3 className="text-lg font-bold mb-2 text-left">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4 text-left">{project.description}</p>

            {/* Tech Stack */}
            <div className="mb-4 text-left">
              <span className="text-xs text-slate-500">Tech Used:</span>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, i) => (
                  <li
                    key={i}
                    className="bg-slate-700 text-xs px-2 py-1 rounded-full text-white"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-auto flex flex-wrap justify-between gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
              >
                Live preview
              </a>
              <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white text-white px-4 py-2 rounded-full text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
>
  Check on GitHub
</a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
