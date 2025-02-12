import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const top10CallersData = [
  { name: "Alicia Nevins", unjustified: 39, justified: 87, customer: "NewCold | WHS Lebanon", percentage: 31 },
  { name: "Aaron Johnson", unjustified: 7, justified: 67, customer: "NewCold | WHS Lebanon", percentage: 9 },
  { name: "Emely Castro", unjustified: 12, justified: 41, customer: "NewCold | WHS Lebanon", percentage: 23 },
  { name: "Darius Hinton", unjustified: 8, justified: 31, customer: "NewCold | WHS Atlanta I", percentage: 21 },
  { name: "Nailah Mabilijengo", unjustified: 5, justified: 29, customer: "NewCold | WHS Lebanon", percentage: 15 },
  { name: "Denise Amaro", unjustified: 5, justified: 23, customer: "NewCold | WHS Piacenza", percentage: 18 },
  { name: "Erica Simmons", unjustified: 5, justified: 20, customer: "NewCold | WHS Lebanon", percentage: 20 },
  { name: "Nathaniel Mckinnie", unjustified: 7, justified: 19, customer: "NewCold | WHS Atlanta I", percentage: 27 },
  { name: "Bibby Gonzales", unjustified: 5, justified: 19, customer: "NewCold | WHS Lebanon", percentage: 21 },
  { name: "Areign Belcher", unjustified: 4, justified: 13, customer: "NewCold | WHS Lebanon", percentage: 24 },
];

export default function Top10CallersChart() {
  return (
    <Card className="bg-white shadow-md rounded-lg p-6">
      <CardContent>
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          Top 10 Callers by Total 24/7 Calls - Justified Calls by Customer
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={top10CallersData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="name" stroke="black" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" />
            <YAxis stroke="black" />
            <Tooltip contentStyle={{ backgroundColor: "white", color: "black" }} />
            <Legend />
            <Bar dataKey="justified" stackId="a" fill="#3B82F6" name="Justified Calls" />
            <Bar dataKey="unjustified" stackId="a" fill="#DC2626" name="Unjustified Calls" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
