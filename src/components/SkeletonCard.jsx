export default function SkeletonCard() {
  return (
    <div style={styles.card}>
      <div style={styles.img} className="skeleton" />
      <div style={{ ...styles.line, width: "80%" }} className="skeleton" />
      <div style={{ ...styles.line, width: "50%" }} className="skeleton" />
      <div style={{ ...styles.line, width: "30%" }} className="skeleton" />
    </div>
  );
}

const styles = {
  card: {
    padding: 16,
    borderRadius: 12,
    border: "1px solid #eee",
    background: "#fff",
  },
  img: { width: "100%", height: 160, borderRadius: 8, marginBottom: 12 },
  line: { height: 14, borderRadius: 6, marginBottom: 8 },
};