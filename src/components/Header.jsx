import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <Link to="/" style={styles.brand}>Dylan Petersen</Link>

        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/work" style={styles.link}>Work</Link>
          <Link to="/about" style={styles.link}>About</Link>

          <a
            href="/resume.pdf"
            style={styles.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(10px)",
    background: "rgba(230, 225, 197, 0.75)",
    borderBottom: "1px solid rgba(31, 41, 55, 0.10)",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
  },
  brand: {
    fontWeight: 600,
    letterSpacing: "-0.01em",
  },
  nav: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  link: {
    opacity: 0.85,
    fontWeight: 500,
  },
  resume: {
    padding: "0.6rem 0.9rem",
    borderRadius: 999,
    border: "1px solid rgba(31, 41, 55, 0.18)",
    fontWeight: 500,
    textDecoration: "none",
  },
};