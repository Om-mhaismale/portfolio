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
    id: "software-engineer",
    title: "Software Engineer", 
    company: "Tech Solutions Inc.",
    date: "Jan 2023 - Present",
    points: [
      "Develop web applications using React.js and modern technologies",
      "Collaborate with cross-functional teams for high-quality products",
      "Implement responsive design and cross-browser compatibility",
      "Participate in code reviews and provide constructive feedback"
    ],
  },
] as const;

const Experiences = memo(() => {
  return (
    <section id="experiences" className="w-full px-6 py-16 scroll-mt-12 mt-96">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Work Experience
      </h2>
      
      <VerticalTimeline layout="1-column">
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: 'rgb(31, 41, 55, 0.5)', 
              color: '#fff',
              border: '1px solid rgb(55, 65, 81, 0.5)',
              borderRadius: '0.5rem'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgb(31, 41, 55, 0.5)' }}
            date={experience.date}
            dateClassName="text-amber-200"
            iconStyle={{ 
              background: 'rgb(252, 211, 77)', 
              color: '#111827',
              border: '4px solid #111827'
            }}
            icon={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-900 rounded-full" />
              </div>
            }
          >
            <h3 className="text-lg font-semibold text-white mb-1">
              {experience.title}
            </h3>
            <h4 className="text-gray-300 text-sm mb-3">
              {experience.company}
            </h4>
            <ul className="space-y-1">
              {experience.points.map((point, idx) => (
                <li key={idx} className="text-gray-400 text-sm flex items-start">
                  <span className="text-amber-200 mr-2 mt-1.5 flex-shrink-0">•</span>
                  <span>{point}</span>
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
