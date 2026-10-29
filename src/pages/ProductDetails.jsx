import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return (
    <>
      <Navbar />
      <p style={{ padding: 40, textAlign: "center" }}>Loading product…</p>
    </>
  );

  if (error) return (
    <>
      <Navbar />
      <div style={{ padding: 40, textAlign: "center" }}>
        <p style={{ color: "red" }}>{error}</p>
        <Link to="/">← Back to Home</Link>
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <Link to="/" style={styles.back}>← Back</Link>
        <div style={styles.grid}>
          <img src={product.thumbnail} alt={product.title} style={styles.img} />
          <div>
            <h1 style={styles.title}>{product.title}</h1>
            <p style={styles.category}>Category: {product.category}</p>
            <p style={styles.brand}>Brand: {product.brand || "N/A"}</p>
            <p style={styles.price}>${product.price.toFixed(2)}</p>
            <p style={styles.desc}>{product.description}</p>
            <p style={styles.rating}>⭐ {product.rating} / 5</p>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: { maxWidth: 1000, margin: "0 auto", padding: "32px 24px" },
  back: { textDecoration: "none", color: "#764ba2", fontWeight: 600 },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 40,
    marginTop: 24,
    alignItems: "start",
  },
  img: {
    width: "100%",
    borderRadius: 12,
    background: "#f7f7f7",
    objectFit: "contain",
    maxHeight: 420,
  },
  title: { fontSize: 32, marginBottom: 12 },
  category: { color: "#666", textTransform: "capitalize", margin: "4px 0" },
  brand: { color: "#666", margin: "4px 0" },
  price: { fontSize: 26, fontWeight: 700, color: "#764ba2", margin: "16px 0" },
  desc: { lineHeight: 1.6, color: "#444" },
  rating: { marginTop: 16, fontWeight: 600 },
};