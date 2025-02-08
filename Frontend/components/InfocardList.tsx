import React from "react";
import InfoCard from "./ProfileSection";

interface UserData {
  avatar?: string;
  username: string;
  name?: string;
  country?: string;
  city?: string;
  state?: string;
  contactType?: string;
}

interface UsersData {
  count: number;
  credit_returned: boolean;
  data: { module: string; result: UserData[] }[];
}

interface InfoCardListProps {
  users: UsersData;
}

const InfoCardList: React.FC<InfoCardListProps> = ({ users }) => {
  // Extract Skype users from JSON
  const skypeData = users.data.find((item) => item.module === "skype")?.result || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {skypeData.length > 0 ? (
        skypeData.map((user, index) => <InfoCard key={index} userData={user} />)
      ) : (
        <p className="text-gray-400 text-center col-span-3">No Skype data available</p>
      )}
    </div>
  );
};

export default InfoCardList;
