import { motion } from "framer-motion";

export default function Home({
  name,
  subtitle,
  description,
  resumeLink,
  imageSrc,
}) {
  return (
    <section id="aboutme" className="text-white py-0 sm:py-10">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hello, I'm {name},
          </h1>

          {/* Subtitle with motion animation */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mt-2 bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent flex flex-wrap"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {subtitle.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <p className="mt-6 text-slate-300 leading-relaxed">{description}</p>

          {/* Download Button with scale animation */}
          <a
            href={resumeLink}
            download
            className="mt-8 inline-block px-8 py-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-sky-400 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Download CV
          </a>
        </div>

        {/* Profile image with hover animation */}
       <div className="w-full lg:w-1/2 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-br from-purple-500 to-sky-400 p-1 rounded-full shadow-lg"
      >
        <motion.img
          src={imageSrc}
          alt="Profile"
          className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[800px] lg:h-[800px] object-cover rounded-full border-[6px] border-slate-900"
          animate={{
            y: [0, -5, 0], // floating effect
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
      </div>
    </section>
  );
}
