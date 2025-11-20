import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import "./SharedPages.css";

const demoImage = "/mnt/data/demo.jpg";

const products = [
  { id: 1, name: "Premium Leather", stock: 45, price: 299, status: "In Stock" },
  { id: 2, name: "CompBeam X9", stock: 12, price: 599, status: "Low Stock" },
  { id: 3, name: "Allium Leather", stock: 0, price: 449, status: "Out of Stock" },
  { id: 4, name: "Wheelset", stock: 28, price: 799, status: "In Stock" },
];

export default function ProductManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dashboard-root">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} navigate={navigate} />
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>
      <main className="main-area">
        <Header title="Product Management" />
        <section className="content-section">
          <div className="section-title">All Products</div>
          <div className="products-grid">
            {products.map((p) => (
              <div key={p.id} className="product-card">
                <div className="product-name">{p.name}</div>
                <div className="product-info">
                  <div className="info-row">
                    <span>Stock:</span>
                    <span className="value">{p.stock}</span>
                  </div>
                  <div className="info-row">
                    <span>Price:</span>
                    <span className="value">₹{p.price}</span>
                  </div>
                  <div className="info-row">
                    <span>Status:</span>
                    <span className={`status ${p.status.toLowerCase().replace(" ", "-")}`}>
                      {p.status}
                    </span>
                  </div>
                </div>
                <button className="action-btn">Edit</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function Sidebar({ isOpen, setIsOpen, navigate }) {
  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-top">
        <div className="brand">
          <img src={demoImage} alt="logo" className="brand-image" />
          <div className="brand-text">carooa</div>
        </div>
        <nav className="nav">
          <button className="nav-item" onClick={() => handleNavClick('/')}>Dashboard</button>
          <button className="nav-item active" onClick={() => handleNavClick('/product-management')}>Product Management</button>
          <button className="nav-item" onClick={() => handleNavClick('/order-management')}>Order Management</button>
          <button className="nav-item" onClick={() => handleNavClick('/returns-refunds')}>Returns & Refunds</button>
          <button className="nav-item" onClick={() => handleNavClick('/inventory-management')}>Inventory Management</button>
          <button className="nav-item" onClick={() => handleNavClick('/payments-earnings')}>Payments & Earnings</button>
          <button className="nav-item" onClick={() => handleNavClick('/ratings-reviews')}>Ratings & Reviews</button>
          <button className="nav-item" onClick={() => handleNavClick('/profile-kyc')}>Profile & KYC</button>
          <button className="nav-item" onClick={() => handleNavClick('/support-help')}>Support/Help</button>
          <button className="nav-item" onClick={() => handleNavClick('/account-settings')}>Account Settings</button>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <button className="logout">
          <FiLogOut /> <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function Header({ title }) {
  return (
    <header className="header">
      <h1 className="page-title">{title}</h1>
      <div className="header-right">
        <button className="icon-btn">
          <FiBell />
        </button>
        <div className="profile">
          <div className="avatar">S</div>
          <div className="profile-name">Sandra</div>
        </div>
      </div>
    </header>
  );
}
