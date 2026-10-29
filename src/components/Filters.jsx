export default function Filters({
  search,
  setSearch,
  categories,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) {
  return (
    <div style={styles.wrap}>
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      <div style={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              ...styles.catBtn,
              ...(selectedCategory === cat ? styles.catActive : {}),
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.priceRow}>
        <label style={styles.label}>
          Min: $
          <input
            type="number"
            min={0}
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            style={styles.priceInput}
          />
        </label>
        <label style={styles.label}>
          Max: $
          <input
            type="number"
            min={0}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={styles.priceInput}
          />
        </label>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    marginBottom: 28,
  },
  input: {
    padding: "12px 16px",
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: 15,
    width: "100%",
    boxSizing: "border-box",
  },
  categories: { display: "flex", flexWrap: "wrap", gap: 8 },
  catBtn: {
    padding: "8px 14px",
    borderRadius: 20,
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    textTransform: "capitalize",
    fontSize: 13,
  },
  catActive: { background: "#764ba2", color: "#fff", borderColor: "#764ba2" },
  priceRow: { display: "flex", gap: 16, alignItems: "center" },
  label: { display: "flex", alignItems: "center", gap: 6, fontSize: 14 },
  priceInput: {
    width: 80,
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid #ddd",
    fontSize: 14,
  },
};