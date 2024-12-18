// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import DashboardPage from "../pages/Dashboard";
import Pricing from "../pages/Pricing";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/pricing" element={<Pricing />} />


      {/* Protected Routes */}
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
