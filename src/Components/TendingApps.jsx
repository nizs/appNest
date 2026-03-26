import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrendingApps = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch("/apps.json")
            .then((res) => res.json())
            .then((data) => setApps(data));
    }, []);

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                        Trending Apps
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

                    {apps.slice(0, 8).map((app) => (
                        <Link key={app.id} className="bg-white rounded-xl shadow p-4">

                            {/* Image */}
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-[#001931] mb-3">
                                {app.title}
                            </h3>

                            {/* Badges */}
                            <div className="flex justify-between">

                                {/* Downloads */}
                                <div className="flex items-center gap-1 px-3 py-1 rounded bg-[#F1F5E8]">
                                    <FaDownload className="text-[#00D390]" />
                                    <span className="text-[#00D390] text-sm">
                                        {app.downloads}
                                    </span>
                                </div>

                                {/* Rating */}
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
                <div className="text-center mt-10">
                    <Link
                        to="/apps"
                        className="btn text-white gradient-primary border-none px-6"
                    >
                        Show All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TrendingApps;