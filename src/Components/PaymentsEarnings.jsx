import React, { useState } from "react";
import { FiBell, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import "./SharedPages.css";

const demoImage = "/mnt/data/demo.jpg";

const payments = [
  { id: "PAY001", date: "2025-10-15", amount: 45000, method: "Bank Transfer", status: "Completed" },
  { id: "PAY002", date: "2025-10-16", amount: 32500, method: "UPI", status: "Completed" },
  { id: "PAY003", date: "2025-10-17", amount: 18900, method: "Card", status: "Pending" },
  { id: "PAY004", date: "2025-10-18", amount: 67200, method: "Bank Transfer", status: "Completed" },
];

export default function PaymentsEarnings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-root">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>
      <main className="main-area">
        <Header title="Payments & Earnings" />
        <section className="content-section">
          <div className="section-title">Payment Transactions</div>
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-label">Total Earnings</div>
              <div className="stat-value">₹1,63,600</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Pending Amount</div>
              <div className="stat-value">₹18,900</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Total Transactions</div>
              <div className="stat-value">4</div>
            </div>
          </div>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p) => (
                  <tr key={p.id}>
                    <td data-label="Payment ID">{p.id}</td>
                    <td data-label="Date">{p.date}</td>
                    <td data-label="Amount">₹{p.amount}</td>
                    <td data-label="Method">{p.method}</td>
                    <td data-label="Status">
                      <span className={`status-badge ${p.status.toLowerCase().replace(" ", "-")}`}>
                        {p.status}
                      </span>
                    </td>
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
          <button className="nav-item active">Payments & Earnings</button>
          <button className="nav-item">Ratings & Reviews</button>
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
