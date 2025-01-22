import React, { useState } from 'react';

const BannerSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
    // Implement the search functionality here
  };

  return (
    <div className="relative bg-blue-600 text-white py-12 sm:py-16">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to the ALOCH🌎 NA</h1>
        <p className="text-lg sm:text-xl mb-8">Find and join discussions on topics you care about!</p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex justify-center items-center space-x-4 max-w-4xl mx-auto">
          <input
            type="text"
            className="px-4 py-2 w-full sm:w-80 text-gray-700 rounded-md"
            placeholder="Search by tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default BannerSection;
