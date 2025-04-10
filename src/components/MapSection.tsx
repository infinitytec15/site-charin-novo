import React, { useState, useEffect, useRef, useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  Search,
  Filter,
  MapPin,
  Battery,
  Clock,
  DollarSign,
  Navigation,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import gsap from "gsap";

// Fix Leaflet icon issue
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Set default icon for Leaflet
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41], // Fix popup positioning
});

L.Marker.prototype.options.icon = DefaultIcon;

// Fix for Leaflet CSS
if (typeof window !== "undefined") {
  // This ensures the CSS is properly loaded
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
  link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
  link.crossOrigin = "";
  document.head.appendChild(link);

  // Add additional styles to ensure map tiles are visible
  const style = document.createElement("style");
  style.textContent = `
    .leaflet-tile-container img { 
      width: 256px !important; 
      height: 256px !important; 
    }
    .leaflet-container {
      background-color: #f0f0f0 !important;
      z-index: 100 !important;
      width: 100% !important;
      height: 100% !important;
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      isolation: isolate !important;
      transform: translateZ(0) !important;
      backface-visibility: hidden !important;
      -webkit-backface-visibility: hidden !important;
      will-change: transform !important;
    }
    .leaflet-pane {
      z-index: 100 !important;
    }
    .leaflet-tile-pane {
      z-index: 100 !important;
    }
    .leaflet-overlay-pane {
      z-index: 200 !important;
    }
    .leaflet-marker-pane {
      z-index: 300 !important;
    }
    .leaflet-popup-pane {
      z-index: 400 !important;
    }
    .leaflet-control {
      z-index: 500 !important;
    }
    .leaflet-popup-content-wrapper {
      max-width: 300px !important;
      width: auto !important;
    }
    .leaflet-popup-content {
      margin: 8px !important;
      width: auto !important;
    }
    /* Prevent scroll-through behavior */
    .map-section-scrollable {
      isolation: isolate !important;
      background-color: white !important;
      transform: translateZ(0) !important;
      backface-visibility: hidden !important;
      -webkit-backface-visibility: hidden !important;
      will-change: transform !important;
    }
    /* Ensure the map container is opaque */
    .leaflet-container-fix {
      background-color: #f0f0f0 !important;
      isolation: isolate !important;
      transform: translateZ(0) !important;
      backface-visibility: hidden !important;
      -webkit-backface-visibility: hidden !important;
    }
  `;
  document.head.appendChild(style);

  // Add event listener to prevent scroll propagation
  document.addEventListener("DOMContentLoaded", () => {
    const mapContainers = document.querySelectorAll(".leaflet-container");
    mapContainers.forEach((container) => {
      container.addEventListener(
        "wheel",
        (e) => {
          e.stopPropagation();
        },
        { passive: false },
      );
    });
  });
}
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

interface ChargingStation {
  id: string;
  name: string;
  address: string;
  distance: string;
  connectorTypes: string[];
  availability: "available" | "busy" | "offline";
  pricePerKwh: number;
  rating: number;
  position: [number, number]; // Latitude, Longitude
}

