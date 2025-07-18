import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  href: string;
  gradient: string;
  icon: React.ReactNode;
  title: string;
  role: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  gradient,
  icon,
  title,
  role,
  description,
}) => (
  <div className="project-card group cursor-pointer hover:scale-95 transition-transform duration-300">
    <Link href={href} className="block">
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className={`aspect-video bg-gradient-to-br ${gradient} relative group-hover:opacity-90 transition-opacity duration-300`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{title}</h4>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3">
            <span className="text-xs font-medium text-primary">{role}</span>
          </div>
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

export default ProjectCard;