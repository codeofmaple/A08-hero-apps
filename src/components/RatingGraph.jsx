import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";

const RatingsGraph = ({ appDetailsData }) => {
    if (!appDetailsData || !appDetailsData.ratings) {
        return <p>No ratings is available yet.</p>;
    }
    const ratingsData = [...appDetailsData.ratings].reverse();

    return (
        <div className="w-full h-[300px] mt-5">
            <h5 className="text-2xl font-semibold">Rating</h5>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={ratingsData}
                >
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar
                        dataKey="count"
                        fill="#f97316"
                        barSize={25}    
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingsGraph;
