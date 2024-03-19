// Dashbar.js
import React from 'react';

function Dashbar() {
  return (
    <div className="m-3 rounded-[10px] shadow-lg p-2 bg-pink-900 fixed top-16 left-0 right-0 z-10" >
      <div className="flex items-center justify-between">
        {/* Left section with search bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {/* Checkboxes */}
          <div className="space-x-2">
            <input type="checkbox" id="blue" className="text-blue-500" />
            <label htmlFor="blue" className="text-blue-500">Blue</label>
            <input type="checkbox" id="green" className="text-green-500" />
            <label htmlFor="green" className="text-green-500">Green</label>
            <input type="checkbox" id="yellow" className="text-yellow-500" />
            <label htmlFor="yellow" className="text-yellow-500">Yellow</label>
            <input type="checkbox" id="red" className="text-red-500" />
            <label htmlFor="red" className="text-red-500">Red</label>
          </div>
        </div>

        {/* Right section with sort dropdown and view options */}
        <div className="flex items-center space-x-4">
          {/* Sort dropdown */}
          <div className="relative inline-block">
            <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none">
              Sort By
            </button>
          </div>

          {/* View options */}
          <div className="space-x-4 text-white">
            <label className="cursor-pointer">
              <input type="radio" name="view" value="list" className="hidden" />
              List View
            </label>
            <label className="cursor-pointer">
              <input type="radio" name="view" value="map" className="hidden" />
              Map View
            </label>
          </div>

          {/* Download button */}
          <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashbar;
