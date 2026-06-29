import { useEffect } from 'react';
import { ButtonLink } from './components/ButtonLink';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';
import { SkillCategoryCard } from './components/SkillCategoryCard';
import {
  contactLinks,
  navigationLinks,
  primaryLinks,
  projects,
  skillCategories,
} from './data';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -48px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <div className="background-bloom background-bloom--left" />
      <div className="background-bloom background-bloom--right" />

      <header className="site-header">
        <a className="brand" href="#top">
          Tala Mustafa
        </a>
        <nav className="nav">
          {navigationLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top" className="main-content">
        <section className="hero reveal-on-scroll is-visible">
          <span className="hero-kicker">Portfolio</span>
          <div className="hero-copy">
            <h1>Tala Mustafa</h1>
            <p className="hero-title">
              Junior Full-Stack Developer | Computer Science Student
            </p>
            <p className="hero-tagline">
              Building practical web applications with clean interfaces,
              reliable backend systems, and product-focused engineering.
            </p>
          </div>
        </section>

        <section className="contact-strip reveal-on-scroll" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className="contact-pill"
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </section>

        <Section
          id="about"
          eyebrow="About Me"
          title="About Me"
        >
          <div className="card prose-card section-card reveal-on-scroll">
            <p>
              Tala Mustafa is a Computer Science graduate and full-stack
              developer with experience building educational technology systems
              and backend-driven web applications. She has hands-on experience
              with React, TypeScript, Node.js, NestJS, SQL databases, REST
              APIs, and Git. She also completed an SDE internship at Amazon,
              where she worked on backend services, frontend components,
              monitoring, and production-level engineering workflows.
            </p>
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Skills"
        >
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <SkillCategoryCard
                key={category.title}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Personal Projects"
          title="Personal Projects"
        >
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Industry experience"
        >
          <article className="card experience-card section-card reveal-on-scroll">
            <div className="experience-header">
              <div>
                <h3>Software Development Engineer Intern</h3>
                <p>Amazon</p>
              </div>
              <span className="experience-chip">Internship</span>
            </div>
            <p>
              Worked on backend services, frontend components, monitoring
              improvements, infrastructure configuration, and production-level
              engineering tasks. Collaborated with distributed teams,
              participated in code reviews, improved internal tools, and
              contributed to scalable software systems.
            </p>
          </article>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Available for new opportunities"
        >
          <div className="contact-grid">
            <div className="card contact-card section-card reveal-on-scroll">
              <p className="contact-message">
                Open to internships, junior software engineering roles, and
                full-stack development opportunities.
              </p>
              <div className="hero-actions">
                <ButtonLink href="#projects">View Projects</ButtonLink>
                {primaryLinks.map((link, index) => (
                  <ButtonLink
                    key={link.label}
                    href={link.href}
                    variant={index === 0 ? 'secondary' : 'ghost'}
                    download={link.download ? '' : undefined}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="site-footer reveal-on-scroll">
        <span>Tala Mustafa - Project Portfolio 2026</span>
        <span>Page 1</span>
      </footer>
    </div>
  );
}

export default App;