// Custom marker icon component with 3D effect
const createCustomIcon = (availability: string) => {
  let color = "";
  switch (availability) {
    case "available":
      color = "#4ade80"; // green-500
      break;
    case "busy":
      color = "#eab308"; // yellow-500
      break;
    case "offline":
      color = "#6b7280"; // gray-500
      break;
    default:
      color = "#6b7280";
  }

  return L.divIcon({
    className: "custom-icon",
    html: `
      <div style="
        width: 36px; 
        height: 36px; 
        background-color: #00FF99; 
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(255, 255, 255, 0.8);
        transform: perspective(40px) rotateX(10deg);
        transition: all 0.3s ease;
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C1F38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <div style="
          position: absolute; 
          bottom: -2px; 
          right: -2px; 
          width: 14px; 
          height: 14px; 
          background-color: ${color}; 
          border-radius: 50%; 
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        "></div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36], // Fix popup positioning
  });
};

// Helper functions for availability status
const getAvailabilityColor = (status: string) => {
  switch (status) {
    case "available":
      return "bg-green-500";
    case "busy":
      return "bg-yellow-500";
    case "offline":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
};

const getAvailabilityText = (status: string) => {
  switch (status) {
    case "available":
      return "Disponível";
    case "busy":
      return "Ocupado";
    case "offline":
      return "Offline";
    default:
      return "Desconhecido";
  }
};

// Marker component with click handler for direct routing
const AnimatedMarker = ({
  station,
  onMarkerClick,
}: {
  station: ChargingStation;
  onMarkerClick: (station: ChargingStation) => void;
}) => {
  const markerRef = useRef<L.Marker>(null);

  return (
    <Marker
      position={station.position}
      icon={createCustomIcon(station.availability)}
      ref={markerRef}
      eventHandlers={{
        click: () => {
          onMarkerClick(station);
        },
      }}
    >
      <Popup>
        <div className="p-2 min-w-[250px]">
          <h3 className="font-semibold">{station.name}</h3>
          <p className="text-sm text-gray-600">{station.address}</p>
          <div className="flex items-center gap-1 mt-1">
            <div
              className={`w-2 h-2 rounded-full ${getAvailabilityColor(station.availability)}`}
            ></div>
            <span className="text-xs">
              {getAvailabilityText(station.availability)}
            </span>
          </div>
          <p className="text-xs mt-1">
            R$ {station.pricePerKwh.toFixed(2).replace(".", ",")}/kWh
          </p>
          {station.id === "1" && (
            <p className="text-xs mt-1 text-gray-600 italic">
              Estação localizada na região norte do Brasil, ideal para veículos
              elétricos que trafegam pela costa amazônica.
            </p>
          )}
          {station.id === "2" && (
            <p className="text-xs mt-1 text-gray-600 italic">
              Estação estratégica no interior de São Paulo, perfeita para
              recarregar veículos elétricos em rotas que conectam a capital ao
              sul do estado.
            </p>
          )}
          {station.id === "3" && (
            <p className="text-xs mt-1 text-gray-600 italic">
              Estação de recarga na capital paranaense, conhecida por sua
              sustentabilidade e infraestrutura para veículos elétricos.
            </p>
          )}
          {station.id === "4" && (
            <p className="text-xs mt-1 text-gray-600 italic">
              Estação localizada no nordeste brasileiro, próxima a praias e
              pontos turísticos, facilitando a mobilidade elétrica na região.
            </p>
          )}
          <div className="mt-2">
            <Button
              size="sm"
              className="w-full bg-[#00FF99] hover:bg-[#00CC77] text-[#0C1F38] font-medium"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onMarkerClick(station);
              }}
            >
              <Navigation size={14} className="mr-1" /> Traçar Rota
            </Button>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

// Map center animation component with routing capability
const MapCenterAnimator = ({
  center,
  zoom = 13,
  selectedStation,
  routingControlRef,
}: {
  center: [number, number];
  zoom?: number;
  selectedStation?: ChargingStation;
  routingControlRef: React.MutableRefObject<L.Routing.Control | null>;
}) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 0.8,
    });
  }, [center, map, zoom]);

  // Handle routing when a station is selected
  useEffect(() => {
    // Remove previous routing control if it exists
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
      routingControlRef.current = null;
    }

    // If a station is selected, create a route
    if (selectedStation) {
      // Try to get user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = [
            position.coords.latitude,
            position.coords.longitude,
          ];

          // Create routing control with improved configuration
          routingControlRef.current = L.Routing.control({
            waypoints: [
              L.latLng(userLocation[0], userLocation[1]),
              L.latLng(
                selectedStation.position[0],
                selectedStation.position[1],
              ),
            ],
            routeWhileDragging: true,
            showAlternatives: true,
            fitSelectedRoutes: true,
            lineOptions: {
              styles: [{ color: "#00FF99", weight: 4 }],
              extendToWaypoints: true,
              missingRouteTolerance: 0,
            },
            altLineOptions: {
              styles: [{ color: "#0C1F38", weight: 2, opacity: 0.7 }],
            },
            createMarker: function () {
              return null;
            }, // Don't create default markers
            collapsible: true,
            show: false, // Don't show the routing control panel
            autoRoute: true,
            addWaypoints: false, // Prevent users from adding waypoints
            draggableWaypoints: false, // Prevent users from dragging waypoints
          }).addTo(map);

          // Track routing in Google Tag Manager
          if (window.dataLayer) {
            window.dataLayer.push({
              event: "routeCalculated",
              routeOrigin: `${userLocation[0]},${userLocation[1]}`,
              routeDestination: `${selectedStation.position[0]},${selectedStation.position[1]}`,
              stationName: selectedStation.name,
            });
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
          // If user location is not available, just center on the station
          map.flyTo(selectedStation.position, 14);
        },
      );
    }

    return () => {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
    };
  }, [selectedStation, map, routingControlRef]);

  return null;
};

// Ensure map is properly sized and prevent scroll-through
const FixMapSize = () => {
  const map = useMap();

  useEffect(() => {
    // Force map to recalculate size and redraw tiles
    const resizeMap = () => {
      map.invalidateSize(true);
      // Force redraw of tiles
      setTimeout(() => {
        map.setZoom(map.getZoom());
      }, 100);

      // Track map resize in Google Tag Manager
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "mapResized",
          mapZoom: map.getZoom(),
          mapCenter: map.getCenter()
            ? [map.getCenter().lat, map.getCenter().lng]
            : null,
        });
      }
    };

    // More aggressive initial resize with multiple attempts to ensure it works
    setTimeout(resizeMap, 100);
    setTimeout(resizeMap, 300);
    setTimeout(resizeMap, 500);
    setTimeout(resizeMap, 1000);
    setTimeout(resizeMap, 2000); // Added extra timeout for slower devices

    // Add resize listener
    window.addEventListener("resize", resizeMap);

    // Create an observer to detect DOM changes that might affect the map container
    const observer = new MutationObserver(resizeMap);
    const mapContainer = map.getContainer();
    if (mapContainer && mapContainer.parentElement) {
      observer.observe(mapContainer.parentElement, {
        attributes: true,
        childList: true,
        subtree: true,
      });

      // Prevent scroll events from propagating through the map container
      mapContainer.addEventListener(
        "wheel",
        (e) => {
          e.stopPropagation();
        },
        { passive: false },
      );

      // Prevent touch events from propagating (for mobile)
      mapContainer.addEventListener(
        "touchmove",
        (e) => {
          e.stopPropagation();
        },
        { passive: false },
      );
    }

    // Force resize when tab becomes visible
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        setTimeout(resizeMap, 100);
      }
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeMap);
      document.removeEventListener("visibilitychange", resizeMap);
      if (mapContainer) {
        mapContainer.removeEventListener("wheel", (e) => e.stopPropagation());
        mapContainer.removeEventListener("touchmove", (e) =>
          e.stopPropagation(),
        );
      }
      observer.disconnect();
    };
  }, [map]);

  return null;
};

interface MapSectionProps {
  isFranchiseMode?: boolean;
  containerHeight?: string;
  containerClassName?: string;
}

const MapSection = ({
  isFranchiseMode = false,
  containerHeight = "800px",
  containerClassName = "",
}: MapSectionProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);
  const routingControlRef = useRef<L.Routing.Control | null>(null);
  const { toast } = useToast();
  const [fullScreen, setFullScreen] = useState(false);

  // Add custom styles for scrollbar and animations to head
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #00FF99;
        border-radius: 10px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #00CC77;
      }
      /* Ensure fullscreen map is above everything */
      .fixed.z-\[9999999\] {
        z-index: 9999999 !important;
        background-color: white !important;
        isolation: isolate !important;
        position: fixed !important;
        inset: 0 !important;
        visibility: visible !important;
        display: block !important;
        opacity: 1 !important;
      }
      /* Hide all other content when map is fullscreen */
      body.map-fullscreen > *:not(.fixed.z-\[9999999\]) {
        visibility: hidden !important;
      }
      body.map-fullscreen .fixed.z-\[9999999\] {
        visibility: visible !important;
      }
      /* Hide specific elements that might be showing through */
      body.map-fullscreen h1, 
      body.map-fullscreen h2, 
      body.map-fullscreen h3,
      body.map-fullscreen .encontre-estacao-text {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        z-index: -1 !important;
      }

      .station-card {
        transition: all 0.3s ease;
      }
      .station-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
        100% { transform: translateY(0px); }
      }
      .icon-3d {
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
        transition: all 0.3s ease;
      }
      .icon-float {
        animation: float 3s ease-in-out infinite;
      }
      .icon-3d:hover {
        filter: drop-shadow(2px 8px 8px rgba(0, 0, 0, 0.2));
        transform: translateY(-5px);
      }
      .fullscreen-enter {
        animation: fullscreenEnter 0.4s ease-out forwards;
      }
      .fullscreen-exit {
        animation: fullscreenExit 0.4s ease-in forwards;
      }
      @keyframes fullscreenEnter {
        from { transform: scale(0.95); opacity: 0.8; }
        to { transform: scale(1); opacity: 1; }
      }
      @keyframes fullscreenExit {
        from { transform: scale(1); opacity: 1; }
        to { transform: scale(0.95); opacity: 0.8; }
      }
      .map-section-scrollable {
        max-height: 100vh;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #00FF99 #f1f1f1;
        background-color: white !important;
        transform: translateZ(0);
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        will-change: transform;
      }
      .map-section-scrollable::-webkit-scrollbar {
        width: 6px;
      }
      .map-section-scrollable::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      .map-section-scrollable::-webkit-scrollbar-thumb {
        background-color: #00FF99;
        border-radius: 6px;
      }
      /* Prevent body scrolling when map is in fullscreen */
      body.map-fullscreen {
        overflow: hidden !important;
      }
      /* Ensure no background bleed in fullscreen */
      .fullscreen-enter {
        background-color: white !important;
        z-index: 9999999 !important;
        isolation: isolate !important;
        position: fixed !important;
        inset: 0 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Remove opacity animations and ensure elements are always visible
  useEffect(() => {
    // Set elements to be fully visible immediately without animations
    if (mapContainerRef.current && filtersRef.current && searchRef.current) {
      // Apply styles directly to ensure visibility
      mapContainerRef.current.style.opacity = "1";
      mapContainerRef.current.style.visibility = "visible";
      mapContainerRef.current.style.display = "block";

      filtersRef.current.style.opacity = "1";
      filtersRef.current.style.visibility = "visible";
      filtersRef.current.style.display = "block";

      searchRef.current.style.opacity = "1";
      searchRef.current.style.visibility = "visible";
      searchRef.current.style.display = "block";
      searchRef.current.style.transform = "translateY(0)";

      // Also use GSAP for additional safety
      gsap.set(searchRef.current, {
        opacity: 1,
        y: 0,
        visibility: "visible",
        display: "block",
      });
      gsap.set(filtersRef.current, {
        opacity: 1,
        visibility: "visible",
        display: "block",
      });
      gsap.set(mapContainerRef.current, {
        opacity: 1,
        scale: 1,
        visibility: "visible",
        display: "block",
      });

      // Reset filters to default state on component load
      setSelectedFilters({
        connectorTypes: [],
        availability: [],
      });
      setPriceRange([0, 2]);
      setFiltersApplied(false);

      // Track component visibility in Google Tag Manager
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "mapSectionVisible",
          componentId: "mapSection",
        });
      }
    }
  }, []);

  // Hide all content and prevent body scrolling when in fullscreen mode
  useEffect(() => {
    const header = document.querySelector("header");
    const body = document.body;
    const allPageContent = document.querySelectorAll(
      "body > *:not(#root):not(script)",
    );

    // Find and hide the specific "Encontre uma Estação" element
    const encontreTexts = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, div",
    );
    encontreTexts.forEach((el) => {
      if (el.textContent && el.textContent.includes("Encontre uma Estação")) {
        el.classList.add("encontre-estacao-text");
      }
    });

    if (fullScreen) {
      // Hide all other content
      if (header) header.style.display = "none";
      body.classList.add("map-fullscreen");

      // Hide any other elements that might be showing through
      allPageContent.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.visibility = "hidden";
        }
      });

      // Prevent scrolling on the body
      const scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
      body.style.overflow = "hidden";

      // Make sure our map container is above everything else
      if (mapSectionRef.current) {
        mapSectionRef.current.style.zIndex = "9999999";
        mapSectionRef.current.style.visibility = "visible";
        mapSectionRef.current.style.display = "block";
        mapSectionRef.current.style.opacity = "1";
        mapSectionRef.current.style.backgroundColor = "white";
      }
    } else {
      // Restore visibility
      if (header) header.style.display = "block";
      body.classList.remove("map-fullscreen");

      // Show all other elements again
      allPageContent.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.visibility = "visible";
        }
      });

      // Restore scrolling
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      // Restore visibility and scrolling when component unmounts
      if (header) header.style.display = "block";
      body.classList.remove("map-fullscreen");
      allPageContent.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.visibility = "visible";
        }
      });
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflow = "";
    };
  }, [fullScreen]);

  const [activeTab, setActiveTab] = useState("map");
  const [priceRange, setPriceRange] = useState([0, 2]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    connectorTypes: [] as string[],
    availability: [] as string[],
  });

  // State to track if filters have been applied
  const [filtersApplied, setFiltersApplied] = useState(false);

  // Mock data for charging stations
  const mockStations: ChargingStation[] = [
    {
      id: "1",
      name: "Estação Macapá",
      address: "Próximo à costa do Amapá, Brasil, na região de Macapá",
      distance: "1.2 km",
      connectorTypes: ["CCS", "CHAdeMO"],
      availability: "available",
      pricePerKwh: 1.25,
      rating: 4.5,
      position: [0.0203674, -51.068569], // Macapá - Costa Amazônica
    },
    {
      id: "2",
      name: "Estação Itapetininga",
      address: "Itapetininga, São Paulo, Brasil",
      distance: "2.5 km",
      connectorTypes: ["Type 2", "CCS"],
      availability: "busy",
      pricePerKwh: 1.5,
      rating: 4.2,
      position: [-23.6297976, -48.0377299], // Itapetininga - SP
    },
    {
      id: "3",
      name: "Estação Curitiba",
      address: "Curitiba, Paraná, Brasil",
      distance: "3.8 km",
      connectorTypes: ["Type 2"],
      availability: "available",
      pricePerKwh: 1.15,
      rating: 4.7,
      position: [-25.4295963, -49.2712724], // Curitiba - PR
    },
    {
      id: "4",
      name: "Estação Natal",
      address: "Natal, Rio Grande do Norte, Brasil",
      distance: "0.8 km",
      connectorTypes: ["CCS", "CHAdeMO", "Type 2"],
      availability: "available",
      pricePerKwh: 1.35,
      rating: 4.8,
      position: [-5.805398, -35.2080905], // Natal - RN
    },
    {
      id: "5",
      name: "Recarga Belo Horizonte",
      address: "Av. Afonso Pena, 1000, Belo Horizonte, MG",
      distance: "1.5 km",
      connectorTypes: ["Type 2", "CCS"],
      availability: "busy",
      pricePerKwh: 1.2,
      rating: 4.3,
      position: [-19.9167, -43.9345], // Belo Horizonte
    },
    {
      id: "6",
      name: "Eletroposto Curitiba Centro",
      address: "Rua XV de Novembro, 250, Curitiba, PR",
      distance: "2.1 km",
      connectorTypes: ["Type 2"],
      availability: "available",
      pricePerKwh: 1.1,
      rating: 4.6,
      position: [-25.4284, -49.2733], // Curitiba - Centro
    },
  ];

  const [selectedStation, setSelectedStation] =
    useState<ChargingStation | null>(null);

  const handleStationSelect = (station: ChargingStation) => {
    setSelectedStation(station);
    setActiveTab("map"); // Switch to map tab to show the route
  };

  const toggleFilter = (
    type: "connectorTypes" | "availability",
    value: string,
  ) => {
    setSelectedFilters((prev) => {
      const current = [...prev[type]];
      if (current.includes(value)) {
        return { ...prev, [type]: current.filter((item) => item !== value) };
      } else {
        return { ...prev, [type]: [...current, value] };
      }
    });
  };

  // Add franchise-specific stations when in franchise mode
  const allStations = useMemo(() => {
    if (isFranchiseMode) {
      // Add franchise-specific locations
      return [
        ...mockStations,
        {
          id: "7",
          name: "Franquia Disponível - Florianópolis",
          address: "Av. Beira Mar Norte, Florianópolis, SC",
          distance: "0.5 km",
          connectorTypes: ["CCS", "Type 2"],
          availability: "available",
          pricePerKwh: 1.3,
          rating: 4.9,
          position: [-27.5969, -48.5495], // Florianópolis
        },
        {
          id: "8",
          name: "Franquia Disponível - Salvador",
          address: "Av. Oceânica, Salvador, BA",
          distance: "1.0 km",
          connectorTypes: ["CCS", "CHAdeMO"],
          availability: "available",
          pricePerKwh: 1.4,
          rating: 4.7,
          position: [-12.9714, -38.5014], // Salvador
        },
        {
          id: "9",
          name: "Franquia Disponível - Recife",
          address: "Av. Boa Viagem, Recife, PE",
          distance: "1.2 km",
          connectorTypes: ["Type 2"],
          availability: "available",
          pricePerKwh: 1.35,
          rating: 4.6,
          position: [-8.0476, -34.877], // Recife
        },
        {
          id: "10",
          name: "Franquia Disponível - Fortaleza",
          address: "Av. Beira Mar, Fortaleza, CE",
          distance: "0.8 km",
          connectorTypes: ["CCS", "Type 2"],
          availability: "available",
          pricePerKwh: 1.25,
          rating: 4.8,
          position: [-3.7319, -38.5267], // Fortaleza
        },
        {
          id: "11",
          name: "Franquia Disponível - Porto Alegre",
          address: "Av. Ipiranga, Porto Alegre, RS",
          distance: "1.5 km",
          connectorTypes: ["CCS", "CHAdeMO", "Type 2"],
          availability: "available",
          pricePerKwh: 1.2,
          rating: 4.5,
          position: [-30.0346, -51.2177], // Porto Alegre
        },
        {
          id: "12",
          name: "Franquia Disponível - Brasília",
          address: "Eixo Monumental, Brasília, DF",
          distance: "2.0 km",
          connectorTypes: ["CCS", "Type 2"],
          availability: "available",
          pricePerKwh: 1.45,
          rating: 4.4,
          position: [-15.7801, -47.9292], // Brasília
        },
      ];
    }

    return mockStations;
  }, [mockStations, isFranchiseMode]);

  // Filter stations based on search query and other filters
  const filteredStations = useMemo(() => {
    let filtered = allStations;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((station) => {
        return station.address.toLowerCase().includes(query);
      });
    }

    // Filter by connector types
    if (selectedFilters.connectorTypes.length > 0) {
      filtered = filtered.filter((station) => {
        return station.connectorTypes.some((type) =>
          selectedFilters.connectorTypes.includes(type),
        );
      });
    }

    // Filter by availability
    if (selectedFilters.availability.length > 0) {
      filtered = filtered.filter((station) => {
        return selectedFilters.availability.includes(station.availability);
      });
    }

    // Filter by price range
    filtered = filtered.filter((station) => {
      return (
        station.pricePerKwh >= priceRange[0] &&
        station.pricePerKwh <= priceRange[1]
      );
    });

    return filtered;
  }, [searchQuery, selectedFilters, priceRange, allStations]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission with improved map refresh
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set filters as applied when search is submitted
    setFiltersApplied(true);

    // If there are filtered results and we're not already viewing the first one
    if (filteredStations.length > 0) {
      setSelectedStation(filteredStations[0]);

      // Get the coordinates of the first result to center the map
      if (activeTab === "map") {
        // If we're in map view, we'll center on the first result
        // Force map to recalculate size after search
        setTimeout(() => {
          const mapElement = document.querySelector(".leaflet-container");
          if (mapElement && mapElement instanceof HTMLElement) {
            const event = new Event("resize");
            window.dispatchEvent(event);
          }
        }, 100);
      } else {
        // If we're in list view, switch to map view to show the result
        setActiveTab("map");
        // Force map to recalculate size after tab switch
        setTimeout(() => {
          const mapElement = document.querySelector(".leaflet-container");
          if (mapElement && mapElement instanceof HTMLElement) {
            const event = new Event("resize");
            window.dispatchEvent(event);
          }
        }, 300);
      }
    } else {
      // No results found - show a message
      toast({
        title: "Nenhum resultado encontrado",
        description:
          "Nenhum ponto de recarga encontrado para esta busca. Tente outra localização.",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      ref={mapSectionRef}
      className={`${fullScreen ? "fixed inset-0 z-[9999999]" : "w-full h-full"} bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-lg border border-gray-200 ${containerClassName} transition-all duration-500 ease-in-out ${fullScreen ? "fullscreen-enter map-section-scrollable" : "fullscreen-exit"}`}
      style={{
        backgroundColor: "white",
        position: fullScreen ? "fixed" : "relative",
        isolation: "isolate",
        zIndex: fullScreen ? 9999999 : 100, // Ultra high z-index when fullscreen
        backdropFilter: fullScreen ? "blur(10px)" : "none",
        boxShadow: fullScreen
          ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Add shadow even when not fullscreen
        overflowY: "auto",
        maxHeight: fullScreen ? "100vh" : "auto",
        isolation: "isolate", // Create a new stacking context
        transform: "translateZ(0)", // Force hardware acceleration
        backfaceVisibility: "hidden", // Prevent background bleed
      }}
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0C1F38] flex items-center">
          <MapPin className="mr-2 h-6 w-6 text-[#00FF99] icon-3d icon-float" />
          Encontre Pontos de Recarga
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - Map and search */}
        <div className={`w-full ${fullScreen ? "lg:w-3/4" : "lg:w-2/3"}`}>
          <div
            ref={searchRef}
            className="mb-4 flex flex-col md:flex-row gap-4 bg-white rounded-lg p-2 shadow-sm border border-gray-100"
            style={{ opacity: 1, visibility: "visible" }}
          >
            <form
              onSubmit={handleSearchSubmit}
              className="flex flex-col sm:flex-row flex-grow gap-2"
            >
              <div className="relative flex-grow">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 icon-3d"
                  size={18}
                />
                <Input
                  placeholder="Buscar por cidade, estado ou franquia (ex: São Paulo, SP)"
                  className="pl-10 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-[#00FF99] focus:border-transparent transition-all duration-300"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <Button
                type="submit"
                className="bg-[#00FF99] hover:bg-[#00CC77] text-[#0C1F38] font-medium transition-all duration-300 transform hover:scale-105 shadow-sm"
              >
                <Search size={16} className="mr-2 icon-3d" /> Buscar
              </Button>
              <Button
                type="button"
                className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-sm"
                onClick={() => {
                  // Scroll to filters section on mobile
                  if (window.innerWidth < 1024 && filtersRef.current) {
                    filtersRef.current.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Filter size={16} className="mr-2 icon-3d" /> Filtros
              </Button>
            </form>
          </div>

          <Tabs defaultValue="map" className="w-full">
            <TabsList className="mb-4 bg-gray-100 border border-gray-300 p-1 rounded-lg shadow-sm">
              <TabsTrigger
                value="map"
                onClick={() => setActiveTab("map")}
                className={`transition-all duration-300 ${activeTab === "map" ? "bg-[#00FF99] text-[#0C1F38] shadow-sm" : "hover:bg-gray-200"}`}
              >
                Mapa
              </TabsTrigger>
              <TabsTrigger
                value="list"
                onClick={() => setActiveTab("list")}
                className={`transition-all duration-300 ${activeTab === "list" ? "bg-[#00FF99] text-[#0C1F38] shadow-sm" : "hover:bg-gray-200"}`}
              >
                Lista
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="w-full">
              <div
                ref={mapContainerRef}
                className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden relative border border-gray-300 transition-all duration-300"
                style={{
                  minHeight: fullScreen ? "600px" : "500px",
                  height: fullScreen ? "calc(100vh - 300px)" : containerHeight,
                  backgroundColor: "#f0f0f0",
                  position: "relative",
                  zIndex: 10,
                  display: "block",
                  visibility: "visible",
                  opacity: 1,
                  isolation: "isolate", // Create a new stacking context
                }}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                <MapContainer
                  center={[-15.7801, -47.9292]} // Centralizado no Brasil
                  zoom={4} // Zoom mais afastado para mostrar o Brasil inteiro
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#f0f0f0",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 10, // Increased z-index
                    visibility: "visible",
                    opacity: 1,
                    borderRadius: "0.5rem",
                    isolation: "isolate", // Create a new stacking context
                  }}
                  className="leaflet-container-fix"
                  key="map-container"
                  // Add event handlers to prevent scroll propagation
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    e.originalEvent.preventDefault();
                  }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    subdomains={["a", "b", "c"]}
                    className="leaflet-tile-layer"
                  />

                  {selectedStation && (
                    <MapCenterAnimator
                      center={selectedStation.position}
                      zoom={14}
                      selectedStation={selectedStation}
                      routingControlRef={routingControlRef}
                    />
                  )}

                  {filteredStations.map((station) => (
                    <AnimatedMarker
                      key={station.id}
                      station={station}
                      onMarkerClick={handleStationSelect}
                    />
                  ))}

                  <FixMapSize />
                </MapContainer>

                <div
                  className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg text-sm z-[1000] border border-gray-300 transition-all duration-300 max-w-[200px] md:max-w-none"
                  style={{
                    visibility: "visible",
                    opacity: 1,
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Disponível</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span>Ocupado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                    <span>Offline</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="list" className="w-full">
              <div
                className="space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar pr-2"
                style={{ scrollbarWidth: "thin" }}
              >
                {filteredStations.map((station) => (
                  <Card
                    key={station.id}
                    className={`cursor-pointer hover:border-[#00FF99] transition-all duration-300 shadow-md station-card ${selectedStation?.id === station.id ? "border-[#00FF99] border-2" : "border border-gray-300"}`}
                    onClick={() => handleStationSelect(station)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {station.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {station.address}
                          </p>
                          <div className="flex gap-2 mt-2">
                            {station.connectorTypes.map((type) => (
                              <Badge
                                key={type}
                                variant="outline"
                                className="bg-gray-100"
                              >
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <div
                              className={`w-2 h-2 rounded-full ${getAvailabilityColor(station.availability)}`}
                            ></div>
                            <span className="text-sm">
                              {getAvailabilityText(station.availability)}
                            </span>
                          </div>
                          <p className="text-sm">{station.distance}</p>
                          <p className="font-medium text-[#0C1F38]">
                            R${" "}
                            {station.pricePerKwh.toFixed(2).replace(".", ",")}
                            /kWh
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right side - Filters */}
        <div className={`w-full ${fullScreen ? "lg:w-1/4" : "lg:w-1/3"}`}>
          <Card
            ref={filtersRef}
            className="border border-gray-300 shadow-lg mb-6 transition-all duration-300"
            style={{
              visibility: "visible",
              opacity: 1,
              zIndex: 10,
              borderRadius: "0.75rem",
            }}
          >
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5 text-[#00FF99] icon-3d icon-float" />
                Filtros
              </h3>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Battery className="mr-2 h-4 w-4 text-gray-600 icon-3d" />
                  Tipo de Conector
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["CCS", "CHAdeMO", "Type 2", "Type 1"].map((type) => (
                    <Badge
                      key={type}
                      variant={
                        selectedFilters.connectorTypes.includes(type)
                          ? "default"
                          : "outline"
                      }
                      className={`cursor-pointer ${selectedFilters.connectorTypes.includes(type) ? "bg-[#00FF99] text-[#0C1F38] hover:bg-[#00CC77]" : "hover:bg-gray-100"}`}
                      onClick={() => toggleFilter("connectorTypes", type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  Disponibilidade
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "available", label: "Disponível" },
                    { id: "busy", label: "Ocupado" },
                    { id: "offline", label: "Offline" },
                  ].map((status) => (
                    <Badge
                      key={status.id}
                      variant={
                        selectedFilters.availability.includes(status.id)
                          ? "default"
                          : "outline"
                      }
                      className={`cursor-pointer ${selectedFilters.availability.includes(status.id) ? "bg-[#00FF99] text-[#0C1F38] hover:bg-[#00CC77]" : "hover:bg-gray-100"}`}
                      onClick={() => toggleFilter("availability", status.id)}
                    >
                      {status.label}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <DollarSign className="mr-2 h-4 w-4 text-gray-600 icon-3d" />
                  Preço por kWh
                </h4>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 2]}
                    max={3}
                    step={0.1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>R$ {priceRange[0].toFixed(2).replace(".", ",")}</span>
                  <span>R$ {priceRange[1].toFixed(2).replace(".", ",")}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-2">
                <Button
                  className="flex-1 bg-[#00FF99] hover:bg-[#00CC77] text-[#0C1F38] transition-all duration-300 transform hover:scale-105 shadow-md rounded-lg"
                  onClick={() => {
                    // Set filters as applied
                    setFiltersApplied(true);

                    // Scroll to results if they exist
                    if (filteredStations.length > 0) {
                      setTimeout(() => {
                        const resultsElement = document.querySelector(
                          ".filtered-results-heading",
                        );
                        if (resultsElement) {
                          resultsElement.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }, 100);
                    }
                  }}
                >
                  <Filter size={16} className="mr-2 icon-3d" />
                  Aplicar Filtros ({filteredStations.length})
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 transition-all duration-300 hover:bg-gray-100 rounded-lg"
                  onClick={() => {
                    setSelectedFilters({
                      connectorTypes: [],
                      availability: [],
                    });
                    setPriceRange([0, 2]);
                    setFiltersApplied(false);
                    setSelectedStation(null);
                    setSearchQuery("");
                  }}
                >
                  Limpar
                </Button>
              </div>

              {/* Lista de estações filtradas abaixo dos filtros - só aparece quando os filtros são aplicados */}
              {filtersApplied && (
                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold text-lg border-t pt-4 filtered-results-heading flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-[#00FF99] icon-3d icon-float" />
                    Estações Encontradas ({filteredStations.length})
                  </h3>
                  <div
                    className="overflow-y-auto pr-2 custom-scrollbar"
                    style={{
                      scrollbarWidth: "thin",
                      scrollBehavior: "smooth",
                      overflowY: "auto",
                      maxHeight: fullScreen ? "calc(100vh - 500px)" : "400px",
                      minHeight: "200px",
                    }}
                  >
                    {filteredStations.length > 0 ? (
                      filteredStations.map((station) => (
                        <Card
                          key={station.id}
                          className={`cursor-pointer hover:border-[#00FF99] transition-all duration-300 shadow-md mb-4 station-card ${selectedStation?.id === station.id ? "border-[#00FF99] border-2" : "border border-gray-300"}`}
                          onClick={() => handleStationSelect(station)}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-lg">
                                  {station.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {station.address}
                                </p>
                                <div className="flex gap-2 mt-2">
                                  {station.connectorTypes.map((type) => (
                                    <Badge
                                      key={type}
                                      variant="outline"
                                      className="bg-gray-100"
                                    >
                                      {type}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-1 mb-1">
                                  <div
                                    className={`w-2 h-2 rounded-full ${getAvailabilityColor(station.availability)}`}
                                  ></div>
                                  <span className="text-sm">
                                    {getAvailabilityText(station.availability)}
                                  </span>
                                </div>
                                <p className="text-sm">{station.distance}</p>
                                <p className="font-medium text-[#0C1F38]">
                                  R${" "}
                                  {station.pricePerKwh
                                    .toFixed(2)
                                    .replace(".", ",")}
                                  /kWh
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-inner">
                        <p className="text-gray-600 mb-2">
                          Nenhuma estação encontrada com os filtros
                          selecionados.
                        </p>
                        <p className="text-sm text-gray-500">
                          Tente ajustar seus filtros para ver mais resultados.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Selected station details */}
          {selectedStation && (
            <Card
              className="mt-6 border border-gray-300 shadow-lg transition-all duration-300"
              style={{
                visibility: "visible",
                opacity: 1,
                zIndex: 10,
                transform: "translateY(0)",
                animation: "fadeIn 0.5s ease-in-out",
              }}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl">
                      {selectedStation.name}
                    </h3>
                    <p className="text-gray-600">{selectedStation.address}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-3 h-3 rounded-full ${getAvailabilityColor(selectedStation.availability)}`}
                    ></div>
                    <span>
                      {getAvailabilityText(selectedStation.availability)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Battery size={18} className="icon-3d" />
                      <span className="text-sm font-medium">Conectores</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedStation.connectorTypes.map((type) => (
                        <Badge
                          key={type}
                          variant="outline"
                          className="bg-white"
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-700">
                      <DollarSign size={18} className="icon-3d" />
                      <span className="text-sm font-medium">Preço</span>
                    </div>
                    <p className="mt-2 font-semibold text-lg">
                      R${" "}
                      {selectedStation.pricePerKwh.toFixed(2).replace(".", ",")}
                      /kWh
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    className="flex-1 bg-[#00FF99] hover:bg-[#00CC77] text-[#0C1F38] transition-all duration-300 transform hover:scale-105 shadow-md rounded-lg"
                    onClick={() => {
                      // Ensure map tab is active to show the route
                      setActiveTab("map");
                      // Force map to recalculate size
                      setTimeout(() => {
                        const event = new Event("resize");
                        window.dispatchEvent(event);
                      }, 100);
                    }}
                  >
                    <Navigation size={16} className="mr-2 icon-3d" /> Obter
                    Direções
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-[#0C1F38] text-[#0C1F38] transition-all duration-300 hover:bg-[#0C1F38]/10 rounded-lg"
                  >
                    <Clock size={16} className="mr-2 icon-3d" /> Reservar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapSection;
