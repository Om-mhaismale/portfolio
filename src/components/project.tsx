type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    stack: string[];
};

const ProjectCard = ({ title, description, image, stack }: ProjectCardProps) => {
    return (
        <div className="bg-[#1c1c2e] border border-gray-700 rounded-xl w-full max-w-sm shadow-md">
            {/* Project Image */}
            <div className="w-full h-56 relative rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-left rounded-md"
                />
            </div>


            {/* Title */}
            <h2 className="text-xl font-bold text-white mt-4 pl-2">{title}</h2>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-3 pl-2">
                {stack.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-gray-700 text-white text-sm px-3 py-1 rounded-md"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Description */}
            <p className="text-gray-300 mt-4 text-sm leading-relaxed ps-3 pb-3">
                {description}
            </p>
        </div>
    );
};

export default ProjectCard;
