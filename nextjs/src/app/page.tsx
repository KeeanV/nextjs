"use client";

import React, { useState } from "react";

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];

const businesses = [
  { id: 1, name: "Tech Store", location: "New York" },
  { id: 2, name: "Gym", location: "Los Angeles" },
  { id: 3, name: "Retail Store", location: "San Francisco" },
  { id: 4, name: "Office", location: "New York" },
];

const locations = ["All", ...new Set(businesses.map(b => b.location))];

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState("All");

  const filteredBusinesses = selectedLocation === "All" 
    ? businesses 
    : businesses.filter(b => b.location === selectedLocation);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 left-0 right-0 flex justify-between items-center">
        <h1 className="text-xl font-bold">next.Js App</h1>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="#" className="hover:underline">About</a>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="pt-16 p-4">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {users.map((user) => (
            <li key={user.id} className="border-b last:border-b-0 p-2">
              {user.name} - Age: {user.age}
            </li>
          ))}
        </ul>

        {/* Business Filtering */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Businesses</h2>
          <label className="block mb-2">Filter by Location:</label>
          <select 
            className="p-2 border rounded mb-4" 
            value={selectedLocation} 
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
          <ul className="bg-white p-4 rounded-lg shadow-md">
            {filteredBusinesses.map((business) => (
              <li key={business.id} className="border-b last:border-b-0 p-2">
                {business.name} - {business.location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
