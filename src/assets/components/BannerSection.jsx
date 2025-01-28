import React, { useState } from 'react';

const BannerSection = () => {

 

  return (
    <div className="relative bg-indigo-800 text-white py-12 sm:py-16">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to the ALOCH🌎NA</h1>
        <p className="text-lg sm:text-xl mb-8">Find and join discussions on topics you care about!</p>

      
      </div>
    </div>
  );
};

export default BannerSection;
