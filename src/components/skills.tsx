import {
  SiPython, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiMysql, SiMongodb,
  SiFastapi, SiFlask, SiN8N, SiPandas, SiNumpy, SiHuggingface, SiScikitlearn,
  SiTensorflow, SiCodeblocks, SiAuth0
} from "react-icons/si";
import { GiHistogram } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiFastapi,
  SiFlask,
  SiN8N,
  SiPandas,
  SiNumpy,
  SiHuggingface,
  SiScikitlearn,
  SiTensorflow,
  SiCodeblocks,
  SiAuth0,
  GiHistogram,
  FaRobot
};

const skills = [
  { name: "Python", icon: "SiPython", color: "text-yellow-400" },
  { name: "JavaScript", icon: "SiJavascript", color: "text-yellow-300" },
  { name: "React", icon: "SiReact", color: "text-sky-400" },
  { name: "Tailwind", icon: "SiTailwindcss", color: "text-cyan-400" },
  { name: "Bootstrap", icon: "SiBootstrap", color: "text-violet-500" },
  { name: "MySQL", icon: "SiMysql", color: "text-blue-500" },
  { name: "MongoDB", icon: "SiMongodb", color: "text-green-500" },
  { name: "FastAPI", icon: "SiFastapi", color: "text-green-400" },
  { name: "Flask", icon: "SiFlask", color: "text-gray-300" },
  { name: "n8n", icon: "SiN8N", color: "text-orange-500" },
  { name: "Pandas", icon: "SiPandas", color: "text-pink-400" },
  { name: "NumPy", icon: "SiNumpy", color: "text-blue-400" },
  { name: "Hugging Face", icon: "SiHuggingface", color: "text-yellow-400" },
  { name: "YOLOv8", icon: "FaRobot", color: "text-green-300" },
  { name: "Scikit Learn", icon: "SiScikitlearn", color: "text-orange-400" },
  { name: "TensorFlow", icon: "SiTensorflow", color: "text-orange-500" },
  { name: "NLP", icon: "FaRobot", color: "text-purple-400" },
  { name: "Blockchain", icon: "SiCodeblocks", color: "text-amber-900" },
  { name: "Auth0", icon: "SiAuth0", color: "text-amber-50" },
  { name: "Seaborn", icon: "GiHistogram", color: "text-blue-300" },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative z-10 scroll-mt-28 max-w-4xl mx-auto px-4 mt-96"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-15 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map(({ name, icon, color }) => {
          const IconComponent = iconMap[icon];
          if (!IconComponent) return null;

          return (
            <div key={name} className="flex flex-col items-center space-y-2">
              <motion.span
                className="relative flex items-center justify-center"
                whileHover={{
                  scale: 1,
                  y: -10,
                  transition: { type: "spring", stiffness: 500 },
                }}
              >
                <span
                  className={`absolute w-16 h-16 rounded-full blur-xl opacity-70 ${color}`}
                  style={{
                    background: "radial-gradient(circle, #38bdf8 0%, transparent 90%)",
                  }}
                />
                <span className={`text-5xl z-10 ${color}`}>
                  <IconComponent />
                </span>
              </motion.span>
              <span className="text-white text-base font-medium">{name}</span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
