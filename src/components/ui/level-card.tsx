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
}

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
}: LevelCardProps) {
  const progress = Math.min(
    Math.max(0, (points / pointsToNextLevel) * 100),
    100,
  );
  const isMaxLevel = level >= maxLevel;

  return (
    <Card
      className={cn(
        "border-none shadow-lg hover:shadow-xl transition-all overflow-hidden",
        className,
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gray-100 p-3 rounded-full">
            <Icon className="h-8 w-8 text-[#00A651]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0C1F38]">{title}</h3>
            <p className="text-sm text-gray-500">
              Nível {level}/{maxLevel}
            </p>
          </div>
        </div>

        {description && <p className="text-gray-600 mb-4">{description}</p>}

        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium text-gray-600">Progresso</span>
            <span className="font-bold text-[#00A651]">
              {isMaxLevel
                ? "Nível Máximo"
                : `${points}/${pointsToNextLevel} pontos`}
            </span>
          </div>
          <Progress value={isMaxLevel ? 100 : progress} className="h-2.5" />
          <div className="flex justify-between text-xs text-gray-500">
            <span>0</span>
            <span>{pointsToNextLevel}</span>
          </div>
        </div>

        {benefits && benefits.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="font-medium text-sm text-[#0C1F38]">Benefícios:</p>
            <ul className="space-y-1">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="text-[#00A651] mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
