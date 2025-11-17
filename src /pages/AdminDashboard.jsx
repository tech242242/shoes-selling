import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-bt-red">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-white">Welcome, {user?.email}</span>
            <button 
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/admin/add" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold text-bt-red mb-2">Add Product</h3>
            <p className="text-gray-300">Add new shoes to your store</p>
          </Link>

          <Link to="/admin/products" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold text-bt-red mb-2">Manage Products</h3>
            <p className="text-gray-300">View, edit or delete products</p>
          </Link>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-bt-red mb-2">Store Stats</h3>
            <p className="text-gray-300">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
