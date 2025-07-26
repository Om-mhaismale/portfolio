import { memo, useCallback } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: readonly string[];
  githubUrl: string;
}

const ProjectCard = memo(({ title, description, image, stack, githubUrl }: ProjectCardProps) => {
  const handleTitleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  }, [githubUrl]);

  return (
    <div className="bg-gray-800/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full min-w-0">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
        loading="lazy"
      />
      <div className="p-6">
        <h3 
          className="text-xl font-semibold text-white mb-3 cursor-pointer hover:text-amber-200 transition-colors duration-200"
          onClick={handleTitleClick}
          title="Click to view on GitHub"
        >
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span 
              key={`${tech}-${index}`}
              className="px-4 py-3 bg-amber-100/35 text-amber-50 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
