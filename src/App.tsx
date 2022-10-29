import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import MyPage from "./pages/my-page";
import MyRecord from "./pages/my-record";
import ColumnPage from "./pages/column";
import PrivateRoute from "./auth/PrivateRoute";
import RestrictedRoute from "./auth/RestrictedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ColumnPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/my-record" element={<MyRecord />} />
        </Route>
        <Route path="/login" element={<RestrictedRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
