import React from "react";
import { SearchBar } from "./Searchbar";
import { StatsCardsGrid } from "./StatsCard";
import { ExportButtons } from "./ExportButton";
import { Timeline } from "./Timeline";
import { DataTable } from "./DataTable";
import  Flow  from "./Graph";
const UI = () => {
  return (
    <div className="flex flex-col gap-10  justify-center items-center px-16 py-3 ">
      <div className="result w-full text-2xl font-bold border-b-2 border-white/20">
        Results for: uSERName
      </div>
      <div className="flex  justify-between w-full">
        <SearchBar />
        <ExportButtons />
      </div>
      <div className="flex  justify-between w-full">
        <StatsCardsGrid />
      </div>
      <div className="flex  justify-between w-full">
        <Timeline />
      </div>
      <div className="flex  justify-between w-full">
        <DataTable />
      </div>
      <div className="flex  justify-between w-full">
        <Flow/>
      </div>
    </div>
  );
};

export default UI;
