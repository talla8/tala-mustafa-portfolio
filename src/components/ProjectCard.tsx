import { ButtonLink } from './ButtonLink';
import type { Project } from '../types';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card project-card">
      <div className="project-header">
        <div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-block">
        <h4>Key Features</h4>
        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="project-block">
        <h4>Tech Stack</h4>
        <div className="badge-list">
          {project.stack.map((item) => (
            <span key={item} className="badge badge--soft">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {project.links.map((link) => (
          <ButtonLink
            key={link.label}
            href={link.href}
            variant="ghost"
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {link.label}
          </ButtonLink>
        ))}
      </div>
    </article>
  );
}
