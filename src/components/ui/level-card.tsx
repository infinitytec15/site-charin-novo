import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";

interface LevelCardProps {
  title: string;
  level: number;
  maxLevel: number;
  points: number;
  pointsToNextLevel: number;
  icon: LucideIcon;
  description?: string;
  benefits?: string[];
  className?: string;
  variant?: "bronze" | "silver" | "gold" | "premium" | "default";
}

const variantColors = {
  bronze: {
    icon: "bg-gradient-to-br from-amber-300 to-amber-600",
    progress: "bg-gradient-to-r from-amber-400 to-amber-600",
    text: "text-amber-600",
    glow: "amber-500/30",
    border: "border-amber-300/30",
    badge: "bg-gradient-to-r from-amber-400 to-amber-600 text-white",
  },
  silver: {
    icon: "bg-gradient-to-br from-gray-300 to-gray-600",
    progress: "bg-gradient-to-r from-gray-300 to-gray-500",
    text: "text-gray-600",
    glow: "gray-400/30",
    border: "border-gray-300/30",
    badge: "bg-gradient-to-r from-gray-400 to-gray-600 text-white",
  },
  gold: {
    icon: "bg-gradient-to-br from-yellow-300 to-yellow-600",
    progress: "bg-gradient-to-r from-yellow-300 to-yellow-600",
    text: "text-yellow-600",
    glow: "yellow-400/30",
    border: "border-yellow-300/30",
    badge: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
  },
  premium: {
    icon: "bg-gradient-to-br from-emerald-400 to-[#00A651]",
    progress: "bg-gradient-to-r from-emerald-400 to-[#00A651]",
    text: "text-[#00A651]",
    glow: "emerald-400/30",
    border: "border-emerald-300/30",
    badge: "bg-gradient-to-r from-emerald-400 to-[#00A651] text-white",
  },
  default: {
    icon: "bg-gradient-to-br from-[#00A651]/40 to-[#00A651]",
    progress: "bg-gradient-to-r from-[#00A651]/80 to-[#00A651]",
    text: "text-[#00A651]",
    glow: "green-400/30",
    border: "border-green-300/30",
    badge: "bg-[#00A651] text-white",
  },
};

export function LevelCard({
  title,
  level,
  maxLevel,
  points,
  pointsToNextLevel,
  icon: Icon,
  description,
  benefits,
  className,
  variant = "default",
}: LevelCardProps) {
  const progress = Math.min(
    Math.max(0, (points / pointsToNextLevel) * 100),
    100,
  );
  const isMaxLevel = level >= maxLevel;

  // Get the variant colors
  const colors = variantColors[variant] || variantColors.default;

  return (
    <Card
      className={cn(
        "border-none shadow-lg hover:shadow-xl transition-all overflow-hidden",
        "bg-white/95 backdrop-blur-sm",
        "transform hover:-translate-y-1 hover:scale-[1.02]",
        colors.border,
        className,
      )}
    >
      <CardContent className="p-6 relative">
        {/* Enhanced decorative elements */}
        <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-white/5 to-white/10 blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-gradient-to-br from-white/5 to-white/10 blur-xl"></div>

        <div className="flex items-center gap-4 mb-4">
          <div
            className={cn(
              "p-3 rounded-full",
              colors.icon,
              "transform hover:scale-110 transition-all duration-300",
              "shadow-lg hover:shadow-xl",
              "border border-white/20",
              "relative z-10",
              "overflow-hidden", // Added for inner highlight containment
            )}
          >
            {/* Enhanced 3D effects */}
            {/* Inner highlight effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30 opacity-70"></div>

            {/* Glow effect behind icon */}
            <div
              className={`absolute inset-0 rounded-full blur-sm ${colors.icon} -z-10 opacity-60`}
            ></div>

            {/* Subtle radial gradient for depth */}
            <div className="absolute inset-0 bg-radial-gradient from-white/20 to-transparent opacity-60"></div>

            <Icon
              className={cn("h-8 w-8 text-white drop-shadow-md relative z-10")}
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0C1F38]">{title}</h3>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500">
                Nível {level}/{maxLevel}
              </p>
              {level > 0 && (
                <span
                  className={cn(
                    "text-xs py-0.5 px-2 rounded-full font-medium",
                    colors.badge,
                    "shadow-sm border border-white/30", // Added subtle border
                  )}
                >
                  {level === maxLevel ? "MAX" : `Nível ${level}`}
                </span>
              )}
            </div>
          </div>
        </div>

        {description && (
          <p className="text-gray-600 mb-4 bg-gray-50/50 p-2 rounded-md border border-gray-100 text-sm">
            {description}
          </p>
        )}

        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium text-gray-600">Progresso</span>
            <span className={cn("font-bold", colors.text)}>
              {isMaxLevel
                ? "Nível Máximo"
                : `${points}/${pointsToNextLevel} pontos`}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full overflow-hidden shadow-inner h-3">
            <div
              className={cn(
                colors.progress,
                "h-full rounded-full transition-all duration-500 ease-out",
                "relative overflow-hidden",
                isMaxLevel ? "animate-pulse" : "",
              )}
              style={{ width: `${isMaxLevel ? 100 : progress}%` }}
            >
              {/* Enhanced shine effect */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white to-transparent animate-shine"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>0</span>
            <span>{pointsToNextLevel}</span>
          </div>
        </div>

        {benefits && benefits.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="font-medium text-sm text-[#0C1F38]">Benefícios:</p>
            <ul className="space-y-2 bg-gray-50/50 p-3 rounded-md border border-gray-100">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-600 group"
                >
                  <span
                    className={cn(
                      colors.icon,
                      "mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center",
                      "text-white text-xs font-bold shadow-sm",
                      "group-hover:scale-110 transition-transform duration-300",
                      "border border-white/30 overflow-hidden", // Added for 3D effect
                    )}
                  >
                    {/* Inner highlight for checkmark */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                    <span className="relative z-10">✓</span>
                  </span>
                  <span className="group-hover:text-gray-800 transition-colors duration-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
