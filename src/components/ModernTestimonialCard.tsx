import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ModernTestimonialCardProps {
  image: string;
  name: string;
  title: string;
  company: string;
  testimonial: string;
}

const ModernTestimonialCard = ({
  image = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  name = "Cliente Satisfeito",
  title = "Motorista",
  company = "Empresa",
  testimonial = "A Chargin transformou minha experiência com veículos elétricos. Recarregar nunca foi tão fácil e conveniente!",
}: ModernTestimonialCardProps) => {
  return (
    <Card className="h-full bg-white shadow-lg border-none overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Gradient header */}
        <div className="bg-gradient-to-r from-[#00A651] to-[#00FF99] h-3 w-full"></div>

        <div className="p-6 flex flex-col h-full">
          {/* Avatar centered at top */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00A651] to-[#00FF99] blur-sm transform scale-110"></div>
              <Avatar className="h-16 w-16 border-2 border-white relative z-10 shadow-lg">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback className="bg-[#00A651]/20 text-[#0C1F38] text-lg font-bold">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Quote icon */}
          <div className="flex justify-center mb-4">
            <div className="text-[#00A651] bg-[#00A651]/10 p-2 rounded-full">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          {/* Testimonial text */}
          <div className="flex-grow">
            <p className="text-gray-600 text-center mb-6">{testimonial}</p>
          </div>

          {/* Name and title */}
          <div className="text-center mt-auto pt-4 border-t border-gray-100">
            <h4 className="font-bold text-[#0C1F38]">{name}</h4>
            <p className="text-sm text-gray-500">
              {title}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModernTestimonialCard;
