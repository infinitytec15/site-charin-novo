import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";

// Lazy load components for better performance
const Home = lazy(() => import("./components/home"));
const FranchisePage = lazy(() => import("./pages/FranchisePage"));
const WhiteLabelPage = lazy(() => import("./pages/WhiteLabelPage"));
const PointsPage = lazy(() => import("./pages/PointsPage"));
const CodigoConduta = lazy(() => import("./pages/codigoconduta"));
const PoliticaPrivacidade = lazy(() => import("./pages/politicaprivacidade"));
const TermosDeUso = lazy(() => import("./pages/termosdeuso"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/white-label" element={<WhiteLabelPage />} />
          <Route path="/points" element={<PointsPage />} />
          <Route path="/codigoconduta" element={<CodigoConduta />} />
          <Route
            path="/politicaprivacidade"
            element={<PoliticaPrivacidade />}
          />
          <Route path="/termosdeuso" element={<TermosDeUso />} />
          <Route path="/sobre" element={<AboutUs />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
