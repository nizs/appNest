import React from 'react';

const States = () => {
    return (
        <section className="bg-primary text-white py-16 px-4">

            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Trusted by Millions, Built for You
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {/* Card 1 */}
                <div className="bg-white/10 p-6 rounded-xl text-center">
                    <p className="text-sm">Total Downloads</p>
                    <h1 className="text-4xl font-bold my-2">29.6M</h1>
                    <p className="text-sm">21% more than last month</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white/10 p-6 rounded-xl text-center">
                    <p className="text-sm">Total Reviews</p>
                    <h1 className="text-4xl font-bold my-2">906K</h1>
                    <p className="text-sm">46% more than last month</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/10 p-6 rounded-xl text-center">
                    <p className="text-sm">Active Apps</p>
                    <h1 className="text-4xl font-bold my-2">132+</h1>
                    <p className="text-sm">31 more will Launch</p>
                </div>

            </div>
        </section>
    );
};

export default States;