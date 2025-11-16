import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShoeCard from "../components/ShoeCard";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function CategoryPage(){
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function load(){
      setLoading(true);
      try{
        const q = query(collection(db, "products"), where("category", "==", category));
        const snap = await getDocs(q);
        const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setProducts(items);
      }catch(err){
        console.error(err);
      }finally{
        setLoading(false);
      }
    }
    load();
  }, [category]);

  return (
    <div className="fade-in-up">
      <h2 className="text-3xl font-bold mb-4">{category.replace('-', ' ').toUpperCase()}</h2>
      {loading ? <p>Loading...</p> : (
        products.length === 0 ? <p className="text-bt-muted">No items in this category.</p> :
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => <ShoeCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  )
}
