"use client";

import { useState, useEffect } from "react";

const ADMIN_CREDENTIALS = [
  { username: "admin", email: "admin@korngrei.com", password: "KorngRei@2024" },
  { username: "sahaknit", email: "korngrei@gmail.com", password: "Matcha#Admin1" },
];

const INITIAL_PRODUCTS = [
  { id: 1, name: "KBACH KHMER Matcha Bowl", price: 18.0, category: "bowl", enabled: true, badge: "Best Seller", image: "/rum-bowl-kr.png", description: "A handcrafted matcha bowl set featuring a traditional design." },
  { id: 2, name: "Whisk Holder Kbach Khmer", price: 6.0, category: "holder", enabled: true, badge: "", image: "/holder-kr.png", description: "A contemporary whisk holder with sleek Khmer design." },
  { id: 3, name: "Bowl & Holder Set", price: 23.0, category: "set", enabled: true, badge: "New", image: "/set-holder-and-bowl-mini.png", description: "A contemporary take on matcha bowls for modern tea enthusiasts." },
  { id: 4, name: "Bamboo Whisk", price: 5.0, category: "whisk", enabled: true, badge: "", image: "/whisk-kr.png", description: "An exclusive ceremonial bamboo whisk. Elevate your tea experience." },
  { id: 5, name: "Bamboo Scoop", price: 1.0, category: "scoop", enabled: true, badge: "", image: "/scoop-kr.png", description: "Compact and portable bamboo scoop for on-the-go tea lovers." },
  { id: 6, name: "Bamboo Spoon", price: 3.5, category: "spoon", enabled: true, badge: "", image: "/spoon-kr.png", description: "Compact and portable bamboo spoon for on-the-go tea lovers." },
  { id: 7, name: "Sifter", price: 1.5, category: "sifter", enabled: true, badge: "", image: "/sifter-kr.png", description: "Travel-friendly sifter perfect for on-the-go tea lovers." },
  { id: 8, name: "Matcha Whisk Set", price: 8.0, category: "whisk", enabled: true, badge: "Popular", image: "/matcha-whisk-set.png", description: "Travel-friendly kit with mini matcha bowl, whisk, and scoop." },
  { id: 9, name: "Sakura Ceramic Bowl Set", price: 24.99, category: "ceramic", enabled: true, badge: "", image: "/Sakura02.jpg", description: "Timeless matcha bowl set crafted from high-quality ceramic." },
  { id: 10, name: "Butterfly Ceramic Bowl Set", price: 29.99, category: "ceramic", enabled: true, badge: "", image: "/222.jpg", description: "Elegant ceramic bowl set with natural bamboo tools." },
];

const CATEGORIES = ["bowl", "holder", "set", "whisk", "scoop", "spoon", "sifter", "ceramic", "other"];
const BADGE_OPTIONS = ["", "Best Seller", "New", "Popular", "Sale"];

