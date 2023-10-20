import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./navbar/Header";


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/checkout" element={<h1>checkoutpage</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}
