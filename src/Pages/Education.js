import React from "react";

export default function Education({ sectionTitle, education }) {
  return (
    <section id="education" className="bg-slate-900 text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{sectionTitle}</h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-cyan-500 rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-white mb-1">
              🎓 {edu.degree}
            </h3>
            <p className="text-purple-400 font-medium">{edu.institution}</p>
            <p className="text-sm text-slate-400 mb-3">{edu.duration}</p>
            <p className="text-slate-300">{edu.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
