"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Leaderboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8000/leadboard").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const getRankIcon = (index) => {
    switch (index) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return `#${index + 1}`;
    }
  };

  const handledashboard = () => {
    router.push("/dashboard");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center ">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">🏆 Leaderboard</h1>
            <button
              className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer"
              onClick={handledashboard}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Leaderboard Header */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4">
            <h2 className="text-xl font-bold">Top Performers</h2>
            <p className="text-purple-100 text-sm">
              Ranked by total donations raised
            </p>
          </div>

          {/* Leaderboard List */}
          <div className="divide-y divide-gray-200">
            {data.map((user, i) => (
              <div
                key={i}
                className={`px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition duration-200 ${
                  i < 3 ? "bg-yellow-50" : ""
                }`}
              >
                {/* Rank and Name */}
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold min-w-12 text-black">
                    {getRankIcon(i)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                      {user.name}
                    </p>
                    {i < 3 && (
                      <p className="text-xs text-yellow-600">Top Performer</p>
                    )}
                  </div>
                </div>

                {/* Donation Amount */}
                <div className="text-right">
                  <p className="text-lg sm:text-xl font-bold text-green-600">
                    ₹{user.donations?.toLocaleString()}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">raised</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {data.length === 0 && (
            <div className="px-6 py-12 text-center text-gray-500">
              <p>No data available</p>
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-medium cursor-pointer"
            onClick={handledashboard}
          >
            Back to Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}
