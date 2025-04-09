import React from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";

interface AchievementBadgeProps {
  icon: LucideIcon;
  label: string;
  description?: string;
  unlocked?: boolean;
  level?: number;
  maxLevel?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?:
    | "zap"
    | "flame"
    | "map"
    | "star"
    | "trophy"
    | "sparkles"
    | "default";
}

export function AchievementBadge({
  icon: Icon,
  label,
  description,
  unlocked = false,
  level = 0,
  maxLevel = 3,
  size = "md",
  className,
  variant = "default",
}: AchievementBadgeProps) {
  const sizeClasses = {
    sm: {
      container: "w-10 h-10",
      icon: "h-5 w-5",
      levelBadge: "w-4 h-4 text-[8px]",
    },
    md: {
      container: "w-14 h-14",
      icon: "h-7 w-7",
      levelBadge: "w-5 h-5 text-[10px]",
    },
    lg: {
      container: "w-20 h-20",
      icon: "h-10 w-10",
      levelBadge: "w-6 h-6 text-xs",
    },
  };

  // Vibrant color palette for different achievement types
  const variantColors = {
    zap: {
      bg: "bg-gradient-to-br from-blue-400 to-blue-600",
      bgUnlocked: "bg-gradient-to-br from-blue-400/20 to-blue-600/20",
      text: "text-blue-500",
      badge: "bg-blue-500",
      shadow: "shadow-lg shadow-blue-500/30",
    },
    flame: {
      bg: "bg-gradient-to-br from-orange-400 to-red-600",
      bgUnlocked: "bg-gradient-to-br from-orange-400/20 to-red-600/20",
      text: "text-orange-500",
      badge: "bg-orange-500",
      shadow: "shadow-lg shadow-orange-500/30",
    },
    map: {
      bg: "bg-gradient-to-br from-emerald-400 to-teal-600",
      bgUnlocked: "bg-gradient-to-br from-emerald-400/20 to-teal-600/20",
      text: "text-emerald-500",
      badge: "bg-emerald-500",
      shadow: "shadow-lg shadow-emerald-500/30",
    },
    star: {
      bg: "bg-gradient-to-br from-yellow-400 to-amber-600",
      bgUnlocked: "bg-gradient-to-br from-yellow-400/20 to-amber-600/20",
      text: "text-yellow-500",
      badge: "bg-yellow-500",
      shadow: "shadow-lg shadow-yellow-500/30",
    },
    trophy: {
      bg: "bg-gradient-to-br from-purple-400 to-indigo-600",
      bgUnlocked: "bg-gradient-to-br from-purple-400/20 to-indigo-600/20",
      text: "text-purple-500",
      badge: "bg-purple-500",
      shadow: "shadow-lg shadow-purple-500/30",
    },
    sparkles: {
      bg: "bg-gradient-to-br from-pink-400 to-rose-600",
      bgUnlocked: "bg-gradient-to-br from-pink-400/20 to-rose-600/20",
      text: "text-pink-500",
      badge: "bg-pink-500",
      shadow: "shadow-lg shadow-pink-500/30",
    },
    default: {
      bg: "bg-gradient-to-br from-[#00A651] to-[#008C45]",
      bgUnlocked: "bg-gradient-to-br from-[#00A651]/20 to-[#008C45]/20",
      text: "text-[#00A651]",
      badge: "bg-[#00A651]",
      shadow: "shadow-lg shadow-[#00A651]/30",
    },
  };

  // Get colors based on variant
  const colors = variantColors[variant];

  // Level-based styling
  const getLevelStyle = () => {
    if (!unlocked) return "bg-gray-200 text-gray-400";
    return `${colors.bgUnlocked} ${colors.text} ${unlocked ? colors.shadow : ""}`;
  };

  const getBadgeStyle = () => {
    if (level <= 0) return "bg-gray-300 text-gray-500";
    return `${colors.badge} text-white`;
  };

  // 3D effect classes
  const get3DEffect = () => {
    if (!unlocked) return "";
    return "transform hover:scale-105 hover:-translate-y-1 transition-all duration-300";
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "relative inline-flex flex-col items-center",
              className,
            )}
          >
            <div
              className={cn(
                sizeClasses[size].container,
                "rounded-full flex items-center justify-center",
                getLevelStyle(),
                get3DEffect(),
                "transition-all duration-300",
              )}
            >
              <Icon className={sizeClasses[size].icon} />
            </div>
            {maxLevel > 1 && (
              <div
                className={cn(
                  sizeClasses[size].levelBadge,
                  "absolute -top-1 -right-1 rounded-full flex items-center justify-center font-bold",
                  getBadgeStyle(),
                )}
              >
                {level}
              </div>
            )}
            <span
              className={cn(
                "mt-1 text-center font-medium",
                size === "sm" && "text-xs",
                size === "md" && "text-sm",
                size === "lg" && "text-base",
                unlocked ? "text-[#0C1F38]" : "text-gray-400",
              )}
            >
              {label}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs p-3">
          <div className="space-y-1">
            <p className="font-semibold">{label}</p>
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
            {maxLevel > 1 && (
              <p className={cn("text-xs font-medium", colors.text)}>
                Nível {level}/{maxLevel}
              </p>
            )}
            {!unlocked && (
              <p className="text-xs italic text-gray-400">
                Conquista bloqueada
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
