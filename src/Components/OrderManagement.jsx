import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import "./SharedPages.css";

const demoImage = "/mnt/data/demo.jpg";

const orders = [
  { id: 1001, customer: "John Doe", date: "2025-10-15", status: "Delivered", total: 2500 },
  { id: 1002, customer: "Jane Smith", date: "2025-10-16", status: "Processing", total: 3200 },
  { id: 1003, customer: "Mike Johnson", date: "2025-10-17", status: "Shipped", total: 1800 },
  { id: 1004, customer: "Sarah Williams", date: "2025-10-18", status: "Pending", total: 4500 },
  { id: 1005, customer: "Tom Brown", date: "2025-10-19", status: "Delivered", total: 2100 },
];

export default function OrderManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dashboard-root">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} navigate={navigate} />
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>
      <main className="main-area">
        <Header title="Order Management" />
        <section className="content-section">
          <div className="section-title">All Orders</div>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td data-label="Order ID">{o.id}</td>
                    <td data-label="Customer">{o.customer}</td>
                    <td data-label="Date">{o.date}</td>
                    <td data-label="Status">
                      <span className={`status-badge ${o.status.toLowerCase().replace(" ", "-")}`}>
                        {o.status}
                      </span>
                    </td>
                    <td data-label="Total">₹{o.total}</td>
                    <td data-label="Action">
                      <button className="action-btn">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <button className="nav-item active" onClick={() => handleNavClick('/order-management')}>Order Management</button>
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
