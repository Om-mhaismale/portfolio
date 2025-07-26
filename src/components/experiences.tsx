import { memo } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type Experience = {
  id: string;
  title: string;
  company: string;
  date: string;
  points: readonly string[];
};

const experiences: readonly Experience[] = [
  {
    id: "ai-engineer",
    title: "Ai Engineer", 
    company: "AIExecutive",
    date: "Jun 2025 - Present",
    points: [
      "Spearheaded the AI Football Analyzer project for advanced sports analytics.",
      "Collaborated with cross-functional teams to design innovative AI solutions.",
      "Utilized a diverse range of AI technology stacks for robust application development.",
      "Applied advanced AI techniques to solve complex, data-driven challenges."
    ],
  },
] as const;

const Experiences = memo(() => {
  return (
    <section id="experiences" className="w-full px-6 py-16 scroll-mt-12 mt-96">
      <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-gradient-to-b from-amber-400 bg-clip-text text-transparent pb-4">
        Work Experience
      </h2>
      
      <VerticalTimeline lineColor="#374151" layout="1-column">
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: 'rgba(17, 24, 39, 0.8)', 
              color: '#fff',
              border: '1px solid rgba(55, 65, 81, 0.8)',
              borderRadius: '0.5rem',
              boxShadow: 'none',
              padding: '1.5rem 2rem'
            }}
            contentArrowStyle={{ borderRight: '10px solid rgba(55, 65, 81, 0.8)' }}
            date={experience.date}
            dateClassName="!font-normal !text-gray-400"
            iconStyle={{ 
              background: '#111827', 
              color: '#f59e0b',
              boxShadow: '0 0 5px 7px #f59e0b',
              width: '20px',
              height: '20px',
              marginLeft: '10px',
              marginTop: '10px'
            }}
            icon={<div />}
          >
            <h3 className="text-lg font-semibold text-amber-400 mb-1">
              {experience.title}
            </h3>
            <h4 className="text-gray-400 text-sm mb-4 font-normal">
              {experience.company}
            </h4>
            <ul className="space-y-2">
              {experience.points.map((point, idx) => (
                <li key={idx} className="text-gray-300 text-sm tracking-wide">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
});

Experiences.displayName = 'Experiences';

export default Experiences;
