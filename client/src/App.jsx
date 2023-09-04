import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./views/Home";
import Layout from "./layout/Layout";
import TakeMeToAdmin from "./components/TakeMeToAdmin";
import Register from "./auth/Register";
import AddProduct from "./views/AddProduct";
import Dashboard from "./views/client/Dashboard";
import Profile from "./views/client/Profile";
import Credit from "./views/client/Credit";
import Security from "./views/client/Security";

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
                <AddProduct />
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
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/client/profile"
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
            path="/client/security"
            element={
              <Layout {...paramater}>
                <Security />
              </Layout>
            }
          />
          {/* Client Routes End */}

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
