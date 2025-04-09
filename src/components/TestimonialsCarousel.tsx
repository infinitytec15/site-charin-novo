import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModernTestimonialCard from "./ModernTestimonialCard";

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
      "A Chargin transformou minha rotina de trabalho. Agora consigo fazer mais corridas com meu carro elétrico sem preocupações com a bateria.",
  },
  {
    id: 2,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    name: "Maria Oliveira",
    title: "Gerente de Frota",
    company: "LogTech Transportes",
    testimonial:
      "Nossa frota de veículos elétricos opera com muito mais eficiência desde que começamos a utilizar a rede Chargin. Economia real e sustentabilidade.",
  },
  {
    id: 3,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    name: "Carlos Mendes",
    title: "Engenheiro",
    company: "EcoSolutions",
    testimonial:
      "Como profissional que viaja muito, os pontos de recarga da Chargin em todo o país me dão a tranquilidade que preciso para usar meu veículo elétrico.",
  },
  {
    id: 4,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    name: "Ana Beatriz",
    title: "Empresária",
    company: "Verde Mobilidade",
    testimonial:
      "A parceria com a Chargin foi fundamental para implementarmos nossa política de sustentabilidade. Nossos clientes adoram a facilidade de recarga.",
  },
  {
    id: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    name: "Roberto Almeida",
    title: "Diretor Comercial",
    company: "Rede Supermercados Eco",
    testimonial:
      "Instalar pontos de recarga Chargin em nossas lojas aumentou significativamente o tempo de permanência dos clientes e as vendas. Um diferencial competitivo real.",
  },
];

const TestimonialsCarousel = ({
  testimonials = defaultTestimonials,
}: TestimonialsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    // Initial calculation
    updateItemsPerPage();

    // Add event listener for window resize
    window.addEventListener("resize", updateItemsPerPage);

    // Cleanup
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

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
  }, [currentIndex, autoplay, itemsPerPage]);

  // Ensure currentIndex is valid when itemsPerPage changes
  useEffect(() => {
    if (currentIndex > testimonials.length - itemsPerPage) {
      setCurrentIndex(0);
    }
  }, [itemsPerPage, currentIndex, testimonials.length]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  // Fixed height container to prevent layout shifts
  const getContainerHeight = () => {
    // Set a fixed height based on screen size
    if (window.innerWidth < 768) {
      return "min-h-[480px]"; // Mobile height
    } else {
      return "min-h-[420px]"; // Desktop height
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full overflow-hidden py-8 bg-white/5 backdrop-blur-sm rounded-xl"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
      ref={containerRef}
    >
      {/* Navigation buttons */}
      <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 z-10 w-full px-4">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-10 w-10 shadow-md border-none"
        >
          <ChevronLeft className="h-6 w-6 text-[#0C1F38]" />
        </Button>
        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-10 w-10 shadow-md border-none"
        >
          <ChevronRight className="h-6 w-6 text-[#0C1F38]" />
        </Button>
      </div>

      {/* Carousel content with fixed height */}
      <div className={`overflow-hidden px-4 ${getContainerHeight()}`}>
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid gap-6 h-full"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
            }}
          >
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="h-full flex">
                <ModernTestimonialCard
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
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 space-x-2">
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
            className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-6 bg-[#00A651]" : "w-2 bg-gray-300"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
