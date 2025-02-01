import { Search } from "lucide-react";
import { Input } from "./ui/input";
export const SearchBar = () => {
  return (
    <div className=" w-80 border border-white/10 rounded-lg flex items-center p-2 bg-[#1A1A1E]">
      <Input
        type="text"
        placeholder="Enter phone number, email or username"
        className="bg-[rgb(23,22,30)] p-1 text-white border rounded-none border-white/10 "
      />
      <div className="bg-[rgb(23,22,30)] p-1 text-white " >
      <Search  />
      </div>
    </div>
  );
};