import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import { FiBell, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { FaThLarge } from "react-icons/fa";
import "./Dashboard.css";

/**
 * Demo asset path (you uploaded demo.jpg). Keep as-is or replace with your own.
 * Developer note: /mnt/data/demo.jpg is the uploaded file path.
 */
const demoImage = "/mnt/data/demo.jpg";

const salesData = [
  { month: "2025-04", sales: 2000 },
  { month: "2025-05", sales: 3500 },
  { month: "2025-06", sales: 5000 },
  { month: "2025-07", sales: 12000 },
  { month: "2025-08", sales: 26000 },
  { month: "2025-09", sales: 42000 },
  { month: "2025-10", sales: 77200 },
];

const topProducts = [
  { name: "Premium Leather", value: 11 },
  { name: "CompBeam X9", value: 10 },
  { name: "Allium Leather", value: 4 },
  { name: "Wheelset", value: 3 },
];

const gaugeData = [
  { name: "In Stock", value: 6, fill: "#d946ef" },
  { name: "Low Stock", value: 3, fill: "#6366f1" },
];

const recentOrders = [
  { id: 7, date: "10/6/2025 4:05 PM", status: "cancelled", total: 295.0 },
  { id: 9, date: "10/6/2025 5:33 PM", status: "cancelled", total: 295.0 },
  { id: 10, date: "10/6/2025 5:34 PM", status: "confirmed", total: 295.0 },
  { id: 11, date: "10/6/2025 5:36 PM", status: "confirmed", total: 295.0 },
  { id: 12, date: "10/7/2025 5:32 PM", status: "confirmed", total: 6685.88 },
  { id: 13, date: "10/7/2025 5:32 PM", status: "confirmed", total: 6685.88 },
  { id: 14, date: "10/7/2025 5:32 PM", status: "cancelled", total: 236.0 },
];

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
          <button className="nav-item active" onClick={() => handleNavClick('/')}>
            <FaThLarge className="nav-icon" />
            <span>Dashboard</span>
          </button>
          <button className="nav-item" onClick={() => handleNavClick('/product-management')}>Product Management</button>
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

function Header() {
  return (
    <header className="header">
      <h1 className="page-title">Dashboard</h1>
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

function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

/* ----------------- Chart section requested exactly: left big, right stacked ----------------- */
function ChartsBlock() {
  return (
    <section className="charts-block">
      {/* LEFT: BIG SALES TRENDS */}
      <div className="big-card sales-card">
        <div className="card-head">
          <div className="card-title">Sales Trends</div>
          <div className="card-sub">₹92,582</div>
        </div>

        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#93c5fd" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#0ea5e9" strokeWidth={3} dot={false} />
              {/* area under line with gradient */}
              <Line type="monotone" dataKey="sales" stroke="transparent" activeDot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card-footer">
          <a className="download">Download Report</a>
        </div>
      </div>

      {/* RIGHT: stacked: Monthly Orders (top) and Top Products (bottom) */}
      <aside className="right-stack">
        <div className="small-card orders-card">
          <div className="card-head">
            <div className="card-title">Monthly Orders</div>
            <div className="card-sub small">17</div>
          </div>
          <div className="mini-chart">
            {/* simple dots to emulate small timeline */}
            <div className="dots">
              <div className="dot dot-small" />
              <div className="dot dot-medium" />
              <div className="dot dot-large" />
            </div>
          </div>
          <div className="card-footer small">
            <a className="download">Download Report</a>
          </div>
        </div>

        <div className="small-card top-products-card">
          <div className="card-head">
            <div className="card-title">Top Products (2025-10)</div>
            <select className="month-select" defaultValue="Oct 2025">
              <option>Oct 2025</option>
              <option>Sep 2025</option>
            </select>
          </div>

          <div className="chart-wrap-small">
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={topProducts} layout="horizontal" margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#a855f7" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="card-footer small">
            <div className="muted">29 total sold</div>
            <a className="download">Download Report</a>
          </div>
        </div>
      </aside>
    </section>
  );
}

/* Products Overview Gauge + Recent Orders */
function BottomBlock() {
  return (
    <section className="bottom-block">
      <div className="left-bottom card">
        <div className="card-title">Products Overview</div>
        <div className="gauge-wrap">
          <ResponsiveContainer width="100%" height={180}>
            <RadialBarChart
              cx="50%"
              cy="70%"
              innerRadius="60%"
              outerRadius="100%"
              startAngle={180}
              endAngle={0}
              data={gaugeData}
            >
              <RadialBar background dataKey="value" cornerRadius={10} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="gauge-center">
            <div className="gauge-number">9</div>
            <div className="gauge-label">Total Products</div>
          </div>
        </div>

        <ul className="stock-legend">
          <li><span className="legend color1" /> In Stock <span className="muted">6</span></li>
          <li><span className="legend color2" /> Low Stock <span className="muted">3</span></li>
          <li><span className="legend color3" /> Out of Stock <span className="muted">0</span></li>
        </ul>
      </div>

      <div className="right-bottom card orders-table-card">
        <div className="table-head">
          <div className="card-title">Recent Orders</div>
          <button className="download-btn">Download Report</button>
        </div>

        <div className="table-scroll">
          <table className="orders-table">
            <thead>
              <tr>
                <th></th>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id}>
                  <td><input type="checkbox" /></td>
                  <td>{o.id}</td>
                  <td>{o.date}</td>
                  <td><span className={`badge ${o.status}`}>{o.status}</span></td>
                  <td>${o.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <div className="muted">Page 1 of 2</div>
          <div>
            <button className="pbtn">Prev</button>
            <button className="pbtn">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dashboard-root">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} navigate={navigate} />
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </button>
      <main className="main-area">
        <Header />

        <section className="top-stats">
          <StatCard title="Total Sales" value="92.6k" />
          <StatCard title="Total Products" value="9" />
          <StatCard title="Total Profit" value="92.6k" />
        </section>

        {/* The exact layout you asked: big left card, stacked right column */}
        <ChartsBlock />

        {/* Bottom: left products overview, right recent orders */}
        <BottomBlock />
      </main>
    </div>
  );
}
