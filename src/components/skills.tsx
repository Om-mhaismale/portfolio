import {
  SiPython, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiMysql, SiMongodb,
  SiFastapi, SiFlask, SiN8N, SiPandas, SiNumpy, SiHuggingface, SiScikitlearn,
  SiTensorflow, SiCodeblocks, SiAuth0, SiGit, SiNodedotjs, SiExpress, SiNextdotjs,
  SiPostgresql
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
  FaRobot,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiPostgresql
};

const skills = [
  { name: "JavaScript", icon: "SiJavascript", color: "text-yellow-300", category: "Frontend" },
  { name: "React", icon: "SiReact", color: "text-sky-400", category: "Frontend" },
  { name: "Next.js", icon: "SiNextdotjs", color: "text-white", category: "Frontend" },
  { name: "Tailwind", icon: "SiTailwindcss", color: "text-cyan-400", category: "Frontend" },
  { name: "Bootstrap", icon: "SiBootstrap", color: "text-violet-500", category: "Frontend" },

  { name: "Node.js", icon: "SiNodedotjs", color: "text-green-500", category: "Backend" },
  { name: "Express.js", icon: "SiExpress", color: "text-white", category: "Backend" },
  { name: "Python", icon: "SiPython", color: "text-yellow-400", category: "Backend" },
  { name: "FastAPI", icon: "SiFastapi", color: "text-green-400", category: "Backend" },
  { name: "Flask", icon: "SiFlask", color: "text-white", category: "Backend" },
  { name: "n8n", icon: "SiN8N", color: "text-purple-500", category: "Backend" },

  { name: "MySQL", icon: "SiMysql", color: "text-blue-500", category: "Database" },
  { name: "MongoDB", icon: "SiMongodb", color: "text-green-500", category: "Database" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "text-blue-400", category: "Database" },

  { name: "Pandas", icon: "SiPandas", color: "text-indigo-400", category: "Data & AI" },
  { name: "NumPy", icon: "SiNumpy", color: "text-blue-400", category: "Data & AI" },
  { name: "Scikit Learn", icon: "SiScikitlearn", color: "text-orange-400", category: "Data & AI" },
  { name: "TensorFlow", icon: "SiTensorflow", color: "text-orange-500", category: "Data & AI" },
  { name: "Hugging Face", icon: "SiHuggingface", color: "text-yellow-400", category: "Data & AI" },
  { name: "YOLOv8", icon: "FaRobot", color: "text-red-500", category: "Data & AI" },
  { name: "Seaborn", icon: "GiHistogram", color: "text-blue-300", category: "Data & AI" },

  { name: "Git", icon: "SiGit", color: "text-red-600", category: "Tools" },
  { name: "Auth0", icon: "SiAuth0", color: "text-orange-500", category: "Tools" },
  { name: "Blockchain", icon: "SiCodeblocks", color: "text-amber-500", category: "Tools" },
];

const categoryOrder = ["Frontend", "Backend", "Database", "Data & AI", "Tools"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-8 max-w-6xl mx-auto px-4 py-16 sm:py-24 mt-96">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.2 }}
        className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-gradient-to-b from-amber-400 bg-clip-text text-transparent pb-4"
      >
        My Tech Stack
      </motion.h2>

      <div className="space-y-16">
        {categoryOrder.map((category) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start"
          >
            {/* Category Title Branch */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h3 className="text-2xl font-bold text-white sticky top-24">
                {category}
                <span className="block h-1 w-20 bg-amber-400 mt-2 rounded-full"></span>
              </h3>
            </motion.div>

            {/* Skills Grid */}
            <motion.ul
              variants={containerVariants}
              className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {skills
                .filter((skill) => skill.category === category)
                .map(({ name, icon, color }) => {
                  const IconComponent = iconMap[icon];
                  if (!IconComponent) return null;

                  return (
                    <motion.li
                      key={name}
                      variants={itemVariants}
                      className="group flex items-center gap-3 rounded-lg border border-white/10 bg-gray-800/50 p-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/10 hover:bg-amber-950/60 hover:-translate-y-1"
                    >
                      <div className={`text-2xl ${color}`}>
                        <IconComponent />
                      </div>
                      <span className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                        {name}
                      </span>
                    </motion.li>
                  );
                })}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}