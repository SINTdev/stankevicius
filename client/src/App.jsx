import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./views/Home";
import Layout from "./layout/Layout";
import TakeMeToAdmin from "./components/TakeMeToAdmin";
import Register from "./auth/Register";
import AddProduct from "./views/AddProduct";
import UserDashboard from "./views/client/Dashboard";
import CorporateDashboard from "./views/corporate/Dashboard";
import Profile from "./views/client/Profile";
import Credit from "./views/client/Credit";
import Security from "./views/client/Security";
import CreditManagement from "./views/corporate/CreditManagement";
// import CategoryManagement from "./views/corporate/CategoryManagement";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const paramater = {
    isMenuOpen: isMenuOpen,
    setIsMenuOpen: setIsMenuOpen,
    isAccountMenuOpen: isAccountMenuOpen,
    setIsAccountMenuOpen: setIsAccountMenuOpen,
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout {...paramater}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/addProduct"
            element={
              <Layout {...paramater}>
                <AddProduct edit={false} />
              </Layout>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <Layout {...paramater}>
                <AddProduct edit={true} />
              </Layout>
            }
          />
          <Route
            path="/reset/:token"
            element={
              <Layout {...paramater}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/verify/:emailToken"
            element={
              <Layout {...paramater}>
                <Home />
              </Layout>
            }
          />
          <Route path="/admin" element={<TakeMeToAdmin />} />

          {/* Client Routes Start */}
          <Route
            path="/client"
            element={
              <Layout {...paramater}>
                <UserDashboard />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout {...paramater}>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/client/credit"
            element={
              <Layout {...paramater}>
                <Credit />
              </Layout>
            }
          />
          <Route
            path="/security"
            element={
              <Layout {...paramater}>
                <Security />
              </Layout>
            }
          />
          {/* Client Routes End */}
          {/* Corporate Routes Start */}

          <Route
            path="/corporate"
            element={
              <Layout {...paramater}>
                <CorporateDashboard />
              </Layout>
            }
          />
          <Route
            path="/corporate/categories"
            element={
              <Layout {...paramater}>
                <CorporateDashboard category={true} />
              </Layout>
            }
          />
          <Route
            path="/corporate/credit"
            element={
              <Layout {...paramater}>
                <CreditManagement />
              </Layout>
            }
          />
          {/* Corporate Routes End */}
          <Route
            path="*"
            element={
              <Layout {...paramater}>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
