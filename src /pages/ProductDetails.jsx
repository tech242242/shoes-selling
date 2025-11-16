import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function ProductDetails(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(()=>{
    async function load(){
      const ref = doc(db, "products", id);
      const snap = await getDoc(ref);
      if(snap.exists()){
        setProduct({ id: snap.id, ...snap.data() });
      }
    }
    load();
  }, [id]);

  if(!product) return <p>Loading...</p>;

  return (
    <div className="fade-in-up grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="rounded-lg overflow-hidden">
          {/* Simple image gallery */}
          {product.images?.length ? (
            <img src={product.images[0]} alt={product.name} className="w-full h-96 object-cover" />
          ) : (
            <div className="w-full h-96 bg-gray-800 flex items-center justify-center">No image</div>
          )}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-semibold text-bt-red mb-4">PKR {product.price}</p>
        <p className="mb-4 text-bt-muted">{product.description}</p>
        <div className="mb-4">
          <strong>Size:</strong> {product.size || 'N/A'} <br/>
          <strong>Color:</strong> {product.color || 'N/A'} <br/>
          <strong>Location:</strong> {product.location || 'N/A'} <br/>
          <strong>Seller:</strong> <a href={`tel:${product.sellerNumber}`} className="text-bt-red">{product.sellerNumber || 'N/A'}</a>
        </div>

        <div className="flex gap-3">
          <a className="inline-block px-5 py-3 bg-bt-red rounded-md text-black font-semibold" href={`https://wa.me/${product.sellerNumber}`}>Message on WhatsApp</a>
          <Link to="/" className="inline-block px-5 py-3 border border-gray-700 rounded-md">Back</Link>
        </div>
      </div>
    </div>
  )
}
