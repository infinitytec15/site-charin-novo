import React from "react";
import { MapPin, Smartphone, Tag, Zap, Mail } from "lucide-react";

const MobileFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-2 z-50 lg:hidden mobile-footer-visible">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a
            href="/contato"
            className="flex flex-col items-center justify-center px-2 group"
          >
            <div className="icon-3d">
              <Mail className="h-6 w-6 text-[#0C1F38] transition-all duration-300 group-hover:text-blue-600" />
            </div>
            <span className="text-xs mt-1 text-[#0C1F38]">Contato</span>
          </a>
          <a
            href="/#map"
            className="flex flex-col items-center justify-center px-2 group"
          >
            <div className="icon-3d">
              <MapPin className="h-6 w-6 text-[#0C1F38] transition-all duration-300 group-hover:text-blue-600" />
            </div>
            <span className="text-xs mt-1 text-[#0C1F38]">Estações</span>
          </a>
          <a
            href="/app"
            className="flex flex-col items-center justify-center px-2 group"
          >
            <div className="icon-3d">
              <Smartphone className="h-6 w-6 text-[#0C1F38] transition-all duration-300 group-hover:text-blue-600" />
            </div>
            <span className="text-xs mt-1 text-[#0C1F38]">App</span>
          </a>
          <a
            href="/whitelabel"
            className="flex flex-col items-center justify-center px-2 group"
          >
            <div className="icon-3d">
              <Tag className="h-6 w-6 text-[#0C1F38] transition-all duration-300 group-hover:text-blue-600" />
            </div>
            <span className="text-xs mt-1 text-[#0C1F38]">WhiteLabel</span>
          </a>
          <a
            href="/franchise"
            className="flex flex-col items-center justify-center px-2 group"
          >
            <div className="icon-3d">
              <Zap className="h-6 w-6 text-[#0C1F38] transition-all duration-300 group-hover:text-blue-600" />
            </div>
            <span className="text-xs mt-1 text-[#0C1F38]">Franquia</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
