import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
interface InfoCardProps {
  platformIcon?: string;
  platformName: string;
  id?: string;
  name?: string;
  bio?: string;
  creationDate?: string;
  verified?: boolean;
  avatar?: string;
  className?: string;
}
const InfoCard = ({
  platformIcon,
  platformName,
  id,
  name,
  bio,
  creationDate,
  verified = false,
  avatar,
  className,
}: InfoCardProps) => {
  return (
    <Card className={cn("w-full max-w-2xl bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-all duration-300 p-4", className)}>
      <div className="flex items-start gap-4">
        {platformIcon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-white/10">
            <img src={platformIcon} alt={platformName} className="w-full h-full object-cover" />
          </div>
        )}
        
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-100">{platformName}</h3>
          </div>
          
          {id && (
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-300">
              <span>Id</span>
              <div className="flex items-center gap-1">
                <span className="font-mono">{id}</span>
                <button 
                  onClick={() => navigator.clipboard.writeText(id)}
                  className="p-1 hover:bg-white/10 rounded-md transition-colors"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
          )}
          
          {name && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-300">Name</span>
              <span className="font-medium text-white">{name}</span>
              {verified && (
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                  Verified Account
                </Badge>
              )}
            </div>
          )}
          
          {bio && (
            <div className="mb-2">
              <p className="text-sm text-gray-300 line-clamp-2">{bio}</p>
            </div>
          )}
          
          {creationDate && (
            <div className="text-xs text-gray-400">
              Created on {creationDate}
            </div>
          )}
        </div>
        
        {avatar && (
          <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
            <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
      
      <div className="mt-4 flex justify-end">
        <Button 
          variant="ghost" 
          size="sm"
          className="text-gray-300 hover:text-white hover:bg-white/10"
        >
          <span>View Account</span>
          <ExternalLink size={16} className="ml-2" />
        </Button>
      </div>
    </Card>
  );
};
export default InfoCard;