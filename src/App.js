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
import NewStoreForm from "./components/NewStoreForm";
import MyStore from "./pages/MyStore";
import UpdateProductForm from "./components/UpdateProductForm";
import RegisterCustomer from "./pages/RegisterCustomer";
import LoginCustomer from "./pages/LoginCustomer";
import CompleteOrder from "./pages/CompleteOrder";

const App = () => {
  return (
    <div className="flex flex-col  overflow-hidden">
      <Router>

        <Header userRole={localStorage.getItem("userRole")} />
        <div className="flex-grow flex">
        <Sidebar></Sidebar>

            <main className="flex-grow">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/newProduct" element={<ProductForm />} />
                  <Route path="/login-seller" element={<LoginSeller/>}></Route>
                  <Route path="/login-customer" element={<LoginCustomer/>}></Route>
                  <Route path="/register-seller" element={<RegisterSeller/>}></Route>
                  <Route path="/register-customer" element={<RegisterCustomer/>}></Route>
                  <Route path="/seller-dashboard" element={<MyStore></MyStore>}></Route>
                  <Route path="/new-store" element={<NewStoreForm></NewStoreForm>} ></Route>
                  <Route path="/complete-order" element={<CompleteOrder></CompleteOrder>} ></Route>
                  <Route path="/edit-product/:productId" element={<UpdateProductForm></UpdateProductForm>}></Route>
                </Routes>
            </main>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
