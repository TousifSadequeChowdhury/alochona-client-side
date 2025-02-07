import React, { useState } from 'react';

const BannerSection = () => {

 

  return (
    <div className="relative bg-indigo-800 text-white py-12 sm:py-9">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
  Welcome to the <span>ALOCH🌎NA</span>
</h1>
<p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-center max-w-2xl mx-auto">
  Find and join discussions on topics you care about!
</p>

      
      </div>
    </div>
  );
};

export default BannerSection;
