import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bt-dark bg-opacity-80 backdrop-blur-md px-6 py-3 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-bt-red font-bold text-2xl">Back-to-Streets</Link>
      <ul className="flex gap-6 text-white font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories/school-shoes">School Shoes</Link></li>
        <li><Link to="/categories/joggers">Joggers</Link></li>
        <li><Link to="/categories/jordans">Jordans</Link></li>
        <li><Link to="/categories/sneakers">Sneakers</Link></li>
        <li><Link to="/categories/slippers">Slippers</Link></li>
        <li><Link to="/categories/casual">Casual</Link></li>
      </ul>
    </nav>
  )
}
