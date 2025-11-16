import React, { useState } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function UploadImage({ onUpload }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);
    const urls = [];
    for (let file of files) {
      const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
      const uploadTask = await uploadBytesResumable(storageRef, file);
      const url = await getDownloadURL(uploadTask.ref);
      urls.push(url);
    }
    onUpload(urls);
    setUploading(false);
  }

  return (
    <input type="file" multiple accept="image/*" onChange={handleUpload} disabled={uploading} className="p-2 rounded bg-gray-800 text-white"/>
  )
}
