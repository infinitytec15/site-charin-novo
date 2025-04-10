import React from "react";
import { motion } from "framer-motion";
import { Zap, MapPin, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md header-hidden-mobile">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A651] to-[#0C1F38] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white rounded-full p-2 shadow-3d">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-[#00A651] animate-pulse"
              >
                <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
                <line x1="23" y1="13" x2="23" y2="11" />
                <line x1="11" y1="6" x2="7" y2="18" />
                <line x1="16" y1="6" x2="20" y2="18" />
              </svg>
            </div>
          </div>
          <span className="text-2xl font-bold text-[#0C1F38] tracking-tight">
            Chargin
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-1">
          <a
            href="/#map"
            className="px-4 py-2 rounded-full text-sm font-medium hover:text-[#00A651] hover:bg-[#00A651]/10 transition-all duration-300 flex items-center gap-2"
          >
            <MapPin className="h-4 w-4" />
            Mapa de Estações
          </a>
          <a
            href="/#simulator"
            className="px-4 py-2 rounded-full text-sm font-medium hover:text-[#00A651] hover:bg-[#00A651]/10 transition-all duration-300 flex items-center gap-2"
          >
            <Calculator className="h-4 w-4" />
            Simulador
          </a>
          <a
            href="/franchise"
            className="px-4 py-2 rounded-full text-sm font-medium hover:text-[#00A651] hover:bg-[#00A651]/10 transition-all duration-300 flex items-center gap-2"
          >
            <Zap className="h-4 w-4" />
            Seja um Franqueado
          </a>
          <a
            href="/app"
            className="px-4 py-2 rounded-full text-sm font-medium hover:text-[#00A651] hover:bg-[#00A651]/10 transition-all duration-300 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-smartphone"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
            Aplicativo
          </a>
          <a
            href="/points"
            className="px-4 py-2 rounded-full text-sm font-medium hover:text-[#00A651] hover:bg-[#00A651]/10 transition-all duration-300 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Pontos de Recarga
          </a>
          <a
            href="/whitelabel"
            className="px-4 py-2 rounded-full text-sm font-medium hover:text-[#00A651] hover:bg-[#00A651]/10 transition-all duration-300 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-tag"
            >
              <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
              <path d="M7 7h.01" />
            </svg>
            White Label
          </a>
          <a
            href="/sobre"
            className="px-4 py-2 rounded-full text-sm font-medium hover:text-[#00A651] hover:bg-[#00A651]/10 transition-all duration-300 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-info"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Sobre Nós
          </a>
          <a
            href="/contato"
            className="px-4 py-2 rounded-full text-sm font-medium hover:text-[#00A651] hover:bg-[#00A651]/10 transition-all duration-300 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-gradient-to-r from-[#00A651] to-[#00A651]/80 text-white hover:from-[#00A651]/90 hover:to-[#00A651]/70 shadow-lg transition-all duration-300 rounded-full px-6"
            onClick={() => (window.location.href = "/app")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="m19 12-7 7-7-7" />
            </svg>
            Baixe o App
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
