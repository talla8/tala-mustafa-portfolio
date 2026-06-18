import type { NavLink, Project, SkillCategory } from './types';

export const primaryLinks: NavLink[] = [
  { label: 'Download CV', href: '#' },
  { label: 'GitHub', href: 'https://github.com/talla8' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tala-mustafa' },
];

export const navigationLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'REST APIs', 'Authentication', 'API Design'],
  },
  {
    title: 'Database',
    items: ['SQLite', 'SQL', 'Relational Database Design'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'Other',
    items: [
      'Problem Solving',
      'Debugging',
      'Technical Documentation',
      'Team Collaboration',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Bridge',
    subtitle: 'Graduation Project | Educational Planning Platform',
    description:
      'Bridge is a school support and academic planning platform designed for teachers, parents, and institutions. It helps teachers upload baseline assessment results, analyze student skill mastery, generate adaptive teaching plans, track progress, create quizzes, and support parent follow-up through dashboards and student performance insights.',
    features: [
      'Role-based access for teachers, parents, and institutions',
      'Student import and baseline assessment upload',
      'Skill mastery analysis',
      'Automatic teaching plan generation',
      'Plan progress tracking and re-planning',
      'Parent dashboard and quiz follow-up',
    ],
    stack: ['React', 'TypeScript', 'NestJS', 'SQLite', 'REST APIs'],
    links: [
      { label: 'Project Demo', href: '#' },
      { label: 'Source Code', href: '#' },
    ],
  },
  {
    title: 'ApplyMate',
    subtitle: 'Internship Application Tracker',
    description:
      'ApplyMate is a full-stack web application that helps students and graduates organize their internship and job applications. Users can add applications, track their status, monitor deadlines, write notes, and view a simple dashboard showing application progress.',
    features: [
      'Add, edit, and delete applications',
      'Track application status: Applied, Interview, Rejected, Offer',
      'Store company name, role, location, deadline, and notes',
      'Dashboard with total applications, interviews, rejections, and offers',
      'Filter applications by status',
      'Clean and responsive UI',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'SQLite', 'REST APIs'],
    links: [
      { label: 'Project Demo', href: '#' },
      { label: 'Source Code', href: '#' },
    ],
  },
];

export const contactLinks: NavLink[] = [
  { label: 'tala.email@example.com', href: 'mailto:tala.email@example.com' },
  { label: 'github.com/talla8', href: 'https://github.com/talla8' },
  { label: 'linkedin.com/in/tala-mustafa', href: 'https://linkedin.com/in/tala-mustafa' },
];
