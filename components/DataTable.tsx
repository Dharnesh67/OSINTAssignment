
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
const DATA = [
  {
    platform: "Chess",
    description: "Last Active (Chess.com)",
    dataIntegrity: "—",
    timestamp: "2024-07-23 T00:04:38",
  },
  {
    platform: "Chess",
    description: "Created Account (Chess.com)",
    dataIntegrity: "—",
    timestamp: "2023-02-13 T12:53:13",
  },
  {
    platform: "Github",
    description: "Created Account (Github)",
    dataIntegrity: "—",
    timestamp: "2022-12-18 T19:29:48Z",
  },
];
export const DataTable = () => {
  return (
    <div className="bg-[#1A1A1E] rounded-lg w-full border border-white/20 ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Platform</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Data Integrity</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DATA.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.platform}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.dataIntegrity}</TableCell>
              <TableCell>{row.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};