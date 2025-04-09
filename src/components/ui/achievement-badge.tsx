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
                unlocked
                  ? "bg-[#00A651]/20 text-[#00A651]"
                  : "bg-gray-200 text-gray-400",
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
                  level > 0
                    ? "bg-[#00A651] text-white"
                    : "bg-gray-300 text-gray-500",
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
              <p className="text-xs font-medium text-[#00A651]">
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
