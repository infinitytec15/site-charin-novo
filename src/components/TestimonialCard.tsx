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
  testimonial = "A EletriCharge transformou minha experiência com veículos elétricos. Recarregar nunca foi tão fácil e conveniente!",
}: TestimonialCardProps) => {
  return (
    <Card className="border-none shadow-lg bg-white h-full">
      <CardContent className="p-8 flex flex-col items-center text-center h-full">
        <div className="mb-6">
          <Avatar className="h-20 w-20 border-4 border-[#00FF99]/20">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-[#00FF99]/20 text-[#0C1F38] text-xl font-bold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="mb-4">
          <svg
            className="h-8 w-8 text-[#00FF99] mx-auto mb-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-600 italic">{testimonial}</p>
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
