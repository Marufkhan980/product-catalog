import { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";

const API_URL = "https://dummyjson.com/products?limit=100";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const unique = [...new Set(products.map((p) => p.category))];
    return ["all", ...unique];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchesPrice = p.price >= minPrice && p.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, search, selectedCategory, minPrice, maxPrice]);

  return (
    <>
      <Navbar />
      <Hero />
      <section id="products" style={styles.section}>
        <h2 style={styles.heading}>Our Products</h2>

        <Filters
          search={search}
          setSearch={setSearch}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        <ProductList products={filteredProducts} loading={loading} />
      </section>
    </>
  );
}

const styles = {
  section: { padding: "48px 32px", maxWidth: 1200, margin: "0 auto" },
  heading: { fontSize: 28, marginBottom: 20 },
};