import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const StatsCard = ({ title, value, icon }: StatsCardProps) => {
  return (
    <div className="bg-[#1A1A1E]  animate-fade-in hover:bg-opacity-90 transition-all  border border-white/15 rounded-md px-2 py-1 w-[315px]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-secondary-foreground text-sm">{title}</p>
          <p className="text-mg font-bold text-foreground mt-1">{value}</p>
        </div>
        <div className="text-primary">{icon}</div>
      </div>
    </div>
  );
};

// Example random data
const statsData = [
  { title: "Sorce Scanned", value: Math.floor(Math.random() * 10000), icon: "👥" },
  { title: "Names", value: `10`, icon: "💰" },
  { title: "Username", value: Math.floor(Math.random() * 1000), icon: "✅" },
  { title: "Total Accounts", value: `${Math.floor(Math.random() * 100)}%`, icon: "⏱️" },
  { title: "Countries", value: `${Math.floor(Math.random() * 100)}%`, icon: "⏱️" },
];

export const StatsCardsGrid = () => {
  return (
    <div className="flex justify-between w-full  ">
      {statsData.map((stat, index) => (
        <div>
          <StatsCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
        </div>
      ))}
    </div>
  );
};
