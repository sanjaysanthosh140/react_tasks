import React, { useState } from "react";
import { FiBell, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import "./SharedPages.css";

const demoImage = "/mnt/data/demo.jpg";

const tickets = [
  { id: "TKT001", subject: "Product Quality Issue", status: "Open", date: "2025-10-18", priority: "High" },
  { id: "TKT002", subject: "Shipping Delay", status: "In Progress", date: "2025-10-17", priority: "Medium" },
  { id: "TKT003", subject: "Account Access Problem", status: "Resolved", date: "2025-10-15", priority: "High" },
];

export default function SupportHelp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-root">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>
      <main className="main-area">
        <Header title="Support/Help" />
        <section className="content-section">
          <div className="section-title">Support Tickets</div>
          <button className="btn-primary">Create New Ticket</button>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((t) => (
                  <tr key={t.id}>
                    <td data-label="Ticket ID">{t.id}</td>
                    <td data-label="Subject">{t.subject}</td>
                    <td data-label="Status">
                      <span className={`status-badge ${t.status.toLowerCase().replace(" ", "-")}`}>
                        {t.status}
                      </span>
                    </td>
                    <td data-label="Priority">{t.priority}</td>
                    <td data-label="Date">{t.date}</td>
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
          <button className="nav-item">Payments & Earnings</button>
          <button className="nav-item">Ratings & Reviews</button>
          <button className="nav-item">Profile & KYC</button>
          <button className="nav-item active">Support/Help</button>
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
