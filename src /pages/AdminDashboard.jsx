import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="fade-in-up container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-bt-red">Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link to="/admin/add-product" className="block bg-bt-dark rounded-lg p-6 shadow-3d-card hover:bg-gray-800 transition">
          <h3 className="text-xl font-semibold text-white">Add Product</h3>
        </Link>
        <Link to="/admin/products" className="block bg-bt-dark rounded-lg p-6 shadow-3d-card hover:bg-gray-800 transition">
          <h3 className="text-xl font-semibold text-white">Manage Products</h3>
        </Link>
      </div>
    </div>
  )
}
