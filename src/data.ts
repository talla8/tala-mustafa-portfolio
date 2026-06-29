import type { NavLink, Project, SkillCategory } from './types';

export const primaryLinks: NavLink[] = [
  { label: 'Download CV', href: '/Tala_Mustafa_CV2026.pdf', download: true },
  { label: 'GitHub', href: 'https://github.com/talla8' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tala-mohammad-761749289/' },
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
    title: 'Languages',
    items: ['Kotlin', 'Java', 'TypeScript'],
  },
  {
    title: 'Web',
    items: ['React', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'REST APIs', 'JUnit', 'MockK'],
  },
  {
    title: 'Databases',
    items: ['SQL', 'MySQL', 'SQLite'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'CDK', 'Cloud Environments', 'Monitoring'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Version Control', 'Postman', 'VS Code'],
  },
];

export const projects: Project[] = [
  {
    title: 'Bridge',
    subtitle:
      'Adaptive educational planning platform designed for early-grade classrooms in Jordan',
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
      { label: 'View on GitHub', href: 'https://github.com/talla8/Bridge-1.0' },
    ],
  },
  {
    title: 'ApplyMate',
    subtitle: 'Internship application tracker for students and graduates',
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
      { label: 'View on GitHub', href: 'https://github.com/talla8/ApplyMate' },
    ],
  },
];

export const contactLinks: NavLink[] = [
  { label: 'tallamhmmd1@gmail.com', href: 'mailto:tallamhmmd1@gmail.com' },
  { label: 'github.com/talla8', href: 'https://github.com/talla8' },
  { label: 'linkedin.com/in/tala-mohammad', href: 'https://www.linkedin.com/in/tala-mohammad-761749289/' },
];
