// src/pages/Home.jsx
import React from 'react';
import Map from '../components/Map';
import { photographers } from '../data';

export default function Home() {
  const featured = photographers.slice(0, 3); // Change how many to feature

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="bg-gray-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Capture Connecticut</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="text-center px-4 py-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Welcome to Capture Connecticut</h2>
        <p className="text-lg text-gray-600">
          Discover, connect, and book talented local photographers from across Connecticut. From portraits to sports, we've got your moments covered.
        </p>
      </section>

      {/* Connecticut Map */}
      <section className="px-4 py-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-4">Explore by Location</h3>
        <Map />
      </section>

      {/* Featured Photographers */}
      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Featured Photographers</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <div key={p.id} className="bg-white rounded-lg shadow p-4 text-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-2"
                />
                <h4 className="text-lg font-semibold">{p.name}</h4>
                <p className="text-gray-500">{p.city}</p>
                <a
                  href={`/profile/${p.id}`}
                  className="inline-block mt-2 text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
