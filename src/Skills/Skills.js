import React, { useState } from "react";

export default function Skills({ sectionTitle, skills }) {
  const [showPopup, setShowPopup] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);

  const handleGroupClick = (group) => {
    setActiveGroup(group);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setActiveGroup(null);
  };

 return (
  <section id="skills&tools" className="bg-slate-900 text-white py-20 px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">{sectionTitle}</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
      {skills.map((group, index) => (
        <div
          key={index}
          onClick={() => handleGroupClick(group)}
          className={`border ${group.borderColor} rounded-xl p-6 cursor-pointer hover:shadow-lg transition`}
        >
          {/* Fixed group title */}
          <h3 className="text-xl font-semibold mb-6">{group.title}</h3>

          {/* Scrollable language icons only */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center overflow-y-auto scrollbar-hide pr-2"
            style={{ maxHeight: "300px" }}
          >
            {group.items.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={skill.icon}
                  alt={skill.label}
                  className="w-14 h-14"
                />
                <p className="mt-2">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Popup Modal */}
    {showPopup && activeGroup && (
      <div
        className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        onClick={closePopup}
      >
        <div
          className="border border-indigo-500 rounded-xl p-6 w-[90%] max-w-xl relative shadow-2xl"
          style={{ background: "#0f172a" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-3 text-white text-2xl hover:text-red-400"
            onClick={closePopup}
          >
            ×
          </button>

          <h3 className="text-2xl font-bold mb-4 pr-6">
            {activeGroup.title}
          </h3>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto pr-2"
            style={{ maxHeight: "60vh" }}
          >
            {activeGroup.items.map((skill, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={skill.icon}
                  alt={skill.label}
                  className="w-14 h-14"
                />
                <p className="mt-2 text-white text-sm text-center">
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </section>
);
}
