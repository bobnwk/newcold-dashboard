import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";


const monthly247CallsData = [
  { month: "2024-02", non247: 191, calls247: 40 },
  { month: "2024-03", non247: 291, calls247: 43 },
  { month: "2024-04", non247: 330, calls247: 67 },
  { month: "2024-05", non247: 514, calls247: 90 },
  { month: "2024-06", non247: 311, calls247: 39 },
  { month: "2024-07", non247: 293, calls247: 51 },
  { month: "2024-08", non247: 259, calls247: 81 },
  { month: "2024-09", non247: 292, calls247: 62 },
  { month: "2024-10", non247: 365, calls247: 69 },
  { month: "2024-11", non247: 316, calls247: 71 },
  { month: "2024-12", non247: 318, calls247: 102 },
  { month: "2025-01", non247: 383, calls247: 97 },
  { month: "2025-02", non247: 128, calls247: 22 },
];

export default function Monthly247CallsChart() {
  return (
    <Card className="bg-white shadow-md rounded-lg p-4">
      <CardContent>
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          Monthly Breakdown of 24/7 vs Non-24/7 Calls
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={monthly247CallsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="black" />
            <YAxis stroke="black" />
            <Tooltip />
            <Legend />
            <Bar dataKey="non247" stackId="a" fill="#1E3A8A" name="Non-24/7 Calls" />
            <Bar dataKey="calls247" stackId="a" fill="#60A5FA" name="24/7 Calls" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
