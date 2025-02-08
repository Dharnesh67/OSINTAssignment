import React from "react";
import { SearchBar } from "@/components/Searchbar";
import { StatsCardsGrid } from "@/components/StatsCard";
import { ExportButtons } from "@/components/ExportButton";
import { Timeline } from "@/components/Timeline";
import { DataTable } from "@/components/DataTable";
import Flow from "@/components/Graph";
import { Youtube, Github, Instagram, Twitter, Twitch } from "lucide-react";
import SocialCard from "@/components/SocialCard";
import { Header } from "@/components/Header";

// import {Header} from "@/components/Header";
const UI = () => {
 
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
    
    <div className="flex flex-col gap-10  justify-center items-center px-16 py-3 scrollbar-hidden">
    <div className="flex flex-col gap-10  justify-center items-center px-16 py-3 text-white">
      <Header />
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
    </div>
  );
};

export default UI;
