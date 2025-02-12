import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const chart01Data = [
  { month: "2024-02", issueA: 120, issueB: 80, issueC: 40 },
  { month: "2024-03", issueA: 110, issueB: 70, issueC: 60 },
  { month: "2024-04", issueA: 130, issueB: 90, issueC: 50 },
  { month: "2024-05", issueA: 140, issueB: 100, issueC: 70 },
  { month: "2024-06", issueA: 150, issueB: 110, issueC: 80 },
  { month: "2024-07", issueA: 160, issueB: 120, issueC: 90 },
  { month: "2024-08", issueA: 170, issueB: 130, issueC: 100 },
];

export default function Chart01() {
  return (
    <Card className="bg-white shadow-md rounded-lg p-4">
      <CardContent>
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          Monthly Breakdown of Issues
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chart01Data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="black" />
            <YAxis stroke="black" />
            <Tooltip />
            <Legend />
            <Bar dataKey="issueA" stackId="a" fill="#1E3A8A" name="Issue A" />
            <Bar dataKey="issueB" stackId="a" fill="#60A5FA" name="Issue B" />
            <Bar dataKey="issueC" stackId="a" fill="#93C5FD" name="Issue C" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
