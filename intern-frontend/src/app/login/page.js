"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login - just redirect to dashboard
    localStorage.setItem("userId", "1");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-black">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Intern Portal
        </h1>

        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 px-4 rounded-l-lg ${
              isLogin
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 cursor-pointer"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-r-lg ${
              !isLogin
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 cursor-pointer"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold cursor-pointer"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
