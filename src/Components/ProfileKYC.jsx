import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import "./SharedPages.css";

const demoImage = "/mnt/data/demo.jpg";

export default function ProfileKYC() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [profile] = useState({
    name: "Sandra Johnson",
    email: "sandra@carooa.com",
    phone: "+91 98765 43210",
    businessName: "Carooa Leather Co.",
    gstin: "27AABFF9999A1Z5",
    panCard: "AAAHP5055K",
    kycStatus: "Verified",
  });

  return (
    <div className="dashboard-root">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} navigate={navigate} />
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>
      <main className="main-area">
        <Header title="Profile & KYC" />
        <section className="content-section">
          <div className="section-title">Profile Information</div>
          <div className="profile-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={profile.name} readOnly />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={profile.email} readOnly />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" value={profile.phone} readOnly />
              </div>
              <div className="form-group">
                <label>Business Name</label>
                <input type="text" value={profile.businessName} readOnly />
              </div>
              <div className="form-group">
                <label>GSTIN</label>
                <input type="text" value={profile.gstin} readOnly />
              </div>
              <div className="form-group">
                <label>PAN Card</label>
                <input type="text" value={profile.panCard} readOnly />
              </div>
            </div>
            <div className="kyc-status">
              <span className="kyc-label">KYC Status:</span>
              <span className={`kyc-badge verified`}>{profile.kycStatus}</span>
            </div>
            <div className="form-actions">
              <button className="action-btn primary">Edit Profile</button>
              <button className="action-btn">Change Password</button>
            </div>
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
          <button className="nav-item" onClick={() => handleNavClick('/product-management')}>Product Management</button>
          <button className="nav-item" onClick={() => handleNavClick('/order-management')}>Order Management</button>
          <button className="nav-item" onClick={() => handleNavClick('/returns-refunds')}>Returns & Refunds</button>
          <button className="nav-item" onClick={() => handleNavClick('/inventory-management')}>Inventory Management</button>
          <button className="nav-item" onClick={() => handleNavClick('/payments-earnings')}>Payments & Earnings</button>
          <button className="nav-item" onClick={() => handleNavClick('/ratings-reviews')}>Ratings & Reviews</button>
          <button className="nav-item active" onClick={() => handleNavClick('/profile-kyc')}>Profile & KYC</button>
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
