// import "./App.css";
import "../src/index.css";
import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/Products" element={<Products />} />
    <Route path="/SingleProduct/:id" element={<SingleProduct />} />
    <Route path="/Cart" element={<Cart />} />
    <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>

  );
}

export default App;
