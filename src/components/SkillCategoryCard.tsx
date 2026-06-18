type SkillCategoryCardProps = {
  title: string;
  items: string[];
};

export function SkillCategoryCard({ title, items }: SkillCategoryCardProps) {
  return (
    <article className="card skill-card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="badge-list">
        {items.map((item) => (
          <span key={item} className="badge">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
