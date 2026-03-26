import React from 'react';

import { useLoaderData, Link  } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaDownload, FaStar } from "react-icons/fa";

const Apps = () => {
  const appsData = useLoaderData(); // full data
  const [search, setSearch] = useState("");

  // filter logic
  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
          Our All Applications
        </h2>
        <p className="text-gray-500 mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search + Count */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 max-w-7xl mx-auto">

        <p className="text-gray-600">
          ({filteredApps.length}) Apps Found
        </p>

        <div className="flex items-center border rounded px-3 py-2 w-full md:w-80">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search apps..."
            className="outline-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {filteredApps.map((app) => (
          <Link to={`/app/${app.id}`} key={app.id} className="bg-white rounded-xl shadow p-4">

            <img
              src={app.image}
              alt={app.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-lg font-semibold text-[#001931] mb-3">
              {app.title}
            </h3>

            <div className="flex justify-between">

              <div className="flex items-center gap-1 px-3 py-1 rounded bg-[#F1F5E8]">
                <FaDownload className="text-[#00D390]" />
                <span className="text-[#00D390] text-sm">
                  {app.downloads}
                </span>
              </div>

              <div className="flex items-center gap-1 px-3 py-1 rounded bg-[#F1F5E8]">
                <FaStar className="text-[#FF8811]" />
                <span className="text-[#FF8811] text-sm">
                  {app.ratingAvg}
                </span>
              </div>

            </div>
          </Link>
        ))}

      </div>

      {/* No Data */}
      {filteredApps.length === 0 && (
        <p className="text-center mt-10 text-red-500">
          No App Found
        </p>
      )}

    </section>
  );
};

export default Apps;