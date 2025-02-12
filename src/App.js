import React from "react";
import Top10CallersChart from "./components/Top10CallersChart";
import CustomerSpecific247Charts from "./components/CustomerSpecific247Charts";
import JustifiedUnjustified247Chart from "./components/JustifiedUnjustified247Chart";
import Monthly247CallsChart from "./components/Monthly247CallsChart";
import Chart01 from "./components/Chart01";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900">NewCold | WHS Support Dashboard</h1>
        <div className="flex gap-4">
          <input type="file" onChange={handleFileUpload} className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Button variant="outline" className="flex items-center gap-2">
              <UploadCloud size={16} /> Upload Data
            </Button>
          </label>
          {file && <span className="text-sm text-gray-600">{file.name}</span>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white shadow-md rounded-lg p-4">
          <CardContent>
            <Chart01 />
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md rounded-lg p-4">
          <CardContent>
            <Monthly247CallsChart />
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md rounded-lg p-4 col-span-1 md:col-span-2">
          <CardContent>
            <JustifiedUnjustified247Chart />
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md rounded-lg p-4 col-span-1 md:col-span-2">
          <CardContent>
            <CustomerSpecific247Charts />
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md rounded-lg p-4 col-span-1 md:col-span-2">
          <CardContent>
            <Top10CallersChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
