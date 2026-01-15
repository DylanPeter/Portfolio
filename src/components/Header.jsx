export default function Header() {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.inner}>
        <a href="#top" style={styles.brand}>Dylan Petersen</a>

        <nav style={styles.nav}>
          <a href="#work" style={styles.link}>Work</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#contact" style={styles.link}>Contact</a>
          <a href="/resume.pdf" style={styles.resume} target="_blank" rel="noreferrer">
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