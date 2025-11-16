import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      navigate("/admin/dashboard");
    } catch(err) {
      console.error(err);
      alert("Login failed!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fade-in-up max-w-sm mx-auto mt-20 p-6 bg-bt-dark rounded-lg shadow-3d-card">
      <h2 className="text-2xl font-bold mb-4 text-bt-red">Admin Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="p-2 rounded bg-gray-800 text-white"/>
        <button type="submit" disabled={loading} className="bg-bt-red text-black p-2 rounded font-semibold mt-2">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  )
}
