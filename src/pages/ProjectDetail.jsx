import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProjectBySlug } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div>
        <Header />
        <section className="section">
          <div className="container">
            <h1 className="h1">Project not found</h1>
            <p className="muted">That project doesn’t exist (or the URL is wrong).</p>
            <Link className="btn" to="/work">Back to Work</Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const { title, year, role, tools, blurb, overview, contributions, links } = project;

  return (
    <div id="top">
      <Header />

      {/* Header */}
      <section className="section">
        <div className="container" style={{ maxWidth: 960 }}>
          <Link to="/work" className="muted" style={{ fontWeight: 600 }}>
            ← Back to Work
          </Link>

          <h1 className="h1" style={{ marginTop: "1rem" }}>{title}</h1>
          <p className="muted" style={{ marginTop: 0, fontSize: "1.05rem" }}>{blurb}</p>

          {/* Meta */}
          <div className="card" style={styles.metaCard}>
            <div style={styles.metaBlock}>
              <div style={styles.kicker}>Year</div>
              <div>{year}</div>
            </div>
            <div style={styles.metaBlock}>
              <div style={styles.kicker}>Role</div>
              <div>{role}</div>
            </div>
            <div style={styles.metaBlock}>
              <div style={styles.kicker}>Tools</div>
              <div style={styles.tools}>
                {tools.map((t) => (
                  <span key={t} style={styles.toolPill}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="card" style={styles.card}>
            <h2 className="h2" style={{ marginBottom: "0.75rem" }}>Overview</h2>
            <p className="muted" style={{ marginTop: 0 }}>{overview}</p>
          </div>
        </div>
      </section>

      {/* Contribution */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="card" style={styles.card}>
            <h2 className="h2" style={{ marginBottom: "0.75rem" }}>What I did</h2>
            <ul style={styles.list}>
              {contributions.map((c, idx) => (
                <li key={idx} className="muted">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Visuals placeholder */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="card" style={styles.card}>
            <h2 className="h2" style={{ marginBottom: "0.75rem" }}>Visuals</h2>
            <p className="muted" style={{ marginTop: 0 }}>
              Add screenshots/mockups later (recommended: 2–6 images).
            </p>
            <div style={styles.visualPlaceholder} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Links out */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="card" style={{ ...styles.card, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <h2 className="h2" style={{ marginBottom: "0.5rem" }}>Links</h2>
              <p className="muted" style={{ margin: 0 }}>View the project on GitHub, Behance, or live.</p>
            </div>

            <div className="btnRow" style={{ marginTop: 0 }}>
              {links?.live && (
                <a className="btn btnPrimary" href={links.live} target="_blank" rel="noopener noreferrer">
                  Live Site →
                </a>
              )}
              {links?.github && (
                <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              )}
              {links?.behance && (
                <a className="btn" href={links.behance} target="_blank" rel="noopener noreferrer">
                  Behance →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  metaCard: {
    padding: "1.25rem",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "1rem",
    marginTop: "1.25rem",
  },
  metaBlock: {},
  kicker: { fontWeight: 800, opacity: 0.9, marginBottom: "0.35rem" },
  tools: { display: "flex", flexWrap: "wrap", gap: "0.5rem" },
  toolPill: {
    display: "inline-flex",
    padding: "0.35rem 0.6rem",
    borderRadius: 999,
    border: "1px solid rgba(31, 41, 55, 0.12)",
    background: "rgba(150, 197, 247, 0.20)",
    fontWeight: 600,
    fontSize: "0.85rem",
  },
  card: { padding: "2rem" },
  list: {
    margin: 0,
    paddingLeft: "1.1rem",
    lineHeight: 1.75,
    opacity: 0.9,
  },
  visualPlaceholder: {
    marginTop: "1rem",
    height: 220,
    borderRadius: 14,
    background: "rgba(62, 102, 128, 0.16)",
    border: "1px dashed rgba(31, 41, 55, 0.20)",
  },
};