import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Dashboard from "./Components/Dashboard"
import ProductManagement from "./Components/ProductManagement"
import OrderManagement from "./Components/OrderManagement"
import ReturnsRefunds from "./Components/ReturnsRefunds"
import InventoryManagement from "./Components/InventoryManagement"
import PaymentsEarnings from "./Components/PaymentsEarnings"
import RatingsReviews from "./Components/RatingsReviews"
import ProfileKYC from "./Components/ProfileKYC"
import SupportHelp from "./Components/SupportHelp"
import AccountSettings from "./Components/AccountSettings"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/product-management" element={<ProductManagement/>} />
        <Route path="/order-management" element={<OrderManagement/>} />
        <Route path="/returns-refunds" element={<ReturnsRefunds/>} />
        <Route path="/inventory-management" element={<InventoryManagement/>} />
        <Route path="/payments-earnings" element={<PaymentsEarnings/>} />
        <Route path="/ratings-reviews" element={<RatingsReviews/>} />
        <Route path="/profile-kyc" element={<ProfileKYC/>} />
        <Route path="/support-help" element={<SupportHelp/>} />
        <Route path="/account-settings" element={<AccountSettings/>} />
      </Routes>
    </Router>
  )
}

export default App
