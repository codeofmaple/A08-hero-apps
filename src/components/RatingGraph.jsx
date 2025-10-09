import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";

const RatingsGraph = ({ appDetailsData }) => {
    if (!appDetailsData || !appDetailsData.ratings) {
        return <p>No ratings is available yet.</p>;
    }
    const ratingsData = [...appDetailsData.ratings].reverse();

    return (
        <div className="w-full h-[300px] mt-5">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={ratingsData}
                    margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar
                        dataKey="count"
                        fill="#f97316"
                        barSize={25}
                    // radius={[0, 8, 8, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingsGraph;