export default function AdminDashboard() {
  const [auth, setAuth] = useState({ loggedIn: false, user: null });
  const [loginForm, setLoginForm] = useState({ identifier: "", password: "", showPass: false });
  const [loginError, setLoginError] = useState("");
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [view, setView] = useState("dashboard");
  const [editProduct, setEditProduct] = useState(null);
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [toast, setToast] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { identifier, password } = loginForm;
    const found = ADMIN_CREDENTIALS.find(
      (c) => (c.username === identifier || c.email === identifier) && c.password === password
    );
    if (found) {
      setAuth({ loggedIn: true, user: found.username });
      setLoginError("");
      showToast(`Welcome back, ${found.username}!`);
    } else {
      setLoginError("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setAuth({ loggedIn: false, user: null });
    setView("dashboard");
    setEditProduct(null);
  };

  const toggleProduct = (id) => {
    setProducts((prev) => prev.map((p) => p.id === id ? { ...p, enabled: !p.enabled } : p));
    const p = products.find((x) => x.id === id);
    showToast(`"${p.name}" ${p.enabled ? "disabled" : "enabled"}`);
  };

  const deleteProduct = (id) => {
    const p = products.find((x) => x.id === id);
    setProducts((prev) => prev.filter((x) => x.id !== id));
    setDeleteConfirm(null);
    showToast(`"${p.name}" deleted`, "danger");
  };

  const saveProduct = (data) => {
    if (isNewProduct) {
      const newId = Math.max(...products.map((p) => p.id), 0) + 1;
      setProducts((prev) => [...prev, { ...data, id: newId, enabled: true }]);
      showToast("Product added successfully!");
    } else {
      setProducts((prev) => prev.map((p) => p.id === data.id ? data : p));
      showToast("Product updated successfully!");
    }
    setEditProduct(null);
    setIsNewProduct(false);
    setView("products");
  };

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === "all" || p.category === filterCat;
    const matchStatus = filterStatus === "all" || (filterStatus === "enabled" ? p.enabled : !p.enabled);
    return matchSearch && matchCat && matchStatus;
  });

  const stats = {
    total: products.length,
    enabled: products.filter((p) => p.enabled).length,
    disabled: products.filter((p) => !p.enabled).length,
    revenue: products.filter((p) => p.enabled).reduce((s, p) => s + p.price, 0),
  };

  if (!auth.loggedIn) return <LoginScreen loginForm={loginForm} setLoginForm={setLoginForm} handleLogin={handleLogin} loginError={loginError} />;

  if (editProduct || isNewProduct) {
    return (
      <ProductEditor
        product={editProduct}
        isNew={isNewProduct}
        onSave={saveProduct}
        onCancel={() => { setEditProduct(null); setIsNewProduct(false); setView("products"); }}
        toast={toast}
      />
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8f6f1", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {toast && <Toast toast={toast} />}
      {deleteConfirm && (
        <DeleteModal
          product={products.find((p) => p.id === deleteConfirm)}
          onConfirm={() => deleteProduct(deleteConfirm)}
          onCancel={() => setDeleteConfirm(null)}
        />
      )}

      {/* Sidebar */}
      <aside style={{
        width: sidebarOpen ? 240 : 60,
        background: "#1a1a0f",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.25s ease",
        flexShrink: 0,
        position: "relative",
      }}>
        <div style={{ padding: sidebarOpen ? "24px 20px 20px" : "24px 8px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {sidebarOpen ? (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#386c00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#fff", fontWeight: 700 }}>K</div>
                <div>
                  <div style={{ color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: "0.05em" }}>KORNG REI</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, letterSpacing: "0.1em" }}>ADMIN</div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#386c00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#fff", fontWeight: 700, margin: "0 auto" }}>K</div>
          )}
        </div>

        <nav style={{ flex: 1, padding: "12px 0" }}>
          {[
            { id: "dashboard", label: "Dashboard", icon: "◧" },
            { id: "products", label: "Products", icon: "▦" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 12,
                padding: sidebarOpen ? "11px 20px" : "11px 0", justifyContent: sidebarOpen ? "flex-start" : "center",
                background: view === item.id ? "rgba(56,108,0,0.25)" : "transparent",
                color: view === item.id ? "#8fba3a" : "rgba(255,255,255,0.55)",
                border: "none", cursor: "pointer", fontSize: 13,
                borderLeft: view === item.id ? "3px solid #386c00" : "3px solid transparent",
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              {sidebarOpen && item.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: sidebarOpen ? "16px 20px" : "16px 8px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {sidebarOpen && (
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 10 }}>
              Signed in as <span style={{ color: "#8fba3a" }}>{auth.user}</span>
            </div>
          )}
          <button
            onClick={handleLogout}
            style={{
              width: "100%", padding: "8px 12px", borderRadius: 6,
              background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer",
              fontSize: 12, display: "flex", alignItems: "center", gap: 8,
              justifyContent: sidebarOpen ? "flex-start" : "center",
            }}
          >
            <span>⎋</span>{sidebarOpen && "Sign out"}
          </button>
        </div>

        <button
          onClick={() => setSidebarOpen((o) => !o)}
          style={{
            position: "absolute", top: 20, right: -12, width: 24, height: 24,
            borderRadius: "50%", background: "#386c00", border: "2px solid #1a1a0f",
            color: "#fff", fontSize: 10, cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", zIndex: 10,
          }}
        >
          {sidebarOpen ? "‹" : "›"}
        </button>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, overflow: "auto" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 28px" }}>
          {view === "dashboard" && <DashboardView stats={stats} products={products} setView={setView} />}
          {view === "products" && (
            <ProductsView
              filteredProducts={filteredProducts}
              products={products}
              search={search} setSearch={setSearch}
              filterCat={filterCat} setFilterCat={setFilterCat}
              filterStatus={filterStatus} setFilterStatus={setFilterStatus}
              onToggle={toggleProduct}
              onEdit={(p) => { setEditProduct(p); setIsNewProduct(false); }}
              onDelete={(id) => setDeleteConfirm(id)}
              onNew={() => { setEditProduct(null); setIsNewProduct(true); }}
            />
          )}
        </div>
      </main>
    </div>
  );
}

