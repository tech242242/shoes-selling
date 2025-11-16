import React from "react";
import { Link } from "react-router-dom";

export default function ShoeCard({ product }){
  return (
    <Link to={`/product/${product.id}`} className="block shoe-card-3d bg-gradient-to-b from-black/60 to-black/40 rounded-xl p-4">
      <div className="relative overflow-hidden rounded-lg">
        <img src={product.images?.[0] || 'https://i.ibb.co/4R3r0LBm/49611315729d7b19fd06d9c0d41980cd.jpg'} alt={product.name} className="w-full h-56 object-cover rounded-md" />
        <div className="absolute top-3 right-3 bg-black/60 px-2 py-1 rounded-md text-sm">{product.category}</div>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-bt-red font-bold">PKR {product.price}</span>
          <span className="text-sm text-bt-muted">{product.location || 'Unknown'}</span>
        </div>
      </div>
    </Link>
  )
}
