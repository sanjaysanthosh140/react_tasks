import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import "./SharedPages.css";

const demoImage = "/mnt/data/demo.jpg";

export default function AccountSettings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsAlerts: false,
    autoRenewal: true,
    dataBackup: true,
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="dashboard-root">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>
      <main className="main-area">
        <Header title="Account Settings" />
        <section className="content-section">
          <div className="section-title">General Settings</div>
          <div className="settings-card">
            <div className="setting-item">
              <div className="setting-label">
                <div className="setting-title">Email Notifications</div>
                <div className="setting-desc">Receive email notifications for important updates</div>
              </div>
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={() => handleToggle("emailNotifications")}
              />
            </div>
            <div className="setting-item">
              <div className="setting-label">
                <div className="setting-title">SMS Alerts</div>
                <div className="setting-desc">Get SMS alerts for order updates</div>
              </div>
              <input
                type="checkbox"
                checked={settings.smsAlerts}
                onChange={() => handleToggle("smsAlerts")}
              />
            </div>
            <div className="setting-item">
              <div className="setting-label">
                <div className="setting-title">Auto Renewal</div>
                <div className="setting-desc">Automatically renew subscription</div>
              </div>
              <input
                type="checkbox"
                checked={settings.autoRenewal}
                onChange={() => handleToggle("autoRenewal")}
              />
            </div>
            <div className="setting-item">
              <div className="setting-label">
                <div className="setting-title">Data Backup</div>
                <div className="setting-desc">Automatic backup of your data</div>
              </div>
              <input
                type="checkbox"
                checked={settings.dataBackup}
                onChange={() => handleToggle("dataBackup")}
              />
            </div>
          </div>
          <div className="settings-actions">
            <button className="action-btn primary">Save Changes</button>
            <button className="action-btn">Reset to Default</button>
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
          <button className="nav-item" onClick={() => handleNavClick('/profile-kyc')}>Profile & KYC</button>
          <button className="nav-item" onClick={() => handleNavClick('/support-help')}>Support/Help</button>
          <button className="nav-item active" onClick={() => handleNavClick('/account-settings')}>Account Settings</button>
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
