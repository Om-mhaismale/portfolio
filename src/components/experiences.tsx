import { memo } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type Experience = {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  date: string;
  points: readonly string[];
};

const experiences: readonly Experience[] = [
  {
    id: "hackathon-winner",
    title: "Hackathon Winner",
    company: "organised by Thakur College ",
    companyUrl: "https://www.linkedin.com/posts/om-mhaismale_hackathonwinner-datascience-machinelearning-activity-7296119896755601409-mw1Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaY2LEBBfhz43BTI5l0IKG0o5wFafnnAk0",
    date: "Dec 2024",
    points: [
      "Developed a financial analysis tool for HealthifyMe's Finothon 2024 using SMS data.",
      "Built a logistic regression model to classify transactions and effectively detect spam.",
      "Engineered features to automatically extract transaction details and visualize spending habits.",
      "Delivered a dual-function solution for personal expense tracking and SMS spam filtering."
    ],
  },
  {
    id: "ai-engineer",
    title: "Ai Engineer", 
    company: "AIExecutive",
    companyUrl: "https://www.linkedin.com/company/aiexecute/posts/?feedView=all",
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
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-gray-400 text-sm font-normal">
                {experience.company}
              </h4>
              {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 text-xs font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  View
                  <svg 
                    className="w-3 h-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </a>
              )}
            </div>
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
