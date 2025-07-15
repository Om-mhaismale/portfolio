import { motion } from "framer-motion";
import omImg from "../assets/om1.jpg";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const iconClass =
  "bg-[#0d1117] p-3 rounded-full hover:bg-[#1f2937] transition";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-28 flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto px-6 mt-24 md:mt-32 text-white"
    >
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text block">
            Om Mhaismale
          </span>
        </h1>

        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
          {[
            ["Fullstack Developer", "purple"],
            ["Data Enthusiast", "blue"],
          ].map(([text, color]) => (
            <span
              key={text}
              className={`px-4 py-1 bg-${color}-800 text-sm rounded-full border border-${color}-400`}
            >
              {text}
            </span>
          ))}
        </div>

        <p className="mt-6 text-slate-300 text-lg">
          B.Tech student in AI & DS @ KJSIT. Passionate about building
          intelligent, practical systems and learning from real-world
          challenges.
        </p>
        <p className="mt-2 text-slate-400">
          From web dev to data, I use tech to unlock potential and create
          meaningful impact.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a href="https://github.com/Om-mhaismale" target="_blank" className={iconClass}>
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/om-mhaismale/" target="_blank" className={iconClass}>
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.youtube.com/@messmale" target="_blank" className={iconClass}>
            <FaYoutube size={20} />
          </a>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#"
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            View CV
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="flex-shrink-0 animate-glow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={omImg}
          alt="Om Mhaismale"
          loading="lazy"
          className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full border-4 border-purple-500 shadow-xl"
        />
      </motion.div>
    </section>
  );
}
