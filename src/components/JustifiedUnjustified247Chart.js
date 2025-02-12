import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";


const justifiedUnjustified247Data = [
  { month: "2024-02", justified: 37, unjustified: 3 },
  { month: "2024-03", justified: 29, unjustified: 6 },
  { month: "2024-04", justified: 50, unjustified: 14 },
  { month: "2024-05", justified: 84, unjustified: 6 },
  { month: "2024-06", justified: 36, unjustified: 3 },
  { month: "2024-07", justified: 42, unjustified: 8 },
  { month: "2024-08", justified: 69, unjustified: 12 },
  { month: "2024-09", justified: 41, unjustified: 20 },
  { month: "2024-10", justified: 42, unjustified: 16 },
  { month: "2024-11", justified: 62, unjustified: 8 },
  { month: "2024-12", justified: 88, unjustified: 14 },
  { month: "2025-01", justified: 79, unjustified: 18 },
  { month: "2025-02", justified: 16, unjustified: 6 },
];

export default function JustifiedUnjustified247Chart() {
  return (
    <Card className="bg-white shadow-md rounded-lg p-4">
      <CardContent>
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          Monthly Breakdown of Justified vs Unjustified 24/7 Calls
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={justifiedUnjustified247Data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="black" />
            <YAxis stroke="black" />
            <Tooltip />
            <Legend />
            <Bar dataKey="justified" stackId="a" fill="#16A34A" name="Justified" />
            <Bar dataKey="unjustified" stackId="a" fill="#DC2626" name="Unjustified" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
