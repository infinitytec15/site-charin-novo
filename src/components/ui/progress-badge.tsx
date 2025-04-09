import React from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBadgeProps {
  label: string;
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "destructive"
    | "success"
    | "warning"
    | "info"
    | "energy"
    | "eco"
    | "points"
    | "challenge";
  showValue?: boolean;
  className?: string;
  animated?: boolean;
}

const variantColors = {
  default: {
    badge:
      "bg-gradient-to-r from-primary/90 to-primary text-primary-foreground",
    progress: "bg-gradient-to-r from-primary/80 to-primary",
    glow: "primary/30",
  },
  secondary: {
    badge:
      "bg-gradient-to-r from-secondary/90 to-secondary text-secondary-foreground",
    progress: "bg-gradient-to-r from-secondary/80 to-secondary",
    glow: "secondary/30",
  },
  outline: {
    badge: "bg-background text-foreground border border-input",
    progress: "bg-gradient-to-r from-foreground/80 to-foreground",
    glow: "foreground/30",
  },
  destructive: {
    badge:
      "bg-gradient-to-r from-destructive/90 to-destructive text-destructive-foreground",
    progress: "bg-gradient-to-r from-destructive/80 to-destructive",
    glow: "destructive/30",
  },
  success: {
    badge: "bg-gradient-to-r from-emerald-500 to-[#00A651] text-white",
    progress: "bg-gradient-to-r from-emerald-400 to-[#00A651]",
    glow: "emerald-400/30",
  },
  warning: {
    badge: "bg-gradient-to-r from-yellow-500 to-amber-500 text-white",
    progress: "bg-gradient-to-r from-yellow-400 to-amber-500",
    glow: "amber-400/30",
  },
  info: {
    badge: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
    progress: "bg-gradient-to-r from-blue-400 to-blue-600",
    glow: "blue-400/30",
  },
  energy: {
    badge: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
    progress: "bg-gradient-to-r from-blue-400 to-purple-500",
    glow: "purple-400/30",
  },
  eco: {
    badge: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
    progress: "bg-gradient-to-r from-green-400 to-emerald-500",
    glow: "emerald-400/30",
  },
  points: {
    badge: "bg-gradient-to-r from-amber-500 to-orange-600 text-white",
    progress: "bg-gradient-to-r from-amber-400 to-orange-500",
    glow: "orange-400/30",
  },
  challenge: {
    badge: "bg-gradient-to-r from-rose-500 to-pink-600 text-white",
    progress: "bg-gradient-to-r from-rose-400 to-pink-500",
    glow: "pink-400/30",
  },
};

export function ProgressBadge({
  label,
  value,
  max = 100,
  size = "md",
  variant = "default",
  showValue = true,
  className,
  animated = false,
}: ProgressBadgeProps) {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-1.5 px-4",
  };

  // Get the variant colors
  const colors = variantColors[variant] || variantColors.default;

  // 3D effect for badge
  const badgeClasses = cn(
    "font-semibold",
    sizeClasses[size],
    "mb-1 whitespace-nowrap",
    "shadow-md hover:shadow-lg transition-all duration-300",
    "transform hover:scale-105",
    "border border-white/20",
    colors.badge,
  );

  // Animation classes for progress bar
  const animationClass = animated ? "animate-pulse" : "";

  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      <Badge variant="custom" className={badgeClasses}>
        {label} {showValue && `${value}/${max}`}
      </Badge>
      <div className="w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div
          className={cn(
            colors.progress,
            animationClass,
            "relative",
            "h-1.5 rounded-full transition-all duration-500 ease-out",
            size === "lg" && "h-2",
            size === "sm" && "h-1",
          )}
          style={{ width: `${percentage}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white to-transparent animate-shine"></div>
          </div>

          {/* Glow dots for animated badges */}
          {animated && (
            <>
              <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-white/70 transform -translate-y-1/2 animate-pulse"></div>
              <div className="absolute top-1/2 right-[20%] w-1 h-1 rounded-full bg-white/50 transform -translate-y-1/2 animate-ping"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
