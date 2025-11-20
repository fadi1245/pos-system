import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-2xl w-full p-8 bg-white rounded-2xl shadow">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Tailwind v4 — Working!
        </h1>
        <p className="text-gray-600">If this heading is blue and styled, Tailwind is active.</p>
        <button className="mt-6 inline-block px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">
          Click me
        </button>
      </div>
    </div>
  );
}
