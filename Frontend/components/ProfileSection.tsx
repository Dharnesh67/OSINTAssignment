import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserData {
  avatar?: string;
  username: string;
  name?: string;
  country?: string;
  city?: string;
  state?: string;
  contactType?: string;
}

interface InfoCardProps {
  userData: UserData;
}

const InfoCard: React.FC<InfoCardProps> = ({ userData }) => {
  const { avatar, username, name, country, city, state, contactType } = userData;

  return (
    <Card className="w-full max-w-2xl bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-all duration-300 p-4">
      <div className="flex items-start gap-4">
        {/* Avatar Image */}
        {avatar && (
          <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
            <img src={avatar} alt={username} className="w-full h-full object-cover" />
          </div>
        )}

        {/* User Info */}
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-100">{name || "Unknown User"}</h3>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
              {contactType || "Unknown"}
            </Badge>
          </div>

          {/* Username */}
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-300">
            <span>Username:</span>
            <div className="flex items-center gap-1">
              <span className="font-mono">{username}</span>
              <button 
                onClick={() => navigator.clipboard.writeText(username)}
                className="p-1 hover:bg-white/10 rounded-md transition-colors"
              >
                <Copy size={14} />
              </button>
            </div>
          </div>

          {/* Location Info */}
          {(country || city || state) && (
            <div className="text-sm text-gray-300">
              📍 {city && `${city}, `}{state && `${state}, `}{country}
            </div>
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-4 flex justify-end">
        <Button 
          variant="ghost" 
          size="sm"
          className="text-gray-300 hover:text-white hover:bg-white/10"
        >
          <span>View Profile</span>
          <ExternalLink size={16} className="ml-2" />
        </Button>
      </div>
    </Card>
  );
};

export default InfoCard;
