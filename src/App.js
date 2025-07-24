// ========================
// Core Imports
// ========================
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ========================
// Global Layout Components
// ========================
import Header from "./components/Header";
import Footer from "./components/Footer";

// ========================
// Page Routes
// ========================
import Homepage from "./pages/Homepage";

// ========================
// App Component
// ========================
const App = () => {
  return (
    <Router>
      {/* Global Site Header */}
      <Header />

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

      {/* Global Site Footer */}
      <Footer />
    </Router>
  );
};

export default App;
