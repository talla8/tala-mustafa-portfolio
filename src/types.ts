export type NavLink = {
  label: string;
  href: string;
  download?: boolean;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  links: NavLink[];
};
