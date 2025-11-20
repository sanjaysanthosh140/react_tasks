import React, { useState } from "react";
import { FiBell, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import "./SharedPages.css";

const demoImage = "/mnt/data/demo.jpg";

const inventory = [
  { id: 1, name: "Premium Leather", warehouse: "Main", quantity: 120, reorderLevel: 50, location: "A-12" },
  { id: 2, name: "CompBeam X9", warehouse: "North", quantity: 45, reorderLevel: 30, location: "B-5" },
  { id: 3, name: "Allium Leather", warehouse: "South", quantity: 78, reorderLevel: 40, location: "C-8" },
  { id: 4, name: "Wheelset", warehouse: "East", quantity: 92, reorderLevel: 25, location: "D-15" },
];

export default function InventoryManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-root">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>
      <main className="main-area">
        <Header title="Inventory Management" />
        <section className="content-section">
          <div className="section-title">Stock Levels</div>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Warehouse</th>
                  <th>Quantity</th>
                  <th>Reorder Level</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td data-label="Product">{item.name}</td>
                    <td data-label="Warehouse">{item.warehouse}</td>
                    <td data-label="Quantity">{item.quantity}</td>
                    <td data-label="Reorder Level">{item.reorderLevel}</td>
                    <td data-label="Location">{item.location}</td>
                    <td data-label="Action">
                      <button className="action-btn">Edit</button>
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
          <button className="nav-item active">Inventory Management</button>
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
