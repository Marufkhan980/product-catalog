import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={styles.card}>
        <img src={product.thumbnail} alt={product.title} style={styles.img} />
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.brand}>{product.brand || product.category}</p>
        <p style={styles.price}>${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: 12,
    padding: 14,
    border: "1px solid #eee",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  img: {
    width: "100%",
    height: 170,
    objectFit: "contain",
    background: "#f7f7f7",
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    margin: "4px 0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  brand: { fontSize: 13, color: "#888", margin: "2px 0", textTransform: "capitalize" },
  price: { fontSize: 17, fontWeight: 700, color: "#764ba2", marginTop: "auto" },
};