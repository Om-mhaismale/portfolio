// import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BriefcaseIcon } from '@heroicons/react/24/solid'; // Example icon

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Creative Agency",
    date: "Jun 2021 - Dec 2022",
    icon: <BriefcaseIcon className="w-full h-full p-2 text-white" />,
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
    icon: <BriefcaseIcon className="w-full h-full p-2 text-white" />,
    iconBg: "#383E45",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // Add more experiences here
];

const Experiences = () => {
  return (
    <div id="experiences" className="py-16 relative z-10 scroll-mt-12 mx-auto px-4 mt-96"> {/* Removed bg-gray-100 */}
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
      <VerticalTimeline layout="1-column-left">
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 0, 0, 0.7)', color: '#cccccc' }}
 // Set background to transparent
            contentArrowStyle={{ borderRight: '7px solid transparent' }} // Make arrow transparent
            date={experience.date}
            iconStyle={{ background: experience.iconBg, color: '#fff' }}
            icon={experience.icon}
          >
            <h3 className="text-gray-100 vertical-timeline-element-title text-xl font-bold">{experience.title}</h3>
            <h4 className="text-gray-200 vertical-timeline-element-subtitle">{experience.company_name}</h4>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, i) => (
                <li key={`experience-point-${i}`} className="text-gray-300 text-sm tracking-wider">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experiences;