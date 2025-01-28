import React from 'react';

const TagSection = ({ tags, onTagClick }) => {

      
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Explore Topics</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => onTagClick(tag)}
              className="bg-indigo-800 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-300 transition duration-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagSection;
