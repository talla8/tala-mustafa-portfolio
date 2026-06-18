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

const stats = [
  { value: '2+', label: 'Full-stack projects' },
  { value: 'Amazon', label: 'SDE internship experience' },
  { value: 'React + NestJS', label: 'Core development focus' },
];

function App() {
  return (
    <div className="app-shell">
      <div className="background-orb background-orb--top" />
      <div className="background-orb background-orb--side" />

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
        <section className="hero">
          <div className="hero-copy">
            <span className="hero-kicker">Portfolio</span>
            <h1>Tala Mustafa</h1>
            <p className="hero-title">
              Full-Stack Developer | Computer Science Graduate
            </p>
            <p className="hero-tagline">
              I build practical full-stack web applications with clean interfaces,
              reliable backend logic, and real-world problem solving.
            </p>

            <div className="hero-actions">
              <ButtonLink href="#projects">View Projects</ButtonLink>
              {primaryLinks.map((link, index) => (
                <ButtonLink
                  key={link.label}
                  href={link.href}
                  variant={index === 0 ? 'secondary' : 'ghost'}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>

          <aside className="hero-panel card">
            <p className="panel-label">Profile Snapshot</p>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="availability-note">
              Open to internships, junior software engineering roles, and
              full-stack development opportunities.
            </div>
          </aside>
        </section>

        <Section
          id="about"
          eyebrow="About"
          title="Developer focused on practical product delivery"
        >
          <div className="card prose-card">
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
          title="Technical strengths across the stack"
          description="Core technologies and working styles relevant to internship and junior engineering roles."
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
          eyebrow="Projects"
          title="Featured work"
          description="Selected projects with clear product scope, backend logic, and recruiter-friendly summaries."
        >
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Industry experience"
        >
          <article className="card experience-card">
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
          description="Links and placeholders are structured to be easy to replace later."
        >
          <div className="contact-grid">
            <div className="card contact-card">
              <p className="contact-message">
                Open to internships, junior software engineering roles, and
                full-stack development opportunities.
              </p>
              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
