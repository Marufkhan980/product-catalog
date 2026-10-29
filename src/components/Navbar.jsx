import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>🛍️ ShopKart</Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <a href="#products" style={styles.link}>Products</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    background: "#111",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  brand: { color: "#fff", textDecoration: "none", fontSize: 22, fontWeight: 700 },
  links: { display: "flex", gap: 24 },
  link: { color: "#fff", textDecoration: "none", fontSize: 15 },
};