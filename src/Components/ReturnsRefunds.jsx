import React, { useState } from "react";
import { FiBell, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import "./SharedPages.css";

const demoImage = "/mnt/data/demo.jpg";

const returns = [
  { id: "RET001", orderId: 1001, reason: "Defective", status: "Approved", amount: 2500 },
  { id: "RET002", orderId: 1003, reason: "Wrong Item", status: "Processing", amount: 1800 },
  { id: "RET003", orderId: 1005, reason: "Not Satisfied", status: "Approved", amount: 2100 },
];

export default function ReturnsRefunds() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-root">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>
      <main className="main-area">
        <Header title="Returns & Refunds" />
        <section className="content-section">
          <div className="section-title">Return Requests</div>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Return ID</th>
                  <th>Order ID</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {returns.map((r) => (
                  <tr key={r.id}>
                    <td data-label="Return ID">{r.id}</td>
                    <td data-label="Order ID">{r.orderId}</td>
                    <td data-label="Reason">{r.reason}</td>
                    <td data-label="Status">
                      <span className={`status-badge ${r.status.toLowerCase().replace(" ", "-")}`}>
                        {r.status}
                      </span>
                    </td>
                    <td data-label="Amount">₹{r.amount}</td>
                    <td data-label="Action">
                      <button className="action-btn">Details</button>
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
          <button className="nav-item active">Returns & Refunds</button>
          <button className="nav-item">Inventory Management</button>
          <button className="nav-item">Payments & Earnings</button>
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
