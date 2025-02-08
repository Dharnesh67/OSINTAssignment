import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

type GithubResult = string;

type SkypeResult = {
  avatar: string;
  username: string;
  name: string;
  country?: string;
  state?: string;
  city?: string;
  contactType: string;
};

type ModuleData = {
  module: string;
  result: GithubResult[] | SkypeResult[];
};

type JsonDataProps = {
  jsonData: {
    count: number;
    credit_returned: boolean;
    data: ModuleData[];
  };
};

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-[#1A1A1E] animate-fade-in hover:bg-opacity-90 transition-all border border-white/15 rounded-md px-2 py-1 w-[315px]">
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

export const StatsCardsGrid: React.FC<{ jsonData: JsonDataProps["jsonData"] }> = ({ jsonData }) => {
  if (!jsonData || !jsonData.data) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  const totalSourcesScanned = jsonData.count;

  const totalNames = jsonData.data.reduce((acc, module) => {
    return acc + (module.module === "skype" ? (module.result as SkypeResult[]).length : 0);
  }, 0);

  const totalUsernames = jsonData.data.reduce((acc, module) => {
    return (
      acc +
      (module.module === "skype"
        ? (module.result as SkypeResult[]).filter((user) => user.username).length
        : 0)
    );
  }, 0);

  const totalAccountsPercentage = "95%"; // Fixed value

  const totalCountries = new Set(
    jsonData.data.flatMap((module) =>
      module.module === "skype"
        ? (module.result as SkypeResult[]).map((user) => user.country).filter(Boolean)
        : []
    )
  ).size;

  const totalCountriesPercentage = `${Math.round((totalCountries / (totalNames || 1)) * 100)}%`;

  const statsData = [
    { title: "Sources Scanned", value: totalSourcesScanned, icon: "🔍" },
    { title: "Names", value: totalNames, icon: "👥" },
    { title: "Usernames", value: totalUsernames, icon: "💰" },
    { title: "Total Accounts", value: totalAccountsPercentage, icon: "✅" },
    { title: "Countries", value: totalCountriesPercentage, icon: "🌍" },
  ];

  return (
    <div className="flex justify-between w-full">
      {statsData.map((stat, index) => (
        <StatsCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
      ))}
    </div>
  );
};
