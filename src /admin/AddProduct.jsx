import React, { useState } from "react";
import { db, storage } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    size: "",
    color: "",
    location: "",
    sellerNumber: "",
    description: "",
    images: []
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  }

  const handleImageChange = (e) => {
    setProduct(prev => ({ ...prev, images: Array.from(e.target.files) }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.category || product.images.length === 0) return alert("Please fill all required fields.");

    try {
      setUploading(true);
      const urls = [];
      for (let file of product.images) {
        const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
        const uploadTask = await uploadBytesResumable(storageRef, file);
        const downloadURL = await getDownloadURL(uploadTask.ref);
        urls.push(downloadURL);
      }

      await addDoc(collection(db, "products"), {
        ...product,
        images: urls,
        price: Number(product.price),
        timestamp: serverTimestamp()
      });

      alert("Product added successfully!");
      setProduct({ name:"", price:"", category:"", size:"", color:"", location:"", sellerNumber:"", description:"", images:[] });

    } catch (err) {
      console.error(err);
      alert("Error adding product!");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="fade-in-up max-w-2xl mx-auto bg-bt-dark p-6 rounded-lg shadow-3d-card">
      <h2 className="text-2xl font-bold mb-4 text-bt-red">Add New Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name*" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price PKR*" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category (school-shoes/joggers/...)*" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="text" name="size" value={product.size} onChange={handleChange} placeholder="Size" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="text" name="color" value={product.color} onChange={handleChange} placeholder="Color" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="text" name="location" value={product.location} onChange={handleChange} placeholder="Location" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="text" name="sellerNumber" value={product.sellerNumber} onChange={handleChange} placeholder="Seller Phone" className="p-2 rounded bg-gray-800 text-white"/>
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="file" multiple accept="image/*" onChange={handleImageChange} className="p-2 rounded bg-gray-800 text-white"/>
        <button type="submit" disabled={uploading} className="bg-bt-red text-black p-2 rounded font-semibold mt-2">
          {uploading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  )
}
