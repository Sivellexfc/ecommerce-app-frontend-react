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
import MyStore from "./pages/MyStore";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header userRole={localStorage.getItem("userRole")} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/newProduct" element={<ProductForm />} />
          <Route path="/login-seller" element={<LoginSeller/>}></Route>
          <Route path="/register-seller" element={<RegisterSeller/>}></Route>
          <Route path="/seller-dashboard" element={<MyStore></MyStore>}></Route>
        </Routes>

        <Sidebar></Sidebar>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
