import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/categories/${category.id}`} className="group relative block rounded-lg overflow-hidden shadow-3d-card">
      <img src={category.img} alt={category.name} className="w-full h-48 object-cover transform group-hover:scale-105 transition"/>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
      </div>
    </Link>
  )
}
