import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./views/Home";
import Layout from "./layout/Layout";
import TakeMeToAdmin from "./components/TakeMeToAdmin";
import Register from "./auth/Register";
import AddProduct from "./views/AddProduct";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
                <Home isMenuOpen={isMenuOpen} />
              </Layout>
            }
          />
          <Route
            path="/addProduct"
            element={
              <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
                <AddProduct isMenuOpen={isMenuOpen} />
              </Layout>
            }
          />
          <Route
            path="/reset/:token"
            element={
              <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
                <Home isMenuOpen={isMenuOpen} />
              </Layout>
            }
          />
          <Route
            path="/verify/:emailToken"
            element={
              <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
                <Home isMenuOpen={isMenuOpen} />
              </Layout>
            }
          />
          <Route path="/admin" element={<TakeMeToAdmin />} />
          <Route
            path="*"
            element={
              <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
                <Home isMenuOpen={isMenuOpen} />
              </Layout>
            }
          />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
