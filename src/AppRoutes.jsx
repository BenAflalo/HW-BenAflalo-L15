import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AuthProvider from "./context/AuthProvider";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

const App2 = () => {
  return (
    <main>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </main>
  );
};

export default App2;
