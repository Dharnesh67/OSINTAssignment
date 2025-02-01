import { Minus, Plus, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
export const Timeline = () => {
  return (
    <div className="bg-[#1A1A1E] border border-white/10 rounded-lg p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Timeline View</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Minus className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="h-48 flex items-center justify-center text-secondary-foreground">
        Timeline visualization would go here
      </div>
    </div>
  );
};