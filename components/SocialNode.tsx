import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { Github, User, Instagram, Info } from "lucide-react";
const icons = {
  github: Info,
  user: User,
  instagram: Info,
  info: Info,
};
const SocialNode = ({ data }: { data: { icon: keyof typeof icons; label: string } }) => {
  const Icon = icons[data.icon];
  return (
    <div className="social-node">
      <Handle type="target" position={Position.Top} />
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <div className="mt-2 text-xs text-gray-400">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
export default memo(SocialNode);