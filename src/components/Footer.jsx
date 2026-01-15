export default function Footer() {
  return (
    <footer id="contact" style={styles.footer}>
      <div className="container" style={styles.inner}>
        <div>
          <div style={styles.title}>Let’s connect</div>
          <div className="muted">Email is the fastest way to reach me.</div>
        </div>

        <div style={styles.links}>
          <a href="mailto:youremail@example.com">youremail@example.com</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://behance.net/" target="_blank" rel="noreferrer">Behance</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "3.5rem 0",
    borderTop: "1px solid rgba(31, 41, 55, 0.10)",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1.5rem",
    flexWrap: "wrap",
    alignItems: "center",
  },
  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "1.5rem",
    marginBottom: "0.25rem",
  },
  links: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    fontWeight: 500,
  },
};