import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateProduct from "../pages/CreateProduct";
import ShowProducts from "../pages/ShowProducts";

function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/stock" element={<ShowProducts />} />
      </Routes>
    </>
  );
}

export default Rutas;
