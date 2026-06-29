import { ButtonLink } from './ButtonLink';
import type { Project } from '../types';

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="card project-card reveal-on-scroll" style={{ transitionDelay: `${index * 90}ms` }}>
      <div className="project-header">
        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-meta">
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
