import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div id="top">
      <Header />

      {/* INTRO */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <h1 className="h1">About</h1>
          <p className="muted" style={{ marginTop: 0, fontSize: "1.05rem" }}>
            Designer and web developer focused on clarity, usability, and thoughtful systems.
          </p>
        </div>
      </section>

      {/* BIO */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="card" style={styles.card}>
            <h2 className="h2" style={{ marginBottom: "0.75rem" }}>A bit about me</h2>

            <p className="muted" style={styles.p}>
              I’m Dylan Petersen—someone who enjoys the intersection of design and development.
              I care about strong typography, clear hierarchy, and interfaces that feel calm and easy to use.
            </p>

            <p className="muted" style={styles.p}>
              On the development side, I like building projects that are structured, maintainable, and practical.
              I’m especially into full-stack work where I can take an idea from layout → UI → API → database.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="card" style={styles.card}>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Skills & Tools</h2>

            <div style={styles.cols}>
              <div>
                <div style={styles.kicker}>Design</div>
                <ul style={styles.list}>
                  <li>Typography & hierarchy</li>
                  <li>Layout systems & composition</li>
                  <li>Branding & visual identity</li>
                  <li>Figma + Adobe CC</li>
                </ul>
              </div>

              <div>
                <div style={styles.kicker}>Development</div>
                <ul style={styles.list}>
                  <li>JavaScript</li>
                  <li>Angular / React</li>
                  <li>Node / Express</li>
                  <li>MongoDB / PostgreSQL</li>
                </ul>
              </div>

              <div>
                <div style={styles.kicker}>Process</div>
                <ul style={styles.list}>
                  <li>Wireframes & iteration</li>
                  <li>Component-driven UI</li>
                  <li>Clean documentation</li>
                  <li>Accessibility basics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="card" style={styles.card}>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>How I approach work</h2>
            <ul style={styles.list}>
              <li>I prioritize clarity over complexity.</li>
              <li>I build systems that scale (design and code).</li>
              <li>I iterate based on feedback and real constraints.</li>
              <li>I aim for work that feels calm, intentional, and usable.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RESUME + LINKS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="card" style={{ ...styles.card, display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <h2 className="h2" style={{ marginBottom: "0.5rem" }}>Resume</h2>
              <p className="muted" style={{ margin: 0 }}>
                Download a PDF version of my resume.
              </p>
            </div>

            <a
              className="btn btnPrimary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  card: { padding: "2rem" },
  p: { marginTop: 0, maxWidth: 820 },
  cols: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "1.25rem",
  },
  kicker: {
    fontWeight: 700,
    opacity: 0.9,
    marginBottom: "0.5rem",
  },
  list: {
    margin: 0,
    paddingLeft: "1.1rem",
    opacity: 0.85,
    lineHeight: 1.75,
  },
};