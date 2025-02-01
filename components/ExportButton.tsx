import { Button } from "./ui/button";
const EXPORT_OPTIONS = [
  { label: "PDF+", color: "bg-red-600" },
  { label: "PDF", color: "bg-red-500" },
  { label: "CSV", color: "bg-green-500" },
  { label: "DOCX", color: "bg-blue-500" },
  { label: "JSON", color: "bg-yellow-500" },
];
export const ExportButtons = () => {
  return (
    <div className="flex gap-2">
      {EXPORT_OPTIONS.map((option) => (
        <Button
          key={option.label}
          variant="outline"
          className={`${option.color} text-white border-none hover:opacity-90`}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};