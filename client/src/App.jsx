import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import TakeMeToAdmin from "./components/TakeMeToAdmin";
import Layout from "./layout/Layout";
import AddProduct from "./views/AddProduct";
import Home from "./views/Home";
import Credit from "./views/client/Credit";
import UserDashboard from "./views/client/Dashboard";
import Profile from "./views/client/Profile";
import Security from "./views/client/Security";
import CreditManagement from "./views/corporate/CreditManagement";
import CorporateDashboard from "./views/corporate/Dashboard";
import UserManagement from "./views/corporate/UserManagement";
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
          {/* <Route
            path="/profile"
            element={
              <Layout {...paramater}>
                <Profile />
              </Layout>
            }
          /> */}
          <Route
            path="/client/credit"
            element={
              <Layout {...paramater}>
                <Credit />
              </Layout>
            }
          />
          {/* <Route
            path="/security"
            element={
              <Layout {...paramater}>
                <Security />
              </Layout>
            }
          /> */}
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
            path="/corporate/credit"
            element={
              <Layout {...paramater}>
                <CreditManagement />
              </Layout>
            }
          />
          <Route
            path="/corporate/user"
            element={
              <Layout {...paramater}>
                <UserManagement />
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
