import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

export default function ProductList({ products, loading }) {
  if (loading) {
    return (
      <div style={styles.grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return <p style={{ textAlign: "center", padding: 40 }}>No products found 😢</p>;
  }

  return (
    <div style={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 20,
  },
};