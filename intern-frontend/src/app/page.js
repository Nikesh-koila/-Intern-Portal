"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/login");
  };

  return (
    <div className="relative min-h-screen bg-gray-50 text-black">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Intern Portal</h1>
            <button
              onClick={handleGetStarted}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pt-16 ">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Intern Portal
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Track your donations, compete with peers, and unlock rewards
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">
              Monitor your donation goals and achievements
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Leaderboard</h3>
            <p className="text-gray-600">
              Compete with other interns and climb rankings
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
            <p className="text-gray-600">
              Unlock badges and achievements for your efforts
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 absolute bottom-0 w-full">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Intern Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default page;
