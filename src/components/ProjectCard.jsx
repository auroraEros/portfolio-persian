import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs hover:shadow-sm transition-shadow h-full flex flex-col">
      <div className="h-48 overflow-hidden flex-shrink-0 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3 flex flex-wrap gap-2 justify-end">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-xs rounded-full bg-secondary/80 text-secondary-foreground border border-border whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-right mb-1 min-h-[56px] flex items-center ">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm text-right mb-5 line-clamp-3 min-h-[60px]">
          {project.description}
        </p>

        <div className="mt-auto flex justify-end space-x-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink className="w-4 h-4 ml-1" />
            Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Github className="w-4 h-4 ml-1" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
