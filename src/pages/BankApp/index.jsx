// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BankApp from "./BankApp";  // Importa o componente principal
import "./index.css";  // Estilos globais

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<BankApp />} />
        <Route path="/login" element={<h1>Página de Login</h1>} />
        <Route path="/app" element={<h1>Área de Investimentos</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
