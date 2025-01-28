import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Import the icon

const AnnouncementSection = ({ announcements }) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Latest Announcements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                {/* Replace the img tag with the React icon */}
                <FaUserCircle className="w-12 h-12 text-gray-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{announcement.authorName}</h3>
                  <p className="text-sm text-gray-500">{announcement.date}</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-indigo-800 mb-2">{announcement.title}</h4>
              <p className="text-gray-700">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementSection;