export default function ProjectCard({ project }) {
  return (
    <a href={`/work/${project.slug}`} className="card" style={styles.card}>
      <div style={styles.thumb} aria-hidden="true" />
      <div style={styles.body}>
        <div style={styles.topRow}>
          <h3 style={styles.title}>{project.title}</h3>
          <span style={styles.tag}>{project.type}</span>
        </div>
        <p className="muted" style={styles.blurb}>{project.blurb}</p>
        <span style={styles.more}>View project →</span>
      </div>
    </a>
  );
}

const styles = {
  card: {
    gridColumn: "span 4",
    overflow: "hidden",
    textDecoration: "none",
    transition: "transform 160ms ease",
  },
  thumb: {
    height: 140,
    background: "rgba(62, 102, 128, 0.18)",
    borderBottom: "1px solid rgba(31, 41, 55, 0.10)",
  },
  body: {
    padding: "1rem",
  },
  topRow: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  title: {
    margin: 0,
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    letterSpacing: "-0.01em",
    fontSize: "1.25rem",
  },
  tag: {
    fontSize: "0.78rem",
    fontWeight: 600,
    padding: "0.25rem 0.55rem",
    borderRadius: 999,
    border: "1px solid rgba(31, 41, 55, 0.12)",
    background: "rgba(188, 211, 242, 0.55)",
    whiteSpace: "nowrap",
  },
  blurb: {
    margin: "0.6rem 0 0.9rem",
  },
  more: {
    color: "var(--accent)",
    fontWeight: 600,
  },
};