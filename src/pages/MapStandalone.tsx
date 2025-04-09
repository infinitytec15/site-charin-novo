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
    window.isStandaloneMap = true;

    // Set a flag to indicate if this is a franchise map
    window.isFranchiseMap = isFranchise;

    return () => {
      window.isStandaloneMap = false;
      window.isFranchiseMap = false;
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
