import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

type SkypeResult = {
  username: string;
  name: string;
  contactType: string;
  country?: string;
  state?: string;
  city?: string;
};

type ModuleData = {
  module: string;
  result: string[] | SkypeResult[];
};

type JsonDataProps = {
  jsonData: {
    count: number;
    credit_returned: boolean;
    data: ModuleData[];
  };
};

export const DataTable: React.FC<JsonDataProps> = ({ jsonData }) => {
  if (!jsonData?.data) return <p className="text-center text-gray-500">No data available</p>;

  // Extracting data for the table
  const tableData = jsonData.data.flatMap((moduleItem) => {
    return (moduleItem.result as SkypeResult[]).map((entry) => ({
      platform: moduleItem.module,
      description: `User: ${entry.name} (${entry.username})`,
      dataIntegrity: entry.contactType,
      timestamp: new Date().toISOString(), // Placeholder for now
    }));
  });

  return (
    <div className="w-full h-96 border overflow-scroll scrollbar-hidden">
      <div className="bg-[#1A1A1E] rounded-lg w-full border border-white/20 p-4 ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Platform</TableHead>
              <TableHead className="text-white">Description</TableHead>
              <TableHead className="text-white">Data Integrity</TableHead>
              <TableHead className="text-white">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.length > 0 ? (
              tableData.map((row, i) => (
                <TableRow key={i} className="hover:bg-gray-800 transition">
                  <TableCell className="text-gray-300">{row.platform}</TableCell>
                  <TableCell className="text-gray-300">{row.description}</TableCell>
                  <TableCell className="text-gray-300">{row.dataIntegrity}</TableCell>
                  <TableCell className="text-gray-300">
                    {new Date(row.timestamp).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-gray-500 py-4">
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
