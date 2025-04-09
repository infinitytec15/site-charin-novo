import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLeft?: boolean;
  delay?: number;
}

const TimelineItem = ({
  year,
  title,
  description,
  icon: Icon,
  isLeft = false,
  delay = 0,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row-reverse" : ""}`}
    >
      <div
        className={`md:w-1/2 ${isLeft ? "md:pl-12 md:text-right" : "md:pr-12 md:text-left"} mb-6 md:mb-0`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-[#0C1F38] dark:text-white mb-2">
            {year}
          </h3>
          <h4 className="text-lg font-semibold text-[#00A651] dark:text-[#00D651] mb-2">
            {title}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            {description}
          </p>
        </motion.div>
      </div>

      <div className="md:w-0 w-full py-4 md:py-0 flex justify-center">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00A651]/30 to-[#00A651]/80 rounded-full" />

          {/* 3D Icon Container */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: delay + 0.1,
            }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#00A651] to-[#00A651]/80 dark:from-[#00D651] dark:to-[#00D651]/80 rounded-xl border-4 border-white dark:border-gray-800 shadow-xl transform rotate-45 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/10 to-white/30 dark:via-white/5 dark:to-white/20"></div>
              <div className="absolute inset-0 transform -rotate-45 flex items-center justify-center">
                <Icon className="h-8 w-8 text-white drop-shadow-md" />
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl blur-md bg-[#00A651]/30 -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>

      <div className="md:w-1/2 invisible md:visible" />
    </motion.div>
  );
};

export default TimelineItem;
