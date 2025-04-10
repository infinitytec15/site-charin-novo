import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import { Toaster } from "@/components/ui/toaster";
import MobileFooter from "./components/MobileFooter";

// Lazy load components for better performance
const Home = lazy(() => import("./components/home"));
const FranchisePage = lazy(() => import("./pages/FranchisePage"));
const WhiteLabelPage = lazy(() => import("./pages/WhiteLabelPage"));
const PointsPage = lazy(() => import("./pages/PointsPage"));
const CodigoConduta = lazy(() => import("./pages/codigoconduta"));
const PoliticaPrivacidade = lazy(() => import("./pages/politicaprivacidade"));
const PoliticaSeguranca = lazy(() => import("./pages/politicaseguranca"));
const Cancelamento = lazy(() => import("./pages/cancelamento"));
const TermosDeUso = lazy(() => import("./pages/termosdeuso"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const MapStandalone = lazy(() => import("./pages/MapStandalone"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AppPage = lazy(() => import("./pages/AppPage"));

// Lazy load point types pages
const Aeroportos = lazy(() => import("./pages/points/Aeroportos"));
const CentrosUrbanos = lazy(() => import("./pages/points/CentrosUrbanos"));
const Condominios = lazy(() => import("./pages/points/Condominios"));
const Hoteis = lazy(() => import("./pages/points/Hoteis"));
const PostosDeCombustivel = lazy(
  () => import("./pages/points/PostosDeCombustivel"),
);
const ShoppingCenters = lazy(() => import("./pages/points/ShoppingCenters"));
const Supermercados = lazy(() => import("./pages/points/Supermercados"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-xl font-medium text-[#0C1F38]">Carregando...</p>
        </div>
      }
    >
      <>
        <MobileFooter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/whitelabel" element={<WhiteLabelPage />} />
          <Route path="/points" element={<PointsPage />} />
          <Route path="/points/Aeroportos" element={<Aeroportos />} />
          <Route path="/points/CentrosUrbanos" element={<CentrosUrbanos />} />
          <Route path="/points/Condominios" element={<Condominios />} />
          <Route path="/points/Hoteis" element={<Hoteis />} />
          <Route
            path="/points/PostosDeCombustivel"
            element={<PostosDeCombustivel />}
          />
          <Route path="/points/ShoppingCenters" element={<ShoppingCenters />} />
          <Route path="/points/Supermercados" element={<Supermercados />} />
          <Route path="/codigoconduta" element={<CodigoConduta />} />
          <Route
            path="/politicaprivacidade"
            element={<PoliticaPrivacidade />}
          />
          <Route path="/politicaseguranca" element={<PoliticaSeguranca />} />
          <Route path="/cancelamento" element={<Cancelamento />} />
          <Route path="/termosdeuso" element={<TermosDeUso />} />
          <Route path="/sobre" element={<AboutUs />} />
          <Route path="/map-standalone" element={<MapStandalone />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/app" element={<AppPage />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Toaster />
      </>
    </Suspense>
  );
}

export default App;
