import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useMemo, useState } from "react";

const filters = [
  { key: "all", label: "All" },
  { key: "design", label: "Graphic Design" },
  { key: "web", label: "Web Projects" },
];

export default function Work() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div id="top">
      <Header />

      <section className="section">
        <div className="container">
          <h1 className="h1">Work</h1>
          <p className="muted" style={{ marginTop: 0, maxWidth: 760 }}>
            A selection of design and web projects. Each project page includes context, visuals,
            and links out to GitHub / Behance / live demos.
          </p>

          {/* Filters */}
          <div style={styles.filters}>
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                style={{
                  ...styles.filterBtn,
                  ...(active === f.key ? styles.filterActive : null),
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid" style={{ marginTop: "1.5rem" }}>
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <style>{`
            @media (max-width: 1020px) {
              a[style*="grid-column: span 4"] { grid-column: span 6 !important; }
            }
            @media (max-width: 640px) {
              a[style*="grid-column: span 4"] { grid-column: span 12 !important; }
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  filters: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    marginTop: "1.25rem",
  },
  filterBtn: {
    appearance: "none",
    border: "1px solid rgba(31, 41, 55, 0.16)",
    background: "transparent",
    borderRadius: 999,
    padding: "0.55rem 0.85rem",
    fontWeight: 600,
    cursor: "pointer",
    color: "var(--text)",
  },
  filterActive: {
    borderColor: "rgba(62, 102, 128, 0.55)",
    background: "rgba(150, 197, 247, 0.20)",
    color: "var(--accent)",
  },
};