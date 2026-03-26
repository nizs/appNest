import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaDownload, FaStar, FaThumbsUp } from "react-icons/fa";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const AppDetailPage = () => {
    const app = useLoaderData();

    const ratingData = [
        { star: "5 star", value: app.ratingDistribution["5"] },
        { star: "4 star", value: app.ratingDistribution["4"] },
        { star: "3 star", value: app.ratingDistribution["3"] },
        { star: "2 star", value: app.ratingDistribution["2"] },
        { star: "1 star", value: app.ratingDistribution["1"] },
    ];

    return (
        <div className="p-6 lg:p-12">
            {/* INFO DIV */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Column 1 - Image */}
                <div className="lg:w-1/3 w-full">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                {/* Column 2 - Details */}
                <div className="lg:w-2/3 w-full flex flex-col gap-4">
                    <h2 className="text-3xl font-bold">{app.title}</h2>
                    <p>
                        Developed By{" "}
                        <span className="text-primary">{app.developedBy}</span>
                    </p>

                    {/* Stats */}
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Downloads */}
                        <div className="flex-col items-center gap-3 p-4">
                            <FaDownload
                                size={30}
                                style={{ color: "#54CF68", WebkitBackgroundClip: "text" }}
                            />
                            <div>
                                <p>Downloads</p>
                                <h2 className="text-xl font-bold">{app.downloads}</h2>
                            </div>
                        </div>

                        {/* Average Ratings */}
                        <div className="flex-col items-center gap-3 p-4">
                            <FaStar size={30} color="#FF8811" />
                            <div>
                                <p>Average Ratings</p>
                                <h2 className="text-xl font-bold">{app.ratingAvg}</h2>
                            </div>
                        </div>

                        {/* Total Reviews */}
                        <div className="flex-col items-center gap-3 p-4">
                            <FaThumbsUp
                                size={30}
                                style={{ color: "#9F62F2", WebkitBackgroundClip: "text", }}
                            />
                            <div>
                                <p>Total Reviews</p>
                                <h2 className="text-xl font-bold">{app.totalReviewsString}</h2>
                            </div>
                        </div>
                    </div>
                    <button className=" mt-4 px-6 py-3 rounded-lg font-bold text-white" style={{ backgroundColor: "#00D390" }}>
                        Install Now (291 MB)
                    </button>
                </div>
            </div>

            {/* RATINGS DIV */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-secondary mb-4">Ratings</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        layout="vertical"
                        data={ratingData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" tick={{ fill: "#000" }} />
                        <YAxis
                            dataKey="star"
                            type="category"
                            tick={{ fill: "#000" }}
                        />
                        <Tooltip />
                        <Bar dataKey="value" fill="#FF8811" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* DESCRIPTION DIV */}
            <div className="mt-12 space-y-4">
                {app.description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>
        </div>
    );
};

export default AppDetailPage;