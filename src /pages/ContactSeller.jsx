import React from "react";
import { useLocation } from "react-router-dom";

export default function ContactSeller() {
  const location = useLocation();
  const { sellerNumber, productName } = location.state || {};

  if(!sellerNumber) return <p className="text-center mt-10">No seller information available.</p>

  return (
    <div className="fade-in-up max-w-md mx-auto mt-10 bg-bt-dark p-6 rounded-lg shadow-3d-card">
      <h2 className="text-2xl font-bold mb-4 text-bt-red">Contact Seller</h2>
      <p className="mb-4">Product: <strong>{productName}</strong></p>
      <p className="mb-4">Seller Phone: <strong>{sellerNumber}</strong></p>
      <a href={`https://wa.me/${sellerNumber}`} className="inline-block bg-bt-red text-black px-5 py-3 rounded font-semibold">
        Message on WhatsApp
      </a>
    </div>
  )
}
