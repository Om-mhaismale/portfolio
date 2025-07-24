import { motion } from "framer-motion";
import omImg from "../assets/om2.webp";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const iconClass =
  "bg-[#0d1117] p-3 rounded-full hover:bg-[#1f2937] transition";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-10 scroll-mt-28 flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto mt-24 md:mt-40 text-white"
    >
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left max-w-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-amber-500 via-pink-700 to-amber-100 text-transparent bg-clip-text block">
            Om Mhaismale
          </span>
        </h1>

        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
          {[
            ["Fullstack Developer", "purple"],
            ["AI Enthusiast", "blue"],
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
          I am a software developer specializing in web development and AI engineering, currently pursuing a Btech degree in Artificial Intelligence and Data Science @KJSIT, My technical skills include Python, FastApi, React.js, and various data science libraries like Pandas, Numpy, Scikit-learn, and TensorFlow.
        </p>
        <p className="mt-2 text-slate-400">
          I am a problem-solver, having solved over 100 problems on LeetCode, and I am proud to have won a hackathon organized by Healthifyme.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4 ">
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
            href="https://drive.google.com/file/d/1XTIBDpNQ4JVrbwzz_H24lo-4_OhueCwl/view?usp=sharing" target="_blank"
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-200 text-amber-950 rounded-lg font-medium hover:opacity-90 transition"
          >
            View CV
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-amber-200 text-amber-200 rounded-lg font-medium hover:bg-amber-400 hover:text-amber-950 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="flex-shrink-0 animate-glow relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 via-yellow-100 to-amber-400 rounded-full blur-sm opacity-75 animate-pulse"></div>
          <img
            src={omImg}
            alt="Om Mhaismale"
            loading="lazy"
            className="relative w-80 h-80 md:w-100 md:h-100 object-cover rounded-full shadow-2xl"
          />
        </div>
      </motion.div>  
    </section>
  );
}