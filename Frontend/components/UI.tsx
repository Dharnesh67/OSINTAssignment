import React from "react";
import { SearchBar } from "./Searchbar";
import { StatsCardsGrid } from "./StatsCard";
import { ExportButtons } from "./ExportButton";
import { Timeline } from "./Timeline";
import { DataTable } from "./DataTable";
import Flow from "./Graph";
import { Youtube, Github, Instagram, Twitter, Twitch } from "lucide-react";
import SocialCard from "./SocialCard";
import JsonData from "./JsonData";
const UI = ({ userData, Username }: any) => {
  const socialCards = [
    {
      platform: "YouTube",
      icon: <Youtube className="text-red-500" />,
      content: "Share your latest videos and grow your audience",
    },
    {
      platform: "GitHub",
      icon: <Github className="text-white" />,
      content: "Collaborate on code and build amazing things",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="text-pink-500" />,
      content: "Share your moments with stunning photos",
    },
    {
      platform: "Twitter",
      icon: <Twitter className="text-blue-400" />,
      content: "Join the conversation and stay connected",
    },
    {
      platform: "Twitch",
      icon: <Twitch className="text-purple-500" />,
      content: "Stream and connect with your community",
    },
  ];

  return (
    <div className="flex flex-col gap-10  justify-center items-center px-16 py-3 ">
      <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white w-1/2 mx-auto">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <pre className="bg-gray-800 p-4 rounded-lg text-sm overflow-auto">
          {JSON.stringify(userData, null, 2)}
        </pre>
      </div>
      {/* <div className="result w-full text-2xl font-bold border-b-2 border-white/20">
        Results for: {Username}
      </div> */}
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
        <Flow />
      </div>
      <div className="flex  justify-between w-full">
        {socialCards.map((card, index) => (
          <SocialCard
            key={index}
            platform={card.platform}
            icon={card.icon}
            content={card.content}
          />
        ))}
      </div>
    </div>
  );
};

export default UI;
