import ProjectCard from './project';
import pjt1 from '../assets/pjt1.jpeg';

const Projects = () => {
  const projects = [
    {
      title: "Class Connect",
      image: pjt1,
      stack: ["JavaScript", "Next.js", "Supabase"],
      description:
        "Currently over 1200 active users as a web application for students of my college, providing centralized access to notes, resources, past-year questions, senior advice, and college updates. Developed on production.",
    },
    {
      title: "Timelith",
      image: pjt1,
      stack: ["TypeScript", "Java", "NextJS", "Tailwind", "Supabase"],
      description:
        "An automated scheduling system for educational institutions that simplifies timetable creation. Integration with existing systems, significantly reducing time spent on scheduling.",
    },
    {
      title: "AgriVision",
      image: pjt1,
      stack: ["HTML", "JavaScript", "Python"],
      description:
        "AI-powered solution aims to revolutionize agriculture by detecting crop diseases early and providing sustainable, eco-friendly interventions, leading to healthier crops and reduced chemical usage.",
    },
  ];

  return (
    <section id="projects" className="w-full flex flex-col items-center px-6 py-16 scroll-mt-12 mt-90">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
