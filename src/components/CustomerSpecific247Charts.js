import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";


const customerData = {
  "NewCold | WHS Lebanon": [
    { month: "2024-02", justified: 32, unjustified: 3 },
    { month: "2024-03", justified: 22, unjustified: 5 },
    { month: "2024-04", justified: 34, unjustified: 11 },
    { month: "2024-05", justified: 31, unjustified: 2 },
    { month: "2024-06", justified: 19, unjustified: 3 },
    { month: "2024-07", justified: 10, unjustified: 4 },
    { month: "2024-08", justified: 44, unjustified: 4 },
    { month: "2024-09", justified: 22, unjustified: 14 },
    { month: "2024-10", justified: 21, unjustified: 10 },
    { month: "2024-11", justified: 40, unjustified: 6 },
    { month: "2024-12", justified: 65, unjustified: 12 },
    { month: "2025-01", justified: 48, unjustified: 16 },
    { month: "2025-02", justified: 13, unjustified: 5 },
  ],
  "NewCold | WHS Tacoma": [
    { month: "2024-02", justified: 4, unjustified: 0 },
    { month: "2024-03", justified: 2, unjustified: 1 },
    { month: "2024-04", justified: 2, unjustified: 1 },
    { month: "2024-05", justified: 11, unjustified: 1 },
    { month: "2024-06", justified: 4, unjustified: 0 },
    { month: "2024-07", justified: 7, unjustified: 1 },
    { month: "2024-08", justified: 5, unjustified: 1 },
    { month: "2024-09", justified: 3, unjustified: 1 },
    { month: "2024-10", justified: 4, unjustified: 1 },
    { month: "2024-11", justified: 5, unjustified: 0 },
    { month: "2024-12", justified: 2, unjustified: 1 },
    { month: "2025-01", justified: 5, unjustified: 1 },
    { month: "2025-02", justified: 1, unjustified: 0 },
  ],
};

export default function CustomerSpecific247Charts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(customerData).map(([customer, data]) => (
        <Card key={customer} className="bg-white shadow-md rounded-lg p-4">
          <CardContent>
            <h2 className="text-xl font-bold text-blue-900 mb-4">{customer} - Justified vs Unjustified 24/7 Calls</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
      ))}
    </div>
  );
}
