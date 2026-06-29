type SkillCategoryCardProps = {
  title: string;
  items: string[];
};

export function SkillCategoryCard({ title, items }: SkillCategoryCardProps) {
  return (
    <article className="card skill-card reveal-on-scroll">
      <p>
        <strong>{title}:</strong> {items.join(', ')}
      </p>
    </article>
  );
}