function LoginScreen({ loginForm, setLoginForm, handleLogin, loginError }) {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#0f0f08", fontFamily: "'Georgia', serif", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 20%, rgba(56,108,0,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(143,186,58,0.08) 0%, transparent 50%)" }} />

      <div style={{
        width: 400, background: "#1a1a0f", borderRadius: 16,
        border: "1px solid rgba(56,108,0,0.25)", padding: "40px 36px",
        position: "relative", zIndex: 1,
      }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#386c00", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: "#fff", fontWeight: 700, border: "3px solid rgba(143,186,58,0.3)" }}>K</div>
          <div style={{ color: "#fff", fontSize: 18, fontWeight: 700, letterSpacing: "0.08em" }}>KORNG REI</div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, letterSpacing: "0.2em", marginTop: 4 }}>ADMIN PORTAL</div>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 6 }}>USERNAME OR EMAIL</label>
            <input
              type="text"
              value={loginForm.identifier}
              onChange={(e) => setLoginForm((f) => ({ ...f, identifier: e.target.value }))}
              placeholder="admin or admin@korngrei.com"
              required
              style={{
                width: "100%", padding: "11px 14px", borderRadius: 8, boxSizing: "border-box",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff", fontSize: 14, outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: 20, position: "relative" }}>
            <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 6 }}>PASSWORD</label>
            <input
              type={loginForm.showPass ? "text" : "password"}
              value={loginForm.password}
              onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
              placeholder="••••••••••"
              required
              style={{
                width: "100%", padding: "11px 40px 11px 14px", borderRadius: 8, boxSizing: "border-box",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff", fontSize: 14, outline: "none",
              }}
            />
            <button
              type="button"
              onClick={() => setLoginForm((f) => ({ ...f, showPass: !f.showPass }))}
              style={{ position: "absolute", right: 12, top: 34, background: "none", border: "none", color: "rgba(255,255,255,0.35)", cursor: "pointer", fontSize: 13 }}
            >
              {loginForm.showPass ? "hide" : "show"}
            </button>
          </div>

          {loginError && (
            <div style={{ background: "rgba(220,53,69,0.15)", border: "1px solid rgba(220,53,69,0.3)", borderRadius: 8, padding: "10px 14px", color: "#f08080", fontSize: 13, marginBottom: 16 }}>
              {loginError}
            </div>
          )}

          <button
            type="submit"
            style={{
              width: "100%", padding: "13px", borderRadius: 8, background: "#386c00",
              color: "#fff", fontFamily: "'Georgia', serif", fontSize: 14, fontWeight: 700,
              border: "none", cursor: "pointer", letterSpacing: "0.05em",
              transition: "background 0.2s",
            }}
          >
            Sign In to Dashboard
          </button>
        </form>

        <div style={{ marginTop: 24, padding: "12px 14px", background: "rgba(56,108,0,0.1)", borderRadius: 8, border: "1px solid rgba(56,108,0,0.2)" }}>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, marginBottom: 6, letterSpacing: "0.05em" }}>DEMO CREDENTIALS</div>
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}>user: <span style={{ color: "#8fba3a" }}>admin</span> · pass: <span style={{ color: "#8fba3a" }}>KorngRei@2024</span></div>
        </div>
      </div>
    </div>
  );
}

