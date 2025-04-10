import React, { useEffect, useState } from "react";
import MapSection from "@/components/MapSection";
import { useSearchParams } from "react-router-dom";

const MapStandalone = () => {
  const [searchParams] = useSearchParams();
  const isFranchise = searchParams.get("franchise") === "true";
  const [mapKey, setMapKey] = useState(Date.now());

  useEffect(() => {
    // Force re-render of map component
    setMapKey(Date.now());

    // Set a flag to indicate this is a standalone map
    // Using window as any to avoid TypeScript errors
    (window as any).isStandaloneMap = true;

    // Set a flag to indicate if this is a franchise map
    (window as any).isFranchiseMap = isFranchise;

    return () => {
      (window as any).isStandaloneMap = false;
      (window as any).isFranchiseMap = false;
    };
  }, [isFranchise]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <MapSection key={mapKey} />
    </div>
  );
};

export default MapStandalone;
