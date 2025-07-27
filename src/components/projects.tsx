import { memo } from 'react';
import ProjectCard from './project';
import pjt1 from '../assets/pjt1.webp';
import pjt2 from '../assets/pjt2.webp';
import pjt3 from '../assets/pjt3.webp';
import pjt4 from '../assets/pjt4.webp';
import pjt5 from '../assets/pjt5.webp';
import pjt6 from '../assets/pjt6.webp';

// Move projects data outside component and add GitHub links
const PROJECTS_DATA = [
  {
    id: "ai-football-analyzer",
    title: "AI Football Analyzer",
    image: pjt1,
    githubUrl: "https://github.com/Om-mhaismale/Ai_football_analyzer",
    stack: ["YOLOv8 v11", "Streamlit", "Python", "OpenCV", "GPT-4"],
    description: "This AI-powered tool analyzes football visuals from images and videos, offering real-time player detection, pose estimation, and tactical heatmaps. Its standout feature is a GPT-powered engine that generates live, automated commentary for video clips.",
  },
  {
    id: "ai-sales-agent",
    title: "AI Sales Agent",
    image: pjt2,
    githubUrl: "https://github.com/Om-mhaismale/Ai_sales_agent",
    stack: ["React.js", "FastAPI", "Python", "TensorFlow", "Supabase"],
    description: "AI-powered sales automation platform with CRM, lead tracking, automated customer interactions, and WhatsApp/email communication.",
  },
  {
    id: "sms-analysis-hackathon",
    title: "SMS Analysis",
    image: pjt3,
    githubUrl: "https://github.com/Om-mhaismale/Sci-Py-Knights",
    stack: ["Google Colab", "SpaCy", "Python"],
    description: "This project, created for Finothon 2024, analyzes real-world SMS data to uncover financial insights. It cleans and sorts messages to identify credit and debit transactions, loans, and spending habits. The project also visualizes these financial patterns and includes a feature to detect and filter out spam messages.",
  },
  {
    id: "college-inventory-system",
    title: "College Inventory Management",
    image: pjt4,
    githubUrl: "https://github.com/Om-mhaismale/IMS",
    stack: ["React.js", "Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    description: "This is an official departmental project that manages the inventory for the entire college. Access to the system is granted to the Principal, Head of Department (HOD), Lab Assistant, Lab In-charge, and Store Manager.",
  },
  {
    id: "mychef",
    title: "MyChef Recipe Platform",
    image: pjt5,
    githubUrl: "https://github.com/Om-mhaismale/MyChelf-Recipe-maker-",
    stack: ["Flask", "MySQL", "HTML5", "Jinja2"],
    description: "It is a web app where you can easily create and save your own unique recipes. It helps you discover new dishes based on ingredients and your personal preferences. You can also create a profile to manage and share your favorite culinary creations with others.",
  },
  {
    id: "water-monitoring-system",
    title: "Smart Water Monitor",
    image: pjt6,
    githubUrl: "https://github.com/Om-mhaismale/Smart-Water-Monitoring-System",
    stack: ["C++", "Arduino IDE", "ESP32", "Blynk"],
    description: "This project is a smart system that monitors water quality in real-time. It measures both the temperature and pH levels of the water. The data is then sent to a mobile app, allowing you to check the water's condition from anywhere.",
  },
] as const;

const Projects = memo(() => {
  return (
    <section 
      id="projects" 
      className="w-full flex flex-col items-center px-6 py-16 scroll-mt-12 mt-96"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-gradient-to-b from-amber-400 bg-clip-text text-transparent pb-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
        {PROJECTS_DATA.map(({ id, title, description, image, stack, githubUrl }) => (
          <ProjectCard 
            key={id}
            title={title}
            description={description}
            image={image}
            stack={stack}
            githubUrl={githubUrl}
          />
        ))}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
