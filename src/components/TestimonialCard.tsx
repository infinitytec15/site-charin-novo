import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  image: string;
  name: string;
  title: string;
  company: string;
  testimonial: string;
}

const TestimonialCard = ({
  image = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  name = "Cliente Satisfeito",
  title = "Motorista",
  company = "Empresa",
  testimonial = "A Chargin transformou minha experiência com veículos elétricos. Recarregar nunca foi tão fácil e conveniente!",
}: TestimonialCardProps) => {
  return (
    <Card className="border-none shadow-lg bg-white h-full hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden relative">
      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[#00A651]/10 blur-xl"></div>
      <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-[#00A651]/10 blur-xl"></div>
      <CardContent className="p-8 flex flex-col items-center text-center h-full relative z-10">
        <div className="mb-6">
          <Avatar className="h-20 w-20 border-4 border-[#00A651]/20 shadow-lg">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-[#00A651]/20 text-[#0C1F38] text-xl font-bold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="mb-4">
          <div className="bg-gradient-to-br from-[#00A651]/40 to-[#00A651] p-4 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative mx-auto">
            {/* 3D effect with shadows and highlights */}
            <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-[#00A651]/40 to-[#00A651] -z-10 opacity-60"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20 z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10 z-10"></div>
            <svg
              className="h-6 w-6 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-gray-600 italic bg-gray-50/50 p-3 rounded-md border border-gray-100">
            {testimonial}
          </p>
        </div>
        <div className="mt-auto">
          <h4 className="text-lg font-bold text-[#0C1F38]">{name}</h4>
          <p className="text-sm text-gray-500">
            {title}, {company}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
