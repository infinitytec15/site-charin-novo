import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AppCarouselProps {
  className?: string;
}

const AppCarousel: React.FC<AppCarouselProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const appScreens = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1621075160523-b936ad96132a?w=400&q=80",
      title: "Mapa de Estações",
      description: "Encontre pontos de recarga próximos a você",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&q=80",
      title: "Monitoramento",
      description: "Acompanhe sua recarga em tempo real",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?w=400&q=80",
      title: "Pagamento Fácil",
      description: "Pague diretamente pelo aplicativo",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=400&q=80",
      title: "Recompensas",
      description: "Acumule pontos e ganhe benefícios",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === appScreens.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? appScreens.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* iPhone frame */}
      <div className="relative mx-auto max-w-[320px]">
        <div className="relative z-10 overflow-hidden rounded-[36px] border-[8px] border-gray-800 shadow-2xl bg-black">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>

          {/* Screen content */}
          <div className="relative h-[580px] w-full bg-white overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col"
              >
                {/* App header */}
                <div className="bg-[#00A651] text-white p-4 flex items-center justify-between">
                  <span className="text-sm font-bold">Chargin</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                  </div>
                </div>

                {/* App content */}
                <div className="flex-1 flex flex-col">
                  <img
                    src={appScreens[currentIndex].image}
                    alt={appScreens[currentIndex].title}
                    className="w-full h-3/4 object-cover"
                  />
                  <div className="p-4 bg-white flex-1">
                    <h3 className="text-lg font-bold text-[#0C1F38]">
                      {appScreens[currentIndex].title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {appScreens[currentIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {appScreens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-[#00A651] w-4" : "bg-gray-300"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Home button */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-400 rounded-full z-20"></div>
        </div>

        {/* Glow effects */}
        <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-[#00A651]/30 blur-3xl animate-pulse"></div>
        <div
          className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-[#00A651]/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg text-[#0C1F38] hover:bg-white transition-all z-20 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg text-[#0C1F38] hover:bg-white transition-all z-20 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Floating elements */}
      <motion.div
        className="absolute -right-16 top-12 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xl flex items-center gap-2 text-sm font-medium hidden md:flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="bg-green-500 p-1.5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span>Recarga completa</span>
      </motion.div>

      <motion.div
        className="absolute -left-16 bottom-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xl flex items-center gap-2 text-sm font-medium hidden md:flex"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="bg-blue-500 p-1.5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <span>Estação próxima</span>
      </motion.div>
    </div>
  );
};

export default AppCarousel;
