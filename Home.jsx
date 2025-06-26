// src/pages/Home.jsx
import React from 'react';
import Map from '../components/Map';

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Capture Connecticut
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover, connect, and book local photographers in your area. Whether you're capturing senior portraits, sports moments, or lifestyle shots — we've got you covered.
        </p>
        <img
          src="/hero.jpg"
          alt="Connecticut photography"
          className="w-full max-h-[400px] object-cover rounded-xl shadow-md mb-10"
        />
      </div>

      {/* Connecticut Map Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Explore Photographers by Location</h2>
        <Map />
      </div>
    </div>
  );
}
