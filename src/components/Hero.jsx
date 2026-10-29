export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Discover Amazing Products</h1>
        <p style={styles.sub}>
          Shop the latest gadgets, fashion, and more — all in one place.
        </p>
        <a href="#products" style={styles.btn}>Browse Products</a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    padding: "80px 24px",
    textAlign: "center",
  },
  content: { maxWidth: 720, margin: "0 auto" },
  heading: { fontSize: 42, marginBottom: 16 },
  sub: { fontSize: 18, marginBottom: 28, opacity: 0.9 },
  btn: {
    background: "#fff",
    color: "#764ba2",
    padding: "12px 28px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-block",
  },
};