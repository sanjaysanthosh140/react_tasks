import React, { useState } from "react";
import { FiBell, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import "./SharedPages.css";

const demoImage = "/mnt/data/demo.jpg";

const reviews = [
  { id: 1, product: "Premium Leather", rating: 5, reviewer: "John Doe", review: "Excellent quality!", date: "2025-10-15" },
  { id: 2, product: "CompBeam X9", rating: 4, reviewer: "Jane Smith", review: "Good product, great service", date: "2025-10-16" },
  { id: 3, product: "Wheelset", rating: 5, reviewer: "Mike Johnson", review: "Perfect!", date: "2025-10-17" },
];

export default function RatingsReviews() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-root">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>
      <main className="main-area">
        <Header title="Ratings & Reviews" />
        <section className="content-section">
          <div className="section-title">Customer Reviews</div>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div key={r.id} className="review-card">
                <div className="review-header">
                  <div className="review-product">{r.product}</div>
                  <div className="review-rating">{"⭐".repeat(r.rating)}</div>
                </div>
                <div className="review-text">{r.review}</div>
                <div className="review-footer">
                  <span className="review-reviewer">{r.reviewer}</span>
                  <span className="review-date">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-top">
        <div className="brand">
          <img src={demoImage} alt="logo" className="brand-image" />
          <div className="brand-text">carooa</div>
        </div>
        <nav className="nav">
          <button className="nav-item">Dashboard</button>
          <button className="nav-item">Product Management</button>
          <button className="nav-item">Order Management</button>
          <button className="nav-item">Returns & Refunds</button>
          <button className="nav-item">Inventory Management</button>
          <button className="nav-item">Payments & Earnings</button>
          <button className="nav-item active">Ratings & Reviews</button>
          <button className="nav-item">Profile & KYC</button>
          <button className="nav-item">Support/Help</button>
          <button className="nav-item">Account Settings</button>
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
