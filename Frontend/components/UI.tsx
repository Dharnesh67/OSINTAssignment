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
  const data = {
    count: 2,
    credit_returned: false,
    data: [
      {
        module: "github",
        result: ["pathakorama1@gmail.com"],
      },
      {
        module: "skype",
        result: [
          {
            avatar: "https://avatar.skype.com/v1/avatars/y2kedar/public",
            username: "y2kedar",
            name: "Kedar",
            country: "United States",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:kedar7yadav/public",
            username: "live:kedar7yadav",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:parmarkeval32/public",
            username: "live:parmarkeval32",
            name: "KEDAR",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedarked/public",
            username: "kedarked",
            name: "Kedar",
            country: "India",
            state: "Maharashtra",
            city: "Pune",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:.cid.97ffc02fbafecf4b/public",
            username: "live:.cid.97ffc02fbafecf4b",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedarkul/public",
            username: "kedarkul",
            name: "kedar",
            country: "United States",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedar.bailur/public",
            username: "kedar.bailur",
            name: "Kedar",
            country: "India",
            city: "Bangalore",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:kedarchin22/public",
            username: "live:kedarchin22",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/slykedi/public",
            username: "slykedi",
            name: "Kedar",
            country: "India",
            state: "Maharashtra",
            city: "Mumbai",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedar.adlservices/public",
            username: "kedar.adlservices",
            name: "Kedar",
            country: "India",
            city: "Jaipur",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:keewah1ne/public",
            username: "live:keewah1ne",
            name: "Kedar .",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedarkus/public",
            username: "kedarkus",
            name: "Kedar",
            country: "Nepal",
            state: "Bagmati zone",
            city: "Bhaktapur",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedarraghavarao/public",
            username: "kedarraghavarao",
            name: "Kedar",
            country: "India",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:.cid.c3ff942eaf0c81d1/public",
            username: "live:.cid.c3ff942eaf0c81d1",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:vkedar/public",
            username: "live:vkedar",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedarjujaray/public",
            username: "kedarjujaray",
            name: "kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:.cid.1cca80517cb0a5d4/public",
            username: "live:.cid.1cca80517cb0a5d4",
            name: "kedar .",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:kedarpgiri_1/public",
            username: "live:kedarpgiri_1",
            name: "kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:.cid.352600750bbce092/public",
            username: "live:.cid.352600750bbce092",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:ad12d7d8d024a552/public",
            username: "live:ad12d7d8d024a552",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:kd.hole36/public",
            username: "live:kd.hole36",
            name: "Kedar",
            country: "India",
            state: "Maharashtra",
            city: "Mumbai",
            contactType: "Skype4Consumer",
          },
        ],
      },
    ],
  };
  
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
      <JsonData jsonData={data} />
      <div className="flex  justify-between w-full">
        <SearchBar />
        <ExportButtons />
      </div>
      <div className="flex  justify-between w-full">
        <StatsCardsGrid  />
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
