import React, { useState } from "react";
import { SearchBar } from "./Searchbar";
import { StatsCardsGrid } from "./StatsCard";
import { ExportButtons } from "./ExportButton";
import { Timeline } from "./Timeline";
import { DataTable } from "./DataTable";
import Flow from "./Graph";
import { Youtube, Github, Instagram, Twitter, MessageCircle } from "lucide-react"; // Using MessageCircle for Skype
import SocialCard from "./SocialCard";
// import SkypeUserTable from "./SkypeUserTable";

const UI = ({ userData, Username }: any) => {
  
  console.log("userdata: ",userData);
  
  const [DATA, setDATA] = useState(userData);


  const socialPlatforms = [
    { platform: "YouTube", icon: <Youtube className="text-red-500" />, key: "youtube" },
    { platform: "GitHub", icon: <Github className="text-white" />, key: "github" },
    { platform: "Instagram", icon: <Instagram className="text-pink-500" />, key: "instagram" },
    { platform: "Twitter", icon: <Twitter className="text-blue-400" />, key: "twitter" },
    { platform: "Skype", icon: <MessageCircle className="text-blue-600" />, key: "skype" }, // Changed Twitch to Skype
  ];

  // Extract relevant social media data dynamically
  const socialCards = socialPlatforms.map(({ platform, icon, key }) => {
    const platformData = DATA.data.find((item: any) => item.module.toLowerCase() === key);

    return {
      platform,
      icon,
      content: platformData
        ? `Found ${platformData.result.length} results for ${platform}`
        : `No data available for ${platform}`,
    };
  });

  return (
    <div className="flex flex-col gap-10 justify-center items-center px-16 py-3">
      <div className="flex justify-between w-full">
        <SearchBar />
        <ExportButtons />
      </div>
      {/* <div className="flex  justify-between w-full">
        <StatsCardsGrid  /> */}

      <div className="flex justify-between w-full">
        <StatsCardsGrid jsonData={DATA} />
      </div>
      <div className="flex justify-between w-full">
        <Timeline />
      </div>
      <div className="flex justify-between w-full">
        <DataTable jsonData={DATA} />
      </div>
      <div className="flex justify-between w-full">
        <Flow />
      </div>
      {/* <div className="flex justify-between w-full">
        <SkypeUserTable data={DATA}/>
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {socialCards.map((card, index) => (
          <SocialCard key={index} platform={card.platform} icon={card.icon} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default UI;
