import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProductForm from "./components/ProductForm";
import LoginSeller from "./pages/LoginSeller";
import RegisterSeller from "./pages/RegislerSeller";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/newProduct" element={<ProductForm />} />
          <Route path="/login-seller" element={<LoginSeller/>}></Route>
          <Route path="/register-seller" element={<RegisterSeller/>}></Route>
        </Routes>

        <Sidebar></Sidebar>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
