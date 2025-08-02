"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [intern, setIntern] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    axios.get("https://intern-backend-bnbu.onrender.com/intern").then((res) => {
      setIntern(res.data);
      setLoading(false);
    });
  }, []);

  const handleLeadboard = () => {
    router.push("/leadboard");
  };

  const handleLogout = () => {
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const rewards = [
    {
      amount: 1000,
      title: "Bronze Badge",
      icon: "🥉",
      unlocked: intern?.donations >= 1000,
    },
    {
      amount: 3000,
      title: "Silver Badge",
      icon: "🥈",
      unlocked: intern?.donations >= 3000,
    },
    {
      amount: 5000,
      title: "Gold Badge",
      icon: "🥇",
      unlocked: intern?.donations >= 5000,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <button
              className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {intern && (
          <>
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6 sm:p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Welcome, {intern.name}! 👋
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Here's your intern dashboard overview
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mb-8">
              {/* Referral Code Card */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Referral Code
                </h3>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-blue-600 break-all">
                    {intern.referralCode}
                  </p>
                  <button className="mt-2 text-sm text-blue-500 hover:text-blue-700 transition duration-200 cursor-pointer">
                    Copy Code
                  </button>
                </div>
              </div>

              {/* Total Donations Card */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Total Donations
                </h3>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-green-600">
                    ₹{intern.donations?.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">raised so far</p>
                </div>
              </div>
            </div>

            {/* Rewards Section */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                🎁 Rewards & Achievements
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {rewards.map((reward, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 text-center transition duration-300 ${
                      reward.unlocked
                        ? "bg-green-50 border-green-200 shadow-sm"
                        : "bg-gray-50 border-gray-200 opacity-60"
                    }`}
                  >
                    <div className="text-2xl mb-2">{reward.icon}</div>
                    <div
                      className={`font-semibold mb-1 ${
                        reward.unlocked ? "text-green-700" : "text-gray-500"
                      }`}
                    >
                      {reward.title}
                    </div>
                    <div
                      className={`text-sm ${
                        reward.unlocked ? "text-green-600" : "text-gray-400"
                      }`}
                    >
                      {reward.unlocked
                        ? "✅ Unlocked"
                        : `Raise ₹${reward.amount.toLocaleString()}`}
                    </div>
                  </div>
                ))}
              </div>

              {/* Static Rewards List */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-3">
                  All Available Rewards:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-3">🎁</span>
                    <span>Raise ₹1000 — Bronze Badge</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🎁</span>
                    <span>Raise ₹3000 — Silver Badge</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🎁</span>
                    <span>Raise ₹5000 — Gold Badge</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-medium cursor-pointer"
                onClick={handleLeadboard}
              >
                View Leaderboard
              </button>
              <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300 font-medium cursor-pointer">
                Share Referral Code
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
