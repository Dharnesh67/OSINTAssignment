import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
interface SocialCardProps {
  platform: string;
  icon: React.ReactNode;
  content: string | React.ReactNode;
  className?: string;
}
const SocialCard = ({ platform, icon, content, className }: SocialCardProps) => {
  return (
    <Card className={cn(
      "group relative overflow-hidden backdrop-blur-lg bg-card hover:bg-card-hover transition-all duration-300 hover:animate-card-hover cursor-pointer",
      className
    )}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-text-primary text-xl">
            {icon}
          </div>
          <h3 className="text-text-primary font-semibold">{platform}</h3>
        </div>
        <div className="text-text-secondary">
          {content}
        </div>
      </div>
    </Card>
  );
};
export default SocialCard;