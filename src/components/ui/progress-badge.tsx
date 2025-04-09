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
    | "info";
  showValue?: boolean;
  className?: string;
}

const variantColors = {
  default: "bg-primary",
  secondary: "bg-secondary",
  outline: "bg-foreground",
  destructive: "bg-destructive",
  success: "bg-[#00A651]",
  warning: "bg-amber-500",
  info: "bg-blue-500",
};

export function ProgressBadge({
  label,
  value,
  max = 100,
  size = "md",
  variant = "default",
  showValue = true,
  className,
}: ProgressBadgeProps) {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-1.5 px-4",
  };

  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      <Badge
        variant={variant}
        className={cn(
          "font-semibold",
          sizeClasses[size],
          "mb-1 whitespace-nowrap",
        )}
      >
        {label} {showValue && `${value}/${max}`}
      </Badge>
      <Progress
        value={percentage}
        className={cn(
          "h-1.5 w-full",
          size === "lg" && "h-2",
          size === "sm" && "h-1",
        )}
      />
    </div>
  );
}
