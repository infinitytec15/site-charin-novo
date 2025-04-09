import React, { useState, useEffect, useRef, useMemo } from "react";
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
      z-index: 1;
      width: 100% !important;
      height: 100% !important;
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
    }
    .leaflet-pane {
      z-index: 1 !important;
    }
    .leaflet-tile-pane {
      z-index: 1 !important;
    }
    .leaflet-overlay-pane {
      z-index: 2 !important;
    }
    .leaflet-marker-pane {
      z-index: 3 !important;
    }
    .leaflet-popup-pane {
      z-index: 4 !important;
    }
    .leaflet-control {
      z-index: 5 !important;
    }
  `;
  document.head.appendChild(style);
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

// Custom marker icon component
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
        width: 32px; 
        height: 32px; 
        background-color: #00FF99; 
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C1F38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <div style="
          position: absolute; 
          bottom: -2px; 
          right: -2px; 
          width: 12px; 
          height: 12px; 
          background-color: ${color}; 
          border-radius: 50%; 
          border: 2px solid white;
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
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

// Animation component for map markers
const AnimatedMarker = ({ station }: { station: ChargingStation }) => {
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (markerRef.current) {
      const markerElement = markerRef.current.getElement();
      if (markerElement) {
        gsap.from(markerElement, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
          delay: parseInt(station.id) * 0.2,
        });
      }
    }
  }, [station.id]);

  return (
    <Marker
      position={station.position}
      icon={createCustomIcon(station.availability)}
      ref={markerRef}
    >
      <Popup>
        <div className="p-2">
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
            {station.pricePerKwh.toFixed(2)} R$/kWh
          </p>
        </div>
      </Popup>
    </Marker>
  );
};

// Map center animation component
const MapCenterAnimator = ({
  center,
  zoom = 13,
}: {
  center: [number, number];
  zoom?: number;
}) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 0.8,
    });
  }, [center, map, zoom]);

  return null;
};

// Ensure map is properly sized
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
    };

    // Initial resize with multiple attempts to ensure it works
    setTimeout(resizeMap, 100);
    setTimeout(resizeMap, 300);
    setTimeout(resizeMap, 500);
    setTimeout(resizeMap, 1000);

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
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeMap);
      observer.disconnect();
    };
  }, [map]);

  return null;
};

const MapSection = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on component mount
    if (mapContainerRef.current && filtersRef.current && searchRef.current) {
      gsap.from(searchRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(filtersRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(mapContainerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    }
  }, []);
  const [activeTab, setActiveTab] = useState("map");
  const [priceRange, setPriceRange] = useState([0, 2]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    connectorTypes: [] as string[],
    availability: [] as string[],
  });

  // Mock data for charging stations
  const mockStations: ChargingStation[] = [
    {
      id: "1",
      name: "Estação Central",
      address: "Av. Paulista, 1000, São Paulo, SP",
      distance: "1.2 km",
      connectorTypes: ["CCS", "CHAdeMO"],
      availability: "available",
      pricePerKwh: 1.25,
      rating: 4.5,
      position: [-23.5505, -46.6333], // São Paulo - Av. Paulista
    },
    {
      id: "2",
      name: "Shopping Recarga",
      address: "Rua Augusta, 500, São Paulo, SP",
      distance: "2.5 km",
      connectorTypes: ["Type 2", "CCS"],
      availability: "busy",
      pricePerKwh: 1.5,
      rating: 4.2,
      position: [-23.5489, -46.6388], // São Paulo - Rua Augusta
    },
    {
      id: "3",
      name: "Posto Eletro",
      address: "Av. Rebouças, 750, São Paulo, SP",
      distance: "3.8 km",
      connectorTypes: ["Type 2"],
      availability: "available",
      pricePerKwh: 1.15,
      rating: 4.7,
      position: [-23.5607, -46.6704], // São Paulo - Av. Rebouças
    },
    {
      id: "4",
      name: "EletriCharge Rio",
      address: "Av. Atlântica, 500, Rio de Janeiro, RJ",
      distance: "0.8 km",
      connectorTypes: ["CCS", "CHAdeMO", "Type 2"],
      availability: "available",
      pricePerKwh: 1.35,
      rating: 4.8,
      position: [-22.9068, -43.1729], // Rio de Janeiro - Copacabana
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
      name: "Eletroposto Curitiba",
      address: "Rua XV de Novembro, 250, Curitiba, PR",
      distance: "2.1 km",
      connectorTypes: ["Type 2"],
      availability: "available",
      pricePerKwh: 1.1,
      rating: 4.6,
      position: [-25.4284, -49.2733], // Curitiba
    },
  ];

  const [selectedStation, setSelectedStation] =
    useState<ChargingStation | null>(null);

  const handleStationSelect = (station: ChargingStation) => {
    setSelectedStation(station);
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
    // Check if we're in the franchise section by looking at the parent container's height
    const isFranchiseSection =
      document.querySelector('div[style*="height: 600px"]') !== null;

    if (isFranchiseSection) {
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
  }, [mockStations]);

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

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // If there are filtered results and we're not already viewing the first one
    if (filteredStations.length > 0) {
      setSelectedStation(filteredStations[0]);

      // Get the coordinates of the first result to center the map
      if (activeTab === "map") {
        // If we're in map view, we'll center on the first result
        // The MapCenterAnimator component will handle the actual centering
      } else {
        // If we're in list view, switch to map view to show the result
        setActiveTab("map");
      }
    } else {
      // No results found
      alert(
        "Nenhum ponto de recarga encontrado para esta busca. Tente outra localização.",
      );
    }
  };

  // These functions are now defined at the module level

  return (
    <div
      className="w-full h-full bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-md border border-gray-200"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#0C1F38] mb-6">
        Encontre Pontos de Recarga
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - Map and filters */}
        <div className="w-full lg:w-2/3">
          <div
            ref={searchRef}
            className="mb-4 flex flex-col md:flex-row gap-4 bg-white"
          >
            <form
              onSubmit={handleSearchSubmit}
              className="flex flex-grow gap-2"
            >
              <div className="relative flex-grow">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  placeholder="Buscar por cidade, estado ou franquia (ex: São Paulo, SP)"
                  className="pl-10 bg-gray-50 border-gray-200"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <Button
                type="submit"
                className="bg-[#00FF99] hover:bg-[#00CC77] text-[#0C1F38] font-medium"
              >
                <Search size={16} className="mr-2" /> Buscar
              </Button>
              <Button
                type="button"
                className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white font-medium"
                onClick={() => {
                  // Scroll to filters section on mobile
                  if (window.innerWidth < 1024 && filtersRef.current) {
                    filtersRef.current.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Filter size={16} className="mr-2" /> Filtros
              </Button>
            </form>
          </div>

          <Tabs defaultValue="map" className="w-full">
            <TabsList className="mb-4 bg-gray-100 border border-gray-300">
              <TabsTrigger
                value="map"
                onClick={() => setActiveTab("map")}
                className={activeTab === "map" ? "bg-[#00FF99]/20" : ""}
              >
                Mapa
              </TabsTrigger>
              <TabsTrigger
                value="list"
                onClick={() => setActiveTab("list")}
                className={activeTab === "list" ? "bg-[#00FF99]/20" : ""}
              >
                Lista
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="w-full">
              <div
                ref={mapContainerRef}
                className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden relative border border-gray-300"
                style={{
                  minHeight: "500px",
                  backgroundColor: "#f0f0f0",
                  position: "relative",
                  zIndex: 1,
                  display: "block",
                }}
              >
                <MapContainer
                  center={[-23.5505, -46.6333]}
                  zoom={13}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#f0f0f0",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                  className="leaflet-container-fix"
                  key="map-container"
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
                    />
                  )}

                  {filteredStations.map((station) => (
                    <AnimatedMarker key={station.id} station={station} />
                  ))}

                  <FixMapSize />
                </MapContainer>

                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md text-sm z-[1000] border border-gray-300">
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
              <div className="space-y-4">
                {filteredStations.map((station) => (
                  <Card
                    key={station.id}
                    className={`cursor-pointer hover:border-[#00FF99] transition-colors shadow-md ${selectedStation?.id === station.id ? "border-[#00FF99] border-2" : "border border-gray-300"}`}
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
                            {station.pricePerKwh.toFixed(2)} R$/kWh
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

        {/* Right side - Filters and station details */}
        <div className="w-full lg:w-1/3">
          {selectedStation ? (
            <Card className="mb-6 border border-gray-300 shadow-md">
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
                      <Battery size={18} />
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
                      <DollarSign size={18} />
                      <span className="text-sm font-medium">Preço</span>
                    </div>
                    <p className="mt-2 font-semibold text-lg">
                      {selectedStation.pricePerKwh.toFixed(2)} R$/kWh
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button className="flex-1 bg-[#00FF99] hover:bg-[#00CC77] text-[#0C1F38]">
                    <Navigation size={16} className="mr-2" /> Obter Direções
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-[#0C1F38] text-[#0C1F38]"
                  >
                    <Clock size={16} className="mr-2" /> Reservar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : null}

          <Card ref={filtersRef} className="border border-gray-300 shadow-md">
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-4">Filtros</h3>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Tipo de Conector</h4>
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
                <h4 className="text-sm font-medium mb-2">Disponibilidade</h4>
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
                <h4 className="text-sm font-medium mb-2">Preço por kWh</h4>
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
                  <span>{priceRange[0].toFixed(2)} R$</span>
                  <span>{priceRange[1].toFixed(2)} R$</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button
                  className="flex-1 bg-[#00FF99] hover:bg-[#00CC77] text-[#0C1F38]"
                  onClick={() => {
                    // Scroll back to map/list view after applying filters on mobile
                    if (window.innerWidth < 1024 && mapContainerRef.current) {
                      mapContainerRef.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Aplicar Filtros ({filteredStations.length} resultados)
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setSelectedFilters({
                      connectorTypes: [],
                      availability: [],
                    });
                    setPriceRange([0, 2]);
                  }}
                >
                  Limpar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
