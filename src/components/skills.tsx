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
    <section
      id="skills"
      className="relative z-10 scroll-mt-32 max-w-4xl mx-auto px-4 mt-96"
    >
      <h2 className="text-3xl font-bold text-white mb-15 text-center">
        Skills
      </h2>
      
      <motion.div 
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-20 justify-items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.15, delay: 0.05 }}
        viewport={{ once: true }}
      >
        {skills.map(({ name, icon, color }, index) => {
          const IconComponent = iconMap[icon];
          if (!IconComponent) return null;

          return (
            <motion.div 
              key={name} 
              className="flex flex-col items-center space-y-2"
              initial={{ 
                opacity: 0, 
                y: 30,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.15,
                delay: 0.05 + (index * 0.02),
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              viewport={{ once: true }}
            >
              <motion.span
                className="relative flex items-center justify-center"
                whileHover={{
                  scale: 1.2,
                  y: -10,
                  transition: { 
                    type: "spring", 
                    stiffness: 500,
                    damping: 15,
                    duration: 0.1
                  },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className={`absolute w-16 h-16 rounded-full blur-xl opacity-70 ${color}`}
                  style={{
                    background: "radial-gradient(circle, #E3A008 0%, transparent 60%)",
                  }}
                  whileHover={{
                    scale: 1.3,
                    opacity: 0.9,
                    transition: { duration: 0.1 }
                  }}
                />
                <span className={`text-5xl z-10 ${color}`}>
                  <IconComponent />
                </span>
              </motion.span>
              
              <motion.span 
                className="text-white text-base font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.1,
                  delay: 0.1 + (index * 0.02)
                }}
                viewport={{ once: true }}
              >
                {name}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
