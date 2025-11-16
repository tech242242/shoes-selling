import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "./config";

const productsRef = collection(db, "products");

export const getAllProducts = async () => {
  const snap = await getDocs(productsRef);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snap = await getDoc(docRef);
  if (snap.exists()) return { id: snap.id, ...snap.data() };
  return null;
};

export const getProductsByCategory = async (categoryId) => {
  const q = query(productsRef, where("category", "==", categoryId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};
