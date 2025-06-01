import React from "react";
import { Routes, Route } from "react-router";
import ProductListingPage from "../pages/ProductListingPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import FavoritesPage from "../pages/FavoritesPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListingPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};

export default AppRoutes;
