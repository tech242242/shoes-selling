import React from "react";
import { Link } from "react-router-dom";
import ShoeCard from "../components/ShoeCard";

const categories = [
  { id: "school-shoes", name: "School Shoes", img: "https://i.ibb.co/6YQ8g5r/school.jpg" },
  { id: "joggers", name: "Joggers", img: "https://i.ibb.co/7y7k8Jm/joggers.jpg" },
  { id: "jordans", name: "Jordans", img: "https://i.ibb.co/xjW1qD9/jordans.jpg" },
  { id: "sneakers", name: "Sneakers", img: "https://i.ibb.co/2q3Gv0S/sneakers.jpg" },
  { id: "slippers", name: "Slippers", img: "https://i.ibb.co/2nT9c7y/slippers.jpg" },
  { id: "casual", name: "Casual", img: "https://i.ibb.co/3s3c3s3/casual.jpg" }
];

export default function Home(){
  return (
    <div className="fade-in-up">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold">Back-to-Streets</h1>
        <p className="text-bt-muted mt-2">Premium streetwear shoes — fast upload & easy sell.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map(c => (
            <Link key={c.id} to={`/categories/${c.id}`} className="group block rounded-lg overflow-hidden relative">
              <img src={c.img} alt={c.name} className="w-full h-40 object-cover transform group-hover:scale-105 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-lg font-semibold">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example cards (replace with realtime data later) */}
          <ShoeCard product={{
            id: "demo-1",
            name: "Street Runner",
            price: 7999,
            images: ["https://i.ibb.co/4R3r0LBm/49611315729d7b19fd06d9c0d41980cd.jpg"],
            category: "sneakers",
            location: "Lahore"
          }}/>
          <ShoeCard product={{
            id: "demo-2",
            name: "Jordan Retro",
            price: 15999,
            images: ["https://i.ibb.co/GQw6Xwwt/b875cadf4323f561b442d18af6be4985.jpg"],
            category: "jordans",
            location: "Karachi"
          }}/>
        </div>
      </section>
    </div>
  )
}
