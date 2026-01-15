const tools = [
  "JavaScript",
  "Angular",
  "React",
  "Node / Express",
  "MongoDB",
  "PostgreSQL",
  "Figma",
  "Adobe CC",
];

export default function TechCarousel() {
  // duplicate list for seamless loop
  const items = [...tools, ...tools];

  return (
    <div className="card" style={styles.wrap} aria-label="Tech stack carousel">
      <div style={styles.track} className="techTrack">
        {items.map((t, idx) => (
          <span key={`${t}-${idx}`} style={styles.pill}>
            {t}
          </span>
        ))}
      </div>

      <style>{`
        .techTrack {
          animation: scroll 18s linear infinite;
        }
        .techTrack:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrap: {
    overflow: "hidden",
    padding: "1rem",
  },
  track: {
    display: "flex",
    gap: "0.75rem",
    width: "max-content",
    alignItems: "center",
  },
  pill: {
    display: "inline-flex",
    padding: "0.55rem 0.8rem",
    borderRadius: 999,
    border: "1px solid rgba(31, 41, 55, 0.12)",
    background: "rgba(150, 197, 247, 0.20)",
    fontWeight: 500,
    whiteSpace: "nowrap",
    opacity: 0.9,
  },
};