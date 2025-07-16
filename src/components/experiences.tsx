import React, { memo, lazy, Suspense } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BriefcaseIcon } from '@heroicons/react/24/solid'; // Can lazy-load for larger apps

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Creative Agency",
    date: "Jun 2021 - Dec 2022",
    iconName: "briefcase",
    iconBg: "#1E293B",
    points: [
      "Built interactive UI components with React and Tailwind CSS.",
      "Worked closely with designers to translate Figma designs into code.",
      "Optimized web applications for speed and scalability.",
      "Maintained project documentation and onboarding guides.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tech Solutions Inc.",
    date: "Jan 2023 - Present",
    iconName: "briefcase",
    iconBg: "#383E45",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// Icon Renderer
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'briefcase':
    default:
      return <BriefcaseIcon className="w-full h-full p-2 text-white" />;
  }
};

const Experiences = () => {
  return (
    <section id="experiences" className="py-16 relative z-10 scroll-mt-12 mx-auto px-4 mt-96">
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
      <VerticalTimeline layout="1-column-left">
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 0, 0, 0.7)', color: '#cccccc' }}
            contentArrowStyle={{ borderRight: '7px solid transparent' }}
            date={exp.date}
            iconStyle={{ background: exp.iconBg, color: '#fff' }}
            icon={renderIcon(exp.iconName)}
          >
            <h3 className="text-gray-100 text-xl font-bold">{exp.title}</h3>
            <h4 className="text-gray-200">{exp.company_name}</h4>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              {exp.points.map((point, i) => (
                <li key={i} className="text-gray-300 text-sm tracking-wider">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default memo(Experiences);