function DashboardView({ stats, products, setView }) {
  const recentProducts = [...products].slice(-5).reverse();
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, color: "#1a1a0f", margin: "0 0 4px", fontWeight: 400 }}>Dashboard</h1>
        <p style={{ color: "#888", fontSize: 14, margin: 0 }}>Welcome back. Here's what's happening with your store.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
        {[
          { label: "Total Products", value: stats.total, icon: "▦", color: "#386c00" },
          { label: "Active Products", value: stats.enabled, icon: "✓", color: "#2d9e50" },
          { label: "Disabled", value: stats.disabled, icon: "✗", color: "#c0392b" },
          { label: "Active Value", value: `$${stats.revenue.toFixed(2)}`, icon: "$", color: "#8b6914" },
        ].map((s) => (
          <div key={s.label} style={{ background: "#fff", borderRadius: 12, padding: "20px 20px", border: "1px solid #e8e4dc" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 11, color: "#999", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</span>
              <span style={{ fontSize: 18, color: s.color }}>{s.icon}</span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 400, color: "#1a1a0f" }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8e4dc", padding: "24px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 400, color: "#1a1a0f" }}>Recent Products</h2>
          <button onClick={() => setView("products")} style={{ background: "none", border: "1px solid #386c00", color: "#386c00", padding: "6px 16px", borderRadius: 6, cursor: "pointer", fontSize: 13 }}>View all</button>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #f0ece4" }}>
              {["Product", "Category", "Price", "Status"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "8px 12px", color: "#999", fontWeight: 400, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentProducts.map((p) => (
              <tr key={p.id} style={{ borderBottom: "1px solid #f8f6f1" }}>
                <td style={{ padding: "12px 12px", color: "#1a1a0f" }}>{p.name}</td>
                <td style={{ padding: "12px 12px" }}><span style={{ background: "#f0f7e4", color: "#386c00", padding: "3px 8px", borderRadius: 4, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>{p.category}</span></td>
                <td style={{ padding: "12px 12px", color: "#386c00", fontWeight: 500 }}>${p.price.toFixed(2)}</td>
                <td style={{ padding: "12px 12px" }}>
                  <span style={{ background: p.enabled ? "#e8f5e0" : "#fde8e8", color: p.enabled ? "#2d6a00" : "#c0392b", padding: "3px 10px", borderRadius: 20, fontSize: 11 }}>
                    {p.enabled ? "Active" : "Disabled"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductsView({ filteredProducts, search, setSearch, filterCat, setFilterCat, filterStatus, setFilterStatus, onToggle, onEdit, onDelete, onNew }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 26, color: "#1a1a0f", margin: "0 0 4px", fontWeight: 400 }}>Products</h1>
          <p style={{ color: "#888", fontSize: 14, margin: 0 }}>{filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} shown</p>
        </div>
        <button
          onClick={onNew}
          style={{ background: "#386c00", color: "#fff", border: "none", padding: "11px 22px", borderRadius: 8, cursor: "pointer", fontSize: 14, fontFamily: "Georgia, serif", display: "flex", alignItems: "center", gap: 8 }}
        >
          + Add Product
        </button>
      </div>

      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8e4dc", padding: "16px 20px", marginBottom: 20, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: "1 1 200px", padding: "9px 14px", borderRadius: 8, border: "1px solid #e0dcd4", fontSize: 13, background: "#f8f6f1", outline: "none", minWidth: 160 }}
        />
        <select value={filterCat} onChange={(e) => setFilterCat(e.target.value)} style={{ padding: "9px 12px", borderRadius: 8, border: "1px solid #e0dcd4", fontSize: 13, background: "#f8f6f1", cursor: "pointer", outline: "none" }}>
          <option value="all">All categories</option>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={{ padding: "9px 12px", borderRadius: 8, border: "1px solid #e0dcd4", fontSize: 13, background: "#f8f6f1", cursor: "pointer", outline: "none" }}>
          <option value="all">All status</option>
          <option value="enabled">Active only</option>
          <option value="disabled">Disabled only</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0", color: "#999", background: "#fff", borderRadius: 12, border: "1px solid #e8e4dc" }}>
          No products match your filters.
        </div>
      ) : (
        <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8e4dc", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "#f8f6f1", borderBottom: "1px solid #e8e4dc" }}>
                {["Product", "Category", "Price", "Badge", "Status", "Actions"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "12px 16px", color: "#999", fontWeight: 400, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => (
                <tr key={p.id} style={{ borderBottom: "1px solid #f8f6f1", opacity: p.enabled ? 1 : 0.55, transition: "opacity 0.2s" }}>
                  <td style={{ padding: "14px 16px" }}>
                    <div style={{ fontWeight: 500, color: "#1a1a0f" }}>{p.name}</div>
                    <div style={{ color: "#aaa", fontSize: 11, marginTop: 2 }}>ID #{p.id}</div>
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <span style={{ background: "#f0f7e4", color: "#386c00", padding: "3px 8px", borderRadius: 4, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>{p.category}</span>
                  </td>
                  <td style={{ padding: "14px 16px", color: "#386c00", fontWeight: 500 }}>${p.price.toFixed(2)}</td>
                  <td style={{ padding: "14px 16px" }}>
                    {p.badge ? (
                      <span style={{ background: "#fef3e2", color: "#8b6914", padding: "3px 8px", borderRadius: 4, fontSize: 11 }}>{p.badge}</span>
                    ) : <span style={{ color: "#ccc" }}>—</span>}
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <button
                      onClick={() => onToggle(p.id)}
                      style={{
                        padding: "5px 14px", borderRadius: 20, fontSize: 11, border: "none", cursor: "pointer",
                        background: p.enabled ? "#e8f5e0" : "#fde8e8",
                        color: p.enabled ? "#2d6a00" : "#c0392b",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {p.enabled ? "● Active" : "○ Disabled"}
                    </button>
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        onClick={() => onEdit(p)}
                        style={{ padding: "6px 14px", borderRadius: 6, background: "#f0f7e4", color: "#386c00", border: "1px solid #c8e0a0", cursor: "pointer", fontSize: 12 }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(p.id)}
                        style={{ padding: "6px 14px", borderRadius: 6, background: "#fef0f0", color: "#c0392b", border: "1px solid #f5c0c0", cursor: "pointer", fontSize: 12 }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function ProductEditor({ product, isNew, onSave, onCancel, toast }) {
  const blank = { name: "", price: 0, category: "bowl", badge: "", image: "", description: "", enabled: true };
  const [form, setForm] = useState(isNew ? blank : { ...product });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.price || isNaN(form.price) || form.price <= 0) e.price = "Valid price required";
    if (!form.description.trim()) e.description = "Description is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSave({ ...form, price: parseFloat(form.price) });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f6f1", fontFamily: "'Georgia', serif", padding: "32px 28px" }}>
      {toast && <Toast toast={toast} />}
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <button onClick={onCancel} style={{ background: "none", border: "1px solid #ccc", color: "#666", padding: "7px 16px", borderRadius: 7, cursor: "pointer", fontSize: 13 }}>← Back</button>
          <div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 400, color: "#1a1a0f" }}>{isNew ? "Add New Product" : "Edit Product"}</h1>
            {!isNew && <p style={{ margin: 0, color: "#999", fontSize: 13 }}>ID #{product.id}</p>}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8e4dc", padding: "28px 28px", marginBottom: 16 }}>
            <h2 style={{ margin: "0 0 20px", fontSize: 15, fontWeight: 400, color: "#555", borderBottom: "1px solid #f0ece4", paddingBottom: 12 }}>Product Information</h2>

            <Field label="Product Name" error={errors.name}>
              <input type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="e.g. KBACH KHMER Matcha Bowl"
                style={inputStyle(errors.name)} />
            </Field>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Price (USD)" error={errors.price}>
                <input type="number" step="0.01" min="0" value={form.price} onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
                  placeholder="0.00" style={inputStyle(errors.price)} />
              </Field>
              <Field label="Category">
                <select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  style={{ ...inputStyle(), cursor: "pointer" }}>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Badge (optional)">
                <select value={form.badge} onChange={(e) => setForm((f) => ({ ...f, badge: e.target.value }))}
                  style={{ ...inputStyle(), cursor: "pointer" }}>
                  {BADGE_OPTIONS.map((b) => <option key={b} value={b}>{b || "None"}</option>)}
                </select>
              </Field>
              <Field label="Image Path (optional)">
                <input type="text" value={form.image} onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                  placeholder="/image-name.jpg" style={inputStyle()} />
              </Field>
            </div>

            <Field label="Description" error={errors.description}>
              <textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Short product description..."
                rows={3}
                style={{ ...inputStyle(errors.description), resize: "vertical" }} />
            </Field>

            <Field label="Status">
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <div
                  onClick={() => setForm((f) => ({ ...f, enabled: !f.enabled }))}
                  style={{
                    width: 44, height: 24, borderRadius: 12, position: "relative", cursor: "pointer",
                    background: form.enabled ? "#386c00" : "#ccc", transition: "background 0.2s",
                  }}
                >
                  <div style={{
                    position: "absolute", top: 3, left: form.enabled ? 23 : 3, width: 18, height: 18,
                    borderRadius: "50%", background: "#fff", transition: "left 0.2s",
                  }} />
                </div>
                <span style={{ fontSize: 14, color: form.enabled ? "#386c00" : "#999" }}>
                  {form.enabled ? "Active — visible to customers" : "Disabled — hidden from store"}
                </span>
              </label>
            </Field>
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <button type="button" onClick={onCancel}
              style={{ padding: "12px 28px", borderRadius: 8, border: "1px solid #ccc", background: "#fff", color: "#555", cursor: "pointer", fontSize: 14, fontFamily: "Georgia, serif" }}>
              Cancel
            </button>
            <button type="submit"
              style={{ padding: "12px 32px", borderRadius: 8, background: "#386c00", color: "#fff", border: "none", cursor: "pointer", fontSize: 14, fontFamily: "Georgia, serif" }}>
              {isNew ? "Add Product" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children, error }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 11, color: "#888", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>{label}</label>
      {children}
      {error && <p style={{ margin: "4px 0 0", fontSize: 12, color: "#c0392b" }}>{error}</p>}
    </div>
  );
}

function inputStyle(error) {
  return {
    width: "100%", padding: "10px 13px", borderRadius: 8, boxSizing: "border-box",
    border: `1px solid ${error ? "#f5c0c0" : "#e0dcd4"}`,
    background: error ? "#fffafa" : "#f8f6f1", fontSize: 14, outline: "none",
    fontFamily: "Georgia, serif",
  };
}

function DeleteModal({ product, onConfirm, onCancel }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
      <div style={{ background: "#fff", borderRadius: 14, padding: "32px 32px", maxWidth: 420, width: "90%", fontFamily: "Georgia, serif" }}>
        <div style={{ fontSize: 28, marginBottom: 12, textAlign: "center" }}>⚠</div>
        <h2 style={{ textAlign: "center", margin: "0 0 8px", fontSize: 18, fontWeight: 400 }}>Delete Product?</h2>
        <p style={{ textAlign: "center", color: "#666", fontSize: 14, margin: "0 0 24px" }}>
          You're about to permanently delete <strong>"{product?.name}"</strong>. This cannot be undone.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={onCancel}
            style={{ flex: 1, padding: "11px", borderRadius: 8, border: "1px solid #ccc", background: "#fff", color: "#555", cursor: "pointer", fontSize: 14, fontFamily: "Georgia, serif" }}>
            Keep Product
          </button>
          <button onClick={onConfirm}
            style={{ flex: 1, padding: "11px", borderRadius: 8, background: "#c0392b", color: "#fff", border: "none", cursor: "pointer", fontSize: 14, fontFamily: "Georgia, serif" }}>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function Toast({ toast }) {
  return (
    <div style={{
      position: "fixed", top: 20, right: 20, zIndex: 2000,
      background: toast.type === "danger" ? "#c0392b" : "#386c00",
      color: "#fff", padding: "12px 20px", borderRadius: 8,
      fontSize: 14, fontFamily: "Georgia, serif",
      boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
      animation: "fadeIn 0.2s ease",
    }}>
      {toast.msg}
    </div>
  );
}
