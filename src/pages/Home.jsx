import Header from "../components/Header";
import TechCarousel from "../components/TechCarousel";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div id="top">
      <Header />

      {/* HERO */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ alignItems: "start" }}>
            <div style={{ gridColumn: "span 7" }}>
              <h1 className="h1">Dylan Petersen</h1>
              <div style={styles.subhead}>Designer & Web Developer</div>
              <p className="muted" style={styles.lede}>
                I design thoughtful visuals and build clean, scalable web applications.
              </p>

              <div className="btnRow">
                <a className="btn btnPrimary" href="/work">View Work</a>
                <a className="btn" href="https://github.com/DylanPeter" target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn" href="https://www.behance.net/dylanpetersen3" target="_blank" rel="noreferrer">Behance</a>
              </div>
            </div>

            <div style={{ gridColumn: "span 5" }}>
              <div className="card" style={styles.heroCard} aria-hidden="true">
                <div style={styles.heroAccent} />
                <div style={styles.heroText}>
                  <div style={styles.heroKicker}>Currently building</div>
                  <div style={styles.heroLine}>portfolio + project case studies</div>
                </div>
              </div>
            </div>
          </div>

          {/* TECH CAROUSEL */}
          <div style={{ marginTop: "2.25rem" }}>
            <TechCarousel />
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section" id="work" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="h2">Featured Work</h2>
          <p className="muted" style={{ marginTop: 0, maxWidth: 720 }}>
            A quick mix of design and web projects. Each project page includes context, visuals,
            and links out to GitHub / Behance / live demos.
          </p>

          <div className="grid" style={{ marginTop: "1.5rem" }}>
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div style={{ marginTop: "1.75rem" }}>
            <a className="btn" href="/work" style={{ borderColor: "rgba(31,41,55,0.22)" }}>
              See all projects →
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section" id="about">
        <div className="container">
          <div className="card" style={styles.aboutCard}>
            <h2 className="h2" style={{ marginBottom: "0.75rem" }}>About</h2>
            <p className="muted" style={{ marginTop: 0, maxWidth: 820 }}>
              I’m a designer and developer focused on clarity, usability, and thoughtful systems.
              I enjoy working at the intersection of design and engineering—where ideas become usable products.
            </p>
            <a className="btn btnPrimary" href="/about" style={{ width: "fit-content" }}>
              Learn more →
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* responsive tweak for cards */}
      <style>{`
        @media (max-width: 1020px) {
          a[style*="grid-column: span 4"] { grid-column: span 6 !important; }
        }
        @media (max-width: 640px) {
          a[style*="grid-column: span 4"] { grid-column: span 12 !important; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  subhead: {
    fontWeight: 600,
    opacity: 0.9,
  },
  lede: {
    maxWidth: 640,
    fontSize: "1.05rem",
    marginTop: "0.75rem",
  },
  heroCard: {
    height: 220,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end",
    padding: "1.25rem",
  },
  heroAccent: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 20%, rgba(150,197,247,0.55), transparent 55%), radial-gradient(circle at 80% 30%, rgba(62,102,128,0.35), transparent 55%)",
  },
  heroText: {
    position: "relative",
    zIndex: 1,
  },
  heroKicker: {
    fontWeight: 600,
    fontSize: "0.9rem",
    opacity: 0.9,
  },
  heroLine: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "1.35rem",
    letterSpacing: "-0.01em",
  },
  aboutCard: {
    padding: "2rem",
  },
};