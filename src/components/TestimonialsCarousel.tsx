import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: number;
  image: string;
  name: string;
  title: string;
  company: string;
  testimonial: string;
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    name: "João Silva",
    title: "Motorista de App",
    company: "Uber",
    testimonial:
      "A EletriCharge transformou minha rotina de trabalho. Agora consigo fazer mais corridas com meu carro elétrico sem preocupações com a bateria.",
  },
  {
    id: 2,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    name: "Maria Oliveira",
    title: "Gerente de Frota",
    company: "LogTech Transportes",
    testimonial:
      "Nossa frota de veículos elétricos opera com muito mais eficiência desde que começamos a utilizar a rede EletriCharge. Economia real e sustentabilidade.",
  },
  {
    id: 3,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    name: "Carlos Mendes",
    title: "Engenheiro",
    company: "EcoSolutions",
    testimonial:
      "Como profissional que viaja muito, os pontos de recarga da EletriCharge em todo o país me dão a tranquilidade que preciso para usar meu veículo elétrico.",
  },
  {
    id: 4,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    name: "Ana Beatriz",
    title: "Empresária",
    company: "Verde Mobilidade",
    testimonial:
      "A parceria com a EletriCharge foi fundamental para implementarmos nossa política de sustentabilidade. Nossos clientes adoram a facilidade de recarga.",
  },
  {
    id: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    name: "Roberto Almeida",
    title: "Diretor Comercial",
    company: "Rede Supermercados Eco",
    testimonial:
      "Instalar pontos de recarga EletriCharge em nossas lojas aumentou significativamente o tempo de permanência dos clientes e as vendas. Um diferencial competitivo real.",
  },
];

const TestimonialsCarousel = ({
  testimonials = defaultTestimonials,
}: TestimonialsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const itemsPerPage =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - itemsPerPage ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1,
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 z-10 w-full px-4">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-10 w-10 shadow-md"
        >
          <ChevronLeft className="h-6 w-6 text-[#0C1F38]" />
        </Button>
        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-10 w-10 shadow-md"
        >
          <ChevronRight className="h-6 w-6 text-[#0C1F38]" />
        </Button>
      </div>

      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from(
          { length: testimonials.length - itemsPerPage + 1 },
          (_, i) => i,
        ).map((i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-6 bg-[#00FF99]" : "w-2 bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
